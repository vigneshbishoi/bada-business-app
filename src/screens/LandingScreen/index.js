import React from 'react';
import {StyleSheet, View, Image, StatusBar} from 'react-native';
import config from '../../config';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';

export default class LandingScreen extends React.Component {
  componentDidMount = async () => {
    // await AsyncStorage.setItem(
    //   'USER_DATA',
    //   JSON.stringify({
    //     id: '113616',
    //     user_id: 'e67bc0f955265d0de86445ed',
    //     first_name: 'abhishek',
    //     last_name: '',
    //     phone_no: '9601656116',
    //     country_code: '+91',
    //     full_phone_no: '+919601656116',
    //     isDocumentVerified: 'PENDING',
    //     phone_verify: true,
    //     registration_date: '2021-05-18T21:01:48.000Z',
    //     user_status: 'ACTIVE',
    //     level: 'ENTREPRENEUR',
    //     created_at: '2021-04-26T06:28:21.000Z',
    //     updated_at: '2021-05-18T21:01:48.000Z',
    //     access_token:
    //       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiIxMTM2MTYiLCJ1c2VyX2lkIjoiZTY3YmMwZjk1NTI2NWQwZGU4NjQ0NWVkIiwiZmlyc3RfbmFtZSI6ImFiaGlzaGVrIiwibGFzdF9uYW1lIjoiIiwiY291bnRyeV9jb2RlIjoiKzkxIiwicGhvbmVfbm8iOiI5NjAxNjU2MTE2IiwiZnVsbF9waG9uZV9ubyI6Iis5MTk2MDE2NTYxMTYiLCJsZXZlbCI6IkVOVFJFUFJFTkVVUiIsIndoYXRfYmVjb21lIjoiRW50cmVwcmVuZXVyIiwiZW1haWwiOiIiLCJjcmVhdGVkX2F0IjoiMjAyMS0wNC0yNlQwNjoyODoyMS4wMDBaIiwiZG9iIjpudWxsLCJ1c2VyX3N0YXR1cyI6IkFDVElWRSIsImRvY192ZXJpZnkiOiJQRU5ESU5HIiwiaW5kdXN0cnlfaWQiOm51bGwsImxhbmd1YWdlIjpudWxsLCJ1c2VyX2ltYWdlIjpudWxsLCJjcmVkaXRfY3VycmVudCI6bnVsbCwiY3JlZGl0X3VzZWQiOm51bGwsInRvdGFsX2FjdGl2YXRpb25fY291cnNlX2xlZnQiOjAsImFjY2Vzc190b2tlbiI6bnVsbCwicGhvbmVfdmVyaWZ5Ijp0cnVlLCJyZWdpc3RyYXRpb25fZGF0ZSI6IjIwMjEtMDUtMThUMTA6NTc6NTUuMDAwWiIsInRva2VuX2V4cGlyZWRfdGltZSI6IjIwMjItMDUtMThUMTA6NTc6NTUuMDAwWiIsInVwZGF0ZWRfYXQiOiIyMDIxLTA1LTE4VDEwOjU5OjM3LjAwMFoifSwiaWF0IjoxNjIxMzkxNTA4LCJleHAiOjE2MjM5ODM1MDh9.y9sEJFw9IyGkzArGE_Vp2-8XN0ttZr25Gf1bbxov2RM',
    //     token_expired_time: '2022-05-18T21:01:48.000Z',
    //   }),
    // );
    var USER_DATA = await AsyncStorage.getItem('USER_DATA');
    if (!!USER_DATA) {
      config.Constant.USER_DATA = JSON.parse(USER_DATA);
      setTimeout(() => {
        this.props.navigation.replace('HomeScreen');
      }, 5000);
    } else {
      setTimeout(() => {
        this.props.navigation.replace('SplashScreen');
      }, 5000);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle={'light-content'}
          translucent={true}
        />
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.subSingleCardTop}
          colors={[
            config.Constant.COLOR_DARK_BLACK,
            config.Constant.COLOR_LIGHT_BLACK,
          ]}>
          <Image
            source={require('../../assets/images/badabusiness_logo.png')}
            resizeMode={'contain'}
            style={{
              width: config.Constant.SCREEN_WIDTH * 0.7,
              alignSelf: 'center',
              height: 250,
            }}
          />
        </LinearGradient>
      </View>
    );
  }
}
