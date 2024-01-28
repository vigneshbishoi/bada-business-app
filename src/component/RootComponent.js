import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import modules from '../modules';
import config from '../config';
import DropdownAlert from 'react-native-dropdownalert';
import CustLoader from './CustLoader';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
var PushNotification = require('react-native-push-notification');
import messaging from '@react-native-firebase/messaging';
import {sendNotification} from '../Util/Utilities';
import LinearGradient from 'react-native-linear-gradient';
import {
  BrightcovePlayer,
  BrightcovePlayerPoster,
  BrightcovePlayerUtil,
} from 'react-native-brightcove-player';

export default class RootComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offlineVideos: [],
    };

  }

  componentWillUnmount=()=>{
   // this.disposer && this.disposer();
   this.checkFCMPermission()
  }

  componentDidMount = () => {
    config.Constant.showLoader = this.showLoader;
    BrightcovePlayerUtil.getOfflineVideoStatuses(config.Constant.BrightCoveKey, config.Constant.BrightCovePolicy)
      .then(offlineVideos => {
        this.setState({
          offlineVideos,
        });
      })
      .catch(console.warn);
    this.disposer = BrightcovePlayerUtil.addOfflineNotificationListener(
      offlineVideos => {
        this.setState({
          offlineVideos,
        });
      },
    );
  };

  getDeviceToken = async () => {
    await messaging()
      .getToken()
      .then(fcmTkn => {
        console.log('FCM DEVICE = ' + fcmTkn);
        config.Constant.FCM_TOKEN = fcmTkn;
      })
      .catch(err => {
        console.log(err);
      });
  };
  checkFCMPermission = async () => {
    const authStatus = await messaging().hasPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      this.getDeviceToken();
    } else {
      this.requestPermission();
    }
  };
  requestPermission = async () => {
    try {
      await messaging().requestPermission();
      this.getDeviceToken();
    } catch (error) {}
  };

  getNotificationClass = () => {
    PushNotification.createChannel(
      {
        channelId: 'fcm_fallback_notification_channel', // (required)
        channelName: 'My channel', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
        playSound: true, // (optional) default: true
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: 4, // (optional) default: 4. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
      created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
    PushNotification.configure({
      onNotification: notification => {
        if (!!notification.data && notification.data.order_id) {
          // this.props.navigation.navigate('OrderDetails', {
          //   order_id: notification.data.order_id,
          // });
        } else {
          // this.props.navigation.navigate('Notification');
        }
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
    });
    messaging().onMessage(async remoteMessage => {
      //Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      sendNotification(
        remoteMessage.notification.title,
        remoteMessage.notification.body,
      );
    });
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage,
      );
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
        }
      });
  };

  render() {
    return (
      <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.subSingleCardTop}
          colors={[
            config.Constant.COLOR_DARK_BLACK,
            config.Constant.COLOR_LIGHT_BLACK,
          ]}>
      <SafeAreaView style={styles.container}>
        {this.props.children}
        <CustLoader ref={showLoader => (this.showLoader = showLoader)} />
        <DropdownAlert
          ref={dropDownRef => modules.DropDownAlert.setDropDownRef(dropDownRef)}
          translucent={true}
          closeInterval={2000}
          updateStatusBar={false}
          onTap={data => {}}
          messageNumOfLines={5}
          containerStyle={{
            backgroundColor: config.Constant.COLOR_PRIMARY,
          }}
        />
      </SafeAreaView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(0,0,0,0)'
  },
  subSingleCardTop: {
    flex: 1,
  },
});
