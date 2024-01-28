import React from 'react';
import { StyleSheet, View, Image, StatusBar, Platform, Text, Pressable, Modal, FlatList } from 'react-native';
import config from '../../config';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { scale } from 'react-native-size-matters';
import CustomButton from '../../component/CustButton';
import SoundPlayer from 'react-native-sound-player';
import RNPickerSelect from 'react-native-picker-select';
import styles from './style';
import { BottomArrow } from '../../assets/svg/';
import { BlurView } from "@react-native-community/blur";
import images from '../../config/Images'

const placeholder = {
  label: 'Select a language...',
  value: null,
  color: config.Constant.COLOR_LIGHT_GREY,
};
const langArr = [
  {
    label: 'ENGLISH',
    value: 'en',
    color: config.Constant.COLOR_BLACK,
  },
  {
    label: 'हिन्दी',
    value: 'hi',
    color: config.Constant.COLOR_BLACK,
  },
];

export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languageUdate: true,
      langSelect: 'en',
      langModal: false
    };
    config.I18N.locale = 'en';
  }

  componentDidMount = () => {
    this.viewBold.animate({ 0: { opacity: 0 }, 1: { opacity: 0 } });
    this.viewLight.animate({ 0: { opacity: 0 }, 1: { opacity: 0 } });

    setTimeout(() => {
      this.viewBold.animate({ 0: { opacity: 0 }, 1: { opacity: 1 } });
    }, 2000);

    setTimeout(() => {
      this.viewLight.animate({ 0: { opacity: 0 }, 1: { opacity: 1 } });
    }, 4000);
    SoundPlayer.playSoundFile('bbvivekb', 'mp3');
    this.props.navigation.addListener('blur', () => {
      SoundPlayer.stop();
    });
  };

  Item = ({ item, index }) => {
    return (
      <Pressable onPress={() => [this.setState({
        langSelect: item.value,
      }),
      config.I18N.locale = item.value,
      this.forceUpdate()]}>
        <View style={[styles.itemMainView, {
          marginBottom: index == 1 ?
            scale(10) : 0
        }]}>
          <Text style={[styles.itemStaticText, {
            color: this.state.langSelect == item.value ?
              config.Constant.COLOR_RED
              : config.Constant.COLOR_DARK_GREY
          }]}>{index == 0 ? "English" : item.label}</Text>
          <View style={[styles.clickItemView, {
            backgroundColor: this.state.langSelect == item.value ?
              config.Constant.COLOR_RED
              : config.Constant.COLOR_WHITE,
            opacity: this.state.langSelect == item.value ? 1 : 0.3,
            borderColor: this.state.langSelect == item.value ?
              config.Constant.COLOR_RED :
              config.Constant.COLOR_DARK_GREY
          }]} ><Image source={images.TickIcon}
            style={styles.tickimg} resizeMode={'cover'} /></View>
        </View>
        {index == 1 ? null :
          <View style={[styles.borderView, { width: config.Constant.SCREEN_WIDTH - scale(30) }]} />}
      </Pressable>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle={'light-content'}
          translucent={true}
        />
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.subSingleCardTop}
          colors={[
            config.Constant.COLOR_DARK_BLACK,
            config.Constant.COLOR_LIGHT_BLACK,
          ]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              paddingHorizontal: config.Constant.SCREEN_WIDTH * 0.05,
            }}>
            <Image
              source={require('../../assets/images/badabusiness_logo.png')}
              resizeMode={'contain'}
              style={styles.logoStyle}
            />
            <View style={styles.pickerBorder}>
              {/* <RNPickerSelect
                placeholder={placeholder}
                items={langArr}
                onValueChange={value => {
                  if (value == 'hi' || value == 'en') {
                    this.setState({
                      langSelect: value,
                    });
                    config.I18N.locale = value;
                    this.forceUpdate();
                  }
                }}
                onUpArrow={() => {
                  this.inputRefs.focus();
                }}
                onDownArrow={() => {
                  this.inputRefs.togglePicker();
                }}
                style={pickerSelectStyles}
                value={this.state.langSelect}
                ref={el => {
                  this.inputRefs = el;
                }}
                Icon={() => {
                  return (
                    <BottomArrow
                      width={15}
                      height={15}
                    />
                  );
                }}
              /> */}
              <Pressable onPress={() =>
                this.setState({ langModal: true })}>
                <View style={styles.dropDownView}>
                  <Text style={styles.languageText}>
                    {this.state.langSelect == 'en' ?
                      langArr[0].label : langArr[1].label}</Text>
                  <BottomArrow
                    width={10}
                    height={6}
                  />
                </View>
              </Pressable>
            </View>
          </View>
          <Animatable.View
            ref={ref => (this.viewBold = ref)}
            style={styles.rowView}>
            <Animatable.Text style={styles.introText}>
              {config.I18N.t('hiIm')}
            </Animatable.Text>
            <Animatable.Text style={styles.boldTxt}>
              {config.I18N.t('vivekBindra')}
            </Animatable.Text>
          </Animatable.View>
          <Animatable.View
            ref={ref => (this.viewLight = ref)}
            style={styles.rowView}>
            <Animatable.Text style={styles.lightText}>
              {config.I18N.t('intro2')}
            </Animatable.Text>
          </Animatable.View>
          <Image
            style={styles.floatIcon}
            source={require('../../assets/images/vivekPrt.png')}
            resizeMode={'contain'}
          />
          <View style={{ flex: 1 }} />
          <CustomButton
            onPress={() => {
              this.props.navigation.navigate('LoginScreen');
            }}
            title={config.I18N.t('beAPartOfSuccessStory')}
            style={styles.btnStyle}
          />
        </LinearGradient>
        <Modal transparent={true} visible={this.state.langModal}
          statusBarTranslucent={true}>
          <View style={styles.Coonstant}>
            <BlurView
              style={styles.BlurSty}
              blurType="dark"
              blurAmount={10}
              blurRadius={5}
              reducedTransparencyFallbackColor="white"
            />
            <View style={styles.mainView}>
              <Text style={styles.mainTitle}>
                {config.I18N.t('SelectLanguage')}</Text>
              <Text style={styles.modalStaticText}>
                {config.I18N.t('Language_option_can_be_changed_anytime')}
              </Text>
              <View style={styles.borderView} />
              <FlatList
                showsVerticalScrollIndicator={false}
                data={langArr}
                renderItem={(item, index) => this.Item(item, index)}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <View style={styles.CloseMainView}>
              <Pressable onPress={() => this.setState({ langModal: false })}
                style={styles.CloseBtn}>
                <View style={styles.CloseSemiView}>
                  <Image source={images.CloseIcon} style={styles.CloseImg}
                    resizeMode={'cover'} />
                </View>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: scale(12),
    fontFamily: config.Constant.Font_Medium,
    paddingVertical: 0,
    paddingHorizontal: 10,
    borderWidth: 0,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'white',
    width: 120,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: scale(12),
    fontFamily: config.Constant.Font_Medium,
    paddingHorizontal: 0,
    height: 30,
    borderRadius: 8,
    borderWidth: 0,
    color: 'white',
    marginTop: -22,
    borderColor: 'gray',
    width: 150,
    paddingRight: 0, // to ensure the text is never behind the icon
  },
  iconContainer: {
    bottom: Platform.OS == 'ios' ? 3 : -4,
    right: 15,
  },
});
