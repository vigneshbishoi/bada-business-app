import { Dimensions, Platform, StatusBar, Linking, Alert } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import config from '../config';
import modules from '../modules';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
var PushNotification = require('react-native-push-notification');
import {
  BrightcovePlayer,
  BrightcovePlayerPoster,
  BrightcovePlayerUtil,
} from 'react-native-brightcove-player';

const isIphoneX = () => {
  const dimen = Dimensions.get('window');

  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 896 ||
      dimen.width === 896)
  );
};
const checkInternetConnection = () => {
  return new Promise(async (resolve, reject) => {
    const connectionInfo = await NetInfo.fetch();
    resolve(
      !(connectionInfo.type === 'none' || connectionInfo.type === 'unknown'),
    );
  });
};
const ifIphoneX = (iphoneXStyle, regularStyle) => {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
};
const getStatusBarHeight = safe => {
  return Platform.select({
    ios: ifIphoneX(safe ? 53 : 40, 30),
    android: StatusBar.currentHeight + 5,
  });
};
const emailValidation = email => {
  var emailString = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,5})+$/;
  return email.match(emailString);
};
const manageApiResponseCode = data => {
  modules.DropDownAlert.showAlert('error', '', data.message);
  config.Constant.showLoader.hideLoader();
  if (data.status_code === 402) {
    try {
      config.Constant.socket.emit('user_id', config.Constant.USER_DATA.id, 2);
    } catch (error) { }
    config.Constant.USER_DATA = {
      access_token: '',
    };

    AsyncStorage.getAllKeys().then(keys => AsyncStorage.multiRemove(keys));
    config.Constant.RootNavigation.reset({
      index: 1,
      routes: [{ name: 'Login' }],
    });
  }
};
const msToHMS = ms => {
  // 1- Convert to seconds:
  var seconds = ms / 1000;

  // 2- Extract hours:
  var hours = parseInt(seconds / 3600); // 3,600 seconds in 1 hour
  seconds = seconds % 3600; // seconds remaining after extracting hours

  // 3- Extract minutes:
  var minutes = parseInt(seconds / 60); // 60 seconds in 1 minute

  // 4- Keep only seconds not extracted to minutes:
  seconds = seconds % 60;

  //alert( hours+":"+minutes+":"+seconds);
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  var hms = hours != 0 ? hours + ' H ' + minutes + ' M' :
    minutes + ' mins'
  return hms;
};
const countDistance = (lat1, lon1, lat2, lon2, unit) => {
  if (lat1 == lat2 && lon1 == lon2) {
    return 0;
  } else {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == 'K') {
      dist = dist * 1.609344;
    }
    if (unit == 'N') {
      dist = dist * 0.8684;
    }
    return dist;
  }
};

const sendNotification = (title, message) => {
  PushNotification.localNotification({
    autoCancel: true,
    vibrate: true,
    vibration: 300,
    priority: 'high',
    visibility: 'private',
    importance: 'high',
    allowWhileIdle: false,
    ignoreInForeground: false,
    title: title,
    message: message,
    playSound: true,
    soundName: 'default',
    data: remoteMessage.data,
    channelId: 'fcm_fallback_notification_channel',
    channelName: 'My channel',
  });
};

const intToString = value => {
  var suffixes = ['', 'k', 'm', 'b', 't'];
  var suffixNum = Math.floor(('' + value).length / 3);
  var shortValue = parseFloat(
    (suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2),
  );
  if (shortValue % 1 != 0) {
    shortValue = shortValue.toFixed(1);
  }
  return shortValue + suffixes[suffixNum];
};

const userDateUpdate = async () => {
  var data = await modules.APIServices.GetApiCall(
    config.ApiEndpoint.USER_DETAILS,
  );
  if (data.success == true) {
    await AsyncStorage.setItem('USER_DATA', JSON.stringify(data.data));
    config.Constant.USER_DATA = data.data;
    return true
  }
  return false
};

const VideoDownload = (videoId) => {
  BrightcovePlayerUtil.requestDownloadVideoWithVideoId(
    config.Constant.BrightCoveKey,
    config.Constant.BrightCovePolicy,
    videoId,
  ).catch((err) => {
    alert(err)
  });
};

const Coverter = (num, digits) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
};

const Utilities = {
  isIphoneX,
  getStatusBarHeight,
  emailValidation,
  checkInternetConnection,
  manageApiResponseCode,
  countDistance,
  sendNotification,
  msToHMS,
  intToString,
  userDateUpdate,
  VideoDownload,
  Coverter
};

module.exports = Utilities;
