import {Dimensions, Platform, I18nManager} from 'react-native';
import { scale } from 'react-native-size-matters';

// Base_Url = 'http://conappqaapi.badabusiness.co.in/api/v1/'//'http://conappdevapi.badabusiness.co.in/api/v1/';
Base_Url = 'http://conappdevapi.badabusiness.co.in/api/v1/'
UsersProfile_Url = '';
AdminBase_Url = '';

export default Constant = {
  // app details
  APP_LINK_IOS: '',
  APP_LINK_ANDROID: '',

  socket: null,

  FCM_TOKEN: '',

  // color
  COLOR_PRIMARY: '#f1002e',
  COLOR_DARK_PRIMARY: '#b79665',
  COLOR_BTN: '#D31C4A',
  COLOR_BTN_LIGHT: '#FF2E82',
  COLOR_TRANSPARENT: 'rgba(0,0,0,0)',
  COLOR_BLACK: '#000',
  COLOR_GREEN: '#00B460',
  COLOR_LIGHT_GREEN: '#00C569',
  COLOR_INPUT: '#F6F6F6',
  COLOR_WHITE: '#fff',
  COLOR_BORDER_COLOR: '#F5F5F5',
  COLOR_TAB: '#E82565',
  COLOR_TXT_BOX: '#c99128',
  COLOR_LIGHT_GREY: '#b5b5b9',
  COLOR_EXTRA_LIGHT: '#AAAAAA',
  COLOR_ULTRA_LIGHT_GREY: '#F8F8F8',
  COLOR_GREY: '#A8A8A8',
  COLOR_BLUE:'#5446ff',
  COLOR_DARK_GREY: '#292830',
  COLOR_LIGHT_BG: 'rgba(40, 40, 48,0.6)',
  COLOR_ULTRA_LIGHT_BG: 'rgba(40, 40, 48,0.25)',
  COLOR_YELLOW: '#FCB900',
  COLOR_MONEY_GREEN: '#219804',
  COLOR_PINK_ROUND: '#D81E50',
  COLOR_LIGHT_BACKGROUND: '#FBFBFB',
  COLOR_LIGHT_BLACK: '#53515e',
  COLOR_DARK_BLACK: '#292830',
  COLOR_DARK_BLUE: '#5446ff',
  COLOR_LIGHT_BLACK_DRAWER: '#f7f7f7',
  COLOR_DRAWER_LIGHT: '#4C4C51',
  COLOR_DRAWER_DARK: '#F22D4E',
  COLOR_SILVER: '#D3D3D3',
  COLOR_HOME_CLICABLE: '#d8d7e5',
  COLOR_HOME__LIGHT_CLICABLE: '#f0efff',
  COLOR_LINEAR__LIGHT: '#5446ff',
  COLOR_LINEAR__DARK: '#8d7cff',
  COLOR_RED: '#f1002e',
  COLOR_SHADOW_HOME_LIST: '#b3b3b3',
  COLOR_BORDER_HOME_LIST: '#EAEAEA',

  // fonts
  Font_Regular: 'Poppins-Regular',
  Font_Bold: 'Poppins-Bold',
  Font_Semi_Bold: 'Poppins-SemiBold',
  Font_Medium: 'Poppins-Medium',
  Font_LIGHT: 'Poppins-Light',
  Font_Italic_LIGHT: '',

  // font sizes
  Font_Size_10: scale(10),      
  Font_Size_11: scale(11),
  Font_Size_12: scale(12),
  Font_Size_13: scale(13),
  Font_Size_14: scale(14),
  Font_Size_15: scale(15),
  Font_Size_16: scale(16),
  Font_Size_17: scale(17),
  Font_Size_18: scale(18),
  Font_Size_19: scale(19),
  Font_Size_20: scale(20),
  Font_Size_21: scale(21),
  Font_Size_22: scale(22),

  // screen dimension
  SCREEN_WIDTH: Dimensions.get('screen').width,
  SCREEN_HEIGHT: Dimensions.get('screen').height,
  Base_Url: Base_Url,
  UsersProfile_Url: UsersProfile_Url,
  //Socket
  USER_DATA: {
    access_token: '',
  },
  RootNavigation: null,
  showLoader: '',
  BrightCovePolicy:"BCpkADawqM2__41Bxf3XuIMeXhvI1nhXfGzEBHhmWj9OAk-NQ-JngsfxOdjn3oPq8lsWgXpCRpZG6vumyteqFAts6_miBxRZP7tGOQvr5Okus7Sihv9QrFntQUMc8lKw1eCHZin5N4Dd85VK",
  BrightCoveKey:"6016595237001"
};
