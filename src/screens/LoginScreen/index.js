import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  Platform,
  Alert,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import config from '../../config';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import CustomButton from '../../component/CustButton';
import Ripple from 'react-native-material-ripple';
import CustInput from '../../component/CustInput';
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';
import modules from '../../modules';
import CodeInput from 'react-native-code-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import { scale } from 'react-native-size-matters';
//import { BlurView } from "@react-native-community/blur";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
      num: '',
      validate: false,
      visiblePopup: false,
      otpCode: '',
      stopTimer: true,
      counterDigit: '00:00',
      countryCode: '91'
    };
  }

  componentDidMount = () => {
    this.viewBold.animate({ 0: { opacity: 0 }, 1: { opacity: 0 } });
    this.viewLight.animate({ 0: { opacity: 0 }, 1: { opacity: 0 } });

    setTimeout(() => {
      this.viewBold.animate({ 0: { opacity: 0 }, 1: { opacity: 1 } });
    }, 1000);

    setTimeout(() => {
      this.viewLight.animate({ 0: { opacity: 0 }, 1: { opacity: 1 } });
    }, 2000);
  };
  validate = (navigate = false) => {
    var validate = true;
    if (!this.state.name) {
      validate = false;
    } else if (!this.state.lastname) {
      validate = false;
    } else if (!this.state.num) {
      validate = false;
    } else if (this.state.num.length != 10) {
      validate = false;
    } else {
      //this.props.navigation.navigate('HomeScreen');
      if (!!navigate) {
        this.loginFun();
        // this.setState({
        //   visiblePopup: true,
        // });
        this.timerFun();
      }
    }
    this.setState({
      validate,
    });
    if (validate) {
      //this.props.navigation.navigate('ProfileComplete')
    }
  };

  _onFinishCheckingCode = otpCode => {
    this.setState({
      otpCode,
    });
  };

  otpPopup = () => {
    return (
      <Dialog
        visible={this.state.visiblePopup}
        onTouchOutside={() => {
          this.setState({
            visiblePopup: false,
          });
        }}
        width={1}
        overlayOpacity={0.6}
        overlayBackgroundColor={'rgb(0,0,0)'}
        dialogAnimation={
          new SlideAnimation({
            slideFrom: 'bottom',
          })
        }
        containerStyle={[{ justifyContent: 'flex-end' }]}
        dialogStyle={styles.dialogStyle}>
        <DialogContent style={[styles.dialogContent]}>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                visiblePopup: false,
              });
            }}
            style={styles.cancelBtnView}>
            <Image
              source={require('../../assets/images/whiteCancel.png')}
              style={{ width: 10, height: 10 }}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <View style={styles.popupTitle}>
            <Text style={styles.popupHeaderText}>
              {config.I18N.t('enterOTP')}
            </Text>
            <View style={styles.borderView} />
            <Text style={styles.popupHeaderDesc}>
              {config.I18N.t('enterDigitOTPReceive')}
            </Text>
            <Text
              onPress={() => {
                this.setState({
                  visiblePopup: false,
                });
              }}
              style={styles.popupNum}>
              +{this.state.countryCode} {this.state.num}
              {'  '}
              <Image
                source={require('../../assets/images/editIcon.png')}
                style={{
                  width: 15,
                  height: 15,
                }}
              />
            </Text>
            <CodeInput
              ref="codeInputRef2"
              activeColor={config.Constant.COLOR_LIGHT_GREY}
              inactiveColor={config.Constant.COLOR_LIGHT_GREY}
              autoFocus={false}
              inputPosition="center"
              codeLength={4}
              size={50}
              keyboardType="numeric"
              onFulfill={code => this._onFinishCheckingCode(code)}
              containerStyle={{
                marginTop: 2,
                width: config.Constant.SCREEN_WIDTH * 0.9,
                alignSelf: 'center',
              }}
              codeInputStyle={styles.codeInputStyle}
            />
            <Text style={styles.popupOTPStyle}>
              {config.I18N.t('otpWillExpire')}{' '}
              <Text
                onPress={() => {
                  if (!this.state.stopTimer) {
                    this.loginFun();
                  }
                }}
                style={styles.popupOTPCountStyle}>
                {!!this.state.stopTimer ? this.state.counterDigit : 'Resend'}
              </Text>
            </Text>
            <CustomButton
              onPress={() => {
                this.otpVerify();
              }}
              validate={this.state.otpCode.length == 4}
              title={config.I18N.t('continue')}
              style={styles.popupBtnStyle}
            />
            <View style={styles.termsAndConMainView}>
              <Text style={styles.IagreeText}>
                {config.I18N.t('iagreeWithTermandCon')}</Text>
              <Pressable onPress={() => {
                this.setState({ visiblePopup: false })
                this.props.navigation.push('WebViewText', { type: 2 })
              }}>
                <Text style={styles.termsAndConText}>
                  {config.I18N.t('termAndcon')}</Text>
                <Text style={styles.bottomLineOfTermsAndcon}></Text>
              </Pressable>
            </View>
          </View>
        </DialogContent>
      </Dialog>
    );
  };

  loginFun = async () => {
    config.Constant.showLoader.showLoader();
    var formData = {
      first_name: this.state.name,
      last_name: this.state.lastname,
      phone_no: this.state.num,
      country_code: '+' + this.state.countryCode,
      source_app: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
      source_version: '1.0',
      device_id:"UID1001"
    };
    var data = await modules.APIServices.PostApiCall(
      config.ApiEndpoint.REGISTER_API,
      formData,
    );
    config.Constant.showLoader.hideLoader();
    if (data.success == true) {
      //Alert.alert('success', data.message);
      //config.Constant.USER_DATA = data.data;
      // this.props.navigation.reset({
      //   index: 1,
      //   routes: [{name: 'DashboardTab'}],
      // });
      this.setState({
        dataSource: data.data,
        visiblePopup: true,
      });
      this.timerFun();
    } else {
      // Alert.alert('error', data.message);
    }
  };
  timerFun = () => {
    this.setState({
      stopTimer: true,
    });
    try {
      clearTimeout(this.timeoutRef);
      var counterVar = 60;
      this.timeoutRef = setInterval(() => {
        this.setState({
          counterDigit: `00:${counterVar > 9 ? counterVar : '0' + counterVar}`,
        });
        if (counterVar < 1) {
          clearTimeout(this.timeoutRef);
          this.setState({
            stopTimer: false,
          });
        }
        counterVar = counterVar - 1;
      }, 1000);
    } catch (error) { }
  };
  otpVerify = async () => {
    config.Constant.showLoader.showLoader();
    var formData = {
      otp: this.state.otpCode,
      hash: this.state.dataSource.hash,
      phone_no: this.state.num,
      fcm_token:config.Constant.FCM_TOKEN
    };
    var data = await modules.APIServices.PostApiCall(
      config.ApiEndpoint.VERIFY_OTP_API,
      formData,
    );
    config.Constant.showLoader.hideLoader();
    if (data.success == true) {
      this.setState({
        visiblePopup: false,
      });
      await AsyncStorage.setItem('USER_DATA', JSON.stringify(data.data));
      config.Constant.USER_DATA = data.data;
      if (!!this.state.dataSource.is_register) {
        this.props.navigation.reset({
          index: 1,
          routes: [{ name: 'HomeScreen' }],
        });
      } else {
        this.props.navigation.reset({
          index: 1,
          routes: [{ name: 'ProfileComplete' }],
        });
      }
    } else {
      // Alert.alert('error', data.message);
    }
  };

  TermsAndConditionView = () => {
    return (
      <View style={styles.termsAndConMainView}>
        <Text style={styles.IagreeText}>
          {config.I18N.t('iagreeWithTermandCon')}</Text>
        <Pressable onPress={() => {
          this.props.navigation.push('WebViewText', { type: 2 })
        }}>
          <Text style={styles.termsAndConText}>
            {config.I18N.t('termAndcon')}</Text>
          <Text style={styles.bottomLineOfTermsAndcon}></Text>
        </Pressable>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <BlurView
          style={styles.BlurSty}
          blurType="dark"
          blurAmount={10}
          blurRadius={5}
          reducedTransparencyFallbackColor="white"
        /> */}
        <StatusBar
          backgroundColor={'transparent'}
          barStyle={'light-content'}
          translucent={true}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.subSingleCardTop}
            colors={[
              config.Constant.COLOR_DARK_BLACK,
              config.Constant.COLOR_LIGHT_BLACK,
            ]}>
            <Ripple
              onPress={() => {
                this.props.navigation.pop();
              }}>
              <Image
                source={require('../../assets/images/backIcon.png')}
                resizeMode={'contain'}
                style={styles.backIcon}
              />
            </Ripple>
            <Animatable.View>
              <Animatable.View
                ref={ref => (this.viewBold = ref)}
                style={styles.rowView}>
                <Animatable.Text style={styles.boldTxt}>
                  {config.I18N.t('enterUrDetails')}
                </Animatable.Text>
              </Animatable.View>
              <Animatable.View
                ref={ref => (this.viewLight = ref)}
                style={styles.rowView}>
                <Animatable.Text style={styles.lightText}>
                  {config.I18N.t('soWeCanKnow')}
                </Animatable.Text>
              </Animatable.View>
            </Animatable.View>
            <Image
              style={styles.floatIcon}
              source={require('../../assets/images/vivekHalf.png')}
              resizeMode={'contain'}
            />
          </LinearGradient>
          <View style={styles.body}>
            <Text style={styles.bodyHeader}>
              {config.I18N.t('enterUrDetailAuth')}
            </Text>

            <CustInput
              value={this.state.name}
              onChangeText={name => {
                this.setState({ name }, () => {
                  this.validate();
                });
              }}
              label={config.I18N.t('login_first_name')}
              style={styles.textView1}
            />
            <CustInput
              value={this.state.lastname}
              onChangeText={lastname => {
                this.setState({ lastname }, () => {
                  this.validate();
                });
              }}
              label={config.I18N.t('login_last_name')}
              style={[styles.textView2, {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              }]}
            />
            <CustInput
              value={this.state.num}
              onChangeText={num => {
                this.setState({ num }, () => {
                  this.validate();
                });
              }}
              keyboardType={'number-pad'}
              returnKeyType="done"
              is_display_num={true}
              countryCode={(val) => {
                this.setState({
                  countryCode: val
                })
              }}
              label={config.I18N.t('mobileNumber')}
              style={styles.textView2}
            />
            <Text style={styles.bodyDesc}>
              {config.I18N.t('uWillReceiveOtp')}
            </Text>
            <View style={{ flex: 1 }} />
            <CustomButton
              onPress={() => {
                this.validate(true);
                // this.setState({
                //   visiblePopup: true,
                // });
              }}
              validate={this.state.validate}
              title={config.I18N.t('continue')}
              style={styles.btnStyle}
            />
            <this.TermsAndConditionView />
          </View>
          {this.otpPopup()}
        </ScrollView>
      </View>
    );
  }
}
