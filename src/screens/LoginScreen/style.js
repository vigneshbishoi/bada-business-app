import { StyleSheet } from 'react-native';
import config from '../../config';
import { scale } from 'react-native-size-matters';


export default StyleSheet.create({
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flexDirection: 'row',
    opacity: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subSingleCardTop: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 5,
    paddingBottom: 20,
    height: config.Constant.SCREEN_HEIGHT * 0.3,
    paddingLeft: config.Constant.SCREEN_WIDTH * 0.05,
  },
  floatIcon: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    width: config.Constant.SCREEN_WIDTH * 0.5,
    height: config.Constant.SCREEN_HEIGHT * 0.25,
    //backgroundColor:'red'
  },
  introText: {
    fontFamily: config.Constant.Font_Regular,
    color: 'white',
    fontSize: scale(16),
    letterSpacing: 0.33,
  },
  lightText: {
    fontFamily: config.Constant.Font_Regular,
    color: config.Constant.COLOR_LIGHT_GREY,
    fontSize: scale(16),
    letterSpacing: 0.33,
    //marginLeft: 10,
  },
  boldTxt: {
    fontFamily: config.Constant.Font_Bold,
    color: 'white',
    fontSize: scale(16),
    letterSpacing: 0.33,
    //marginLeft: 10,
  },
  rowView: {
    //marginTop: 10,
    //marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '55%',
  },
  btnStyle: {
    width: '90%',
    alignSelf: 'center',
    // marginBottom: 30,
  },
  popupBtnStyle: {
    width: '90%',
    alignSelf: 'center',
    // marginBottom: 30,
    marginTop: 45,
  },
  popupOTPStyle: {
    fontFamily: config.Constant.Font_Regular,
    color: config.Constant.COLOR_DARK_GREY,
    fontSize: scale(12),
    letterSpacing: 0.33,
    opacity: 0.6,
    marginTop: 85,
    width: '90%',
    alignSelf: 'center',
    textAlign: 'left',
  },
  popupOTPCountStyle: {
    fontFamily: config.Constant.Font_Medium,
    color: config.Constant.COLOR_BLUE,
    fontSize: scale(12),
    letterSpacing: 0.33,
    opacity: 1,
  },
  backIcon: {
    width: scale(15),
    height: scale(15),
    marginTop: 40,
  },
  bodyHeader: {
    fontFamily: config.Constant.Font_Regular,
    color: config.Constant.COLOR_DARK_GREY,
    fontSize: scale(12),
    width: '90%',
    alignSelf: 'center',
    letterSpacing: 0.33,
    opacity: 0.8,
    marginVertical: scale(15),
  },
  bodyDesc: {
    fontFamily: config.Constant.Font_Regular,
    color: config.Constant.COLOR_DARK_GREY,
    fontSize: scale(12),
    width: '90%',
    alignSelf: 'center',
    letterSpacing: 0.33,
    opacity: 0.6,
    marginVertical: scale(15),
  },
  popupHeaderText: {
    fontFamily: config.Constant.Font_Semi_Bold,
    color: config.Constant.COLOR_DARK_GREY,
    fontSize: scale(14),
    width: '90%',
    alignSelf: 'center',
    textAlign: 'left',
    letterSpacing: 0.33,
    marginVertical: scale(15),
  },
  popupHeaderDesc: {
    fontFamily: config.Constant.Font_Regular,
    color: config.Constant.COLOR_DARK_GREY,
    opacity: 0.6,
    fontSize: scale(12),
    width: '90%',
    alignSelf: 'center',
    textAlign: 'left',
    letterSpacing: 0.33,
    marginVertical: scale(15),
  },
  popupNum: {
    fontFamily: config.Constant.Font_Medium,
    color: config.Constant.COLOR_BLUE,
    fontSize: scale(12),
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    alignSelf: 'center',
    letterSpacing: 0.33,
    marginBottom: scale(15),
  },
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  textView1: {
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  textView2: {
    width: '90%',
    borderTopWidth: 0,
    alignSelf: 'center',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  dialogStyle: {
    backgroundColor: config.Constant.COLOR_TRANSPARENT,
    borderRadius: 0,
    maxHeight: config.Constant.SCREEN_HEIGHT * 0.8,
    paddingVertical: 0,
  },
  dialogContent: {
    backgroundColor: 'rgba(0,0,0,0)',
    //paddingTop: 50,
    paddingBottom: -80,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderView: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#D3D3D3',
  },
  BlurSty: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  codeInputStyle: {
    borderWidth: 1,
    borderRadius: 4,
    width: config.Constant.SCREEN_WIDTH * 0.15,
    fontSize: scale(15),
    fontFamily: config.Constant.Font_Semi_Bold,
    fontWeight
      : '600',
    color: 'black',
    marginRight: config.Constant.SCREEN_WIDTH * 0.073,
    height: config.Constant.SCREEN_WIDTH * 0.16,
    borderColor: config.Constant.COLOR_LIGHT_GREY,
    backgroundColor: config.Constant.COLOR_WHITE,
  },
  cancelBtnView: {
    padding: 10,
    zIndex: 1,
    backgroundColor: '#292830',
    borderRadius: 30,
    marginBottom: 10,
  },
  popupTitle: {
    width: config.Constant.SCREEN_WIDTH,
    backgroundColor: 'white',
    alignSelf: 'center',
    paddingBottom: 0,
  },
  termsAndConMainView: {
    marginTop: scale(20),
    marginBottom: scale(25),
    justifyContent: 'center',
    flexDirection: "row"
  },
  IagreeText: {
    opacity: 0.8,
    fontFamily: config.Constant.Font_Regular,
    fontSize: config.Constant.Font_Size_10,
    fontWeight: "normal",
    letterSpacing: 0.27,
    color: config.Constant.COLOR_DARK_GREY
  },
  termsAndConText: {
    marginLeft: scale(6),
    fontFamily: config.Constant.Font_Semi_Bold,
    fontSize: config.Constant.Font_Size_10,
    fontWeight: "600",
    letterSpacing: 0.27,
    color: config.Constant.COLOR_DARK_GREY
  },
  bottomLineOfTermsAndcon: {
    borderTopWidth: scale(0.5),
    marginLeft: scale(6),
    marginTop: scale(-3.5),
    color: config.Constant.COLOR_DARK_GREY
  }
});
