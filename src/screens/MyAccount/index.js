import React from 'react';
import {View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '../../component';
import styles from './style';
import {
  BitmapSvg,
  ProfileSvg,
  WalletSvg,
  TandgSvg,
  PrivacySvg,
  MoneySvg,
  LogoutSvg,
  CoursesSvg,
} from '../../assets/svg';
import Ripple from 'react-native-material-ripple';
import config from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class MyAccount extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.navigation.addListener('focus', () => {
      this.forceUpdate();
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header PressDrawer={() => this.props.navigation.openDrawer()} />
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.subSingleCardTop}
          colors={['#5446ff', '#8d7cff']}>
          {/* <BitmapSvg style={styles.bgImage} width={config.Constant.SCREEN_WIDTH} height={127} /> */}
          <Image
            resizeMode={'cover'}
            source={require('../../assets/images/bitmapPng.png')}
            style={styles.bgImage}
          />
          <View style={styles.rowView}>
            {!!config.Constant.USER_DATA.user_image ? (
              <Image
                source={{uri: config.Constant.USER_DATA.user_image}}
                resizeMode={'cover'}
                style={{width: 50, height: 50, borderRadius: 50}}
              />
            ) : (
              <ProfileSvg />
            )}
            <View style={styles.nameView}>
              <Text style={styles.nameTxt}>{`${
                !!config.Constant.USER_DATA.first_name
                  ? config.Constant.USER_DATA.first_name
                  : ''
              } ${
                !!config.Constant.USER_DATA.last_name
                  ? config.Constant.USER_DATA.last_name
                  : ''
              }`}</Text>
              <Text style={styles.decTxt}>
                {!!config.Constant.USER_DATA.level
                  ? config.Constant.USER_DATA.level
                  : ''}
              </Text>
            </View>
            <Ripple
              onPress={() => {
                this.props.navigation.navigate('EditProfile');
              }}
              style={styles.btnView}>
              <Text style={styles.btnName}>{config.I18N.t('editProfile')}</Text>
            </Ripple>
          </View>
        </LinearGradient>
        <View style={styles.bodyView}>
          <Ripple style={styles.rowListView}>
            <Text style={styles.listTxt}>
              {config.I18N.t('Profile_My_Courses')}
            </Text>
            <CoursesSvg />
          </Ripple>
          <View style={styles.borderView} />
          <Ripple
            onPress={() => {
              this.props.navigation.navigate('CreditScores');
            }}
            style={styles.rowListView}>
            <Text style={styles.listTxt}>
              {config.I18N.t('Profile_Credit_Score')}
            </Text>
            <WalletSvg />
          </Ripple>
          <View style={styles.borderView} />
          <Ripple style={styles.rowListView}>
            <Text style={styles.listTxt}>
              {config.I18N.t('Profile_Sub_Plan')}
            </Text>
            <MoneySvg />
          </Ripple>
          <View style={styles.borderView} />
          <Ripple onPress={()=>{
            this.props.navigation.push('WebViewText',{type:2})
          }}  style={styles.rowListView}>
            <Text style={styles.listTxt}>
              {config.I18N.t('Profile_Term_Con')}
            </Text>
            <TandgSvg />
          </Ripple>
          <View style={styles.borderView} />
          <Ripple onPress={()=>{
            this.props.navigation.push('WebViewText',{type:1})
          }} style={styles.rowListView}>
            <Text style={styles.listTxt}>
              {config.I18N.t('Profile_Privacy_Policy')}
            </Text>
            <PrivacySvg />
          </Ripple>
          <View style={styles.borderView} />
          <Ripple onPress={async()=>{
            await AsyncStorage.clear()
            this.props.navigation.reset({
              index: 1,
              routes: [{ name: 'LoginScreen' }],
            });
          }} style={styles.rowListView}>
            <Text style={styles.listTxt}>
              {config.I18N.t('Profile_Logout')}
            </Text>
            <LogoutSvg />
          </Ripple>
          <View style={styles.borderView} />
        </View>
        <Text style={styles.verText}>Version 1.0</Text>
      </View>
    );
  }
}
