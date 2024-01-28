import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../../config';


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
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 20,
  },
  floatIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: config.Constant.SCREEN_WIDTH * 0.8,
    height: config.Constant.SCREEN_HEIGHT * 0.65,
  },
  introText: {
    fontFamily: config.Constant.Font_Regular,
    color: 'white',
    fontSize: scale(20),
    letterSpacing: 0.03,
  },
  lightText: {
    fontFamily: config.Constant.Font_Regular,
    color: 'white',
    fontSize: scale(14),
    letterSpacing: 0.03,
    opacity: 0.6
  },
  boldTxt: {
    fontFamily: config.Constant.Font_Bold,
    color: 'white',
    fontSize: scale(20),
    letterSpacing: 0.03,
    marginLeft: 10,
  },

  rowView: {
    marginTop: 10,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '90%',
  },
  btnStyle: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 30,
  },
  logoStyle: {
    width: config.Constant.SCREEN_WIDTH * 0.4,
    height: 100,
  },
  pickerBorder: {
    borderWidth: 0.5,
    borderColor: 'white',
    borderRadius: scale(4),
    justifyContent: 'center',
    alignItems: 'center',
    height: scale(30),
  },
  dropDownView: {
    paddingHorizontal: scale(10),
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center"
  },
  languageText: {
    fontFamily: config.Constant.Font_Medium,
    fontSize: config.Constant.Font_Size_12,
    fontWeight: "500",
    letterSpacing: 0.33,
    textAlign: "center",
    marginRight: scale(4),
    color: config.Constant.COLOR_WHITE
  },
  BlurSty: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }, CloseMainView: { alignSelf: 'center', },
  CloseBtn: { padding: scale(8), },
  CloseSemiView: {
    padding: scale(8),
    backgroundColor: config.Constant.COLOR_BLACK,
    borderRadius: scale(50)
  },
  CloseImg: {
    width: scale(10),
    height: scale(10),
    tintColor: config.Constant.COLOR_WHITE
  },
  ItemBtn: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  mainView: {
    backgroundColor: config.Constant.COLOR_WHITE,
    borderTopLeftRadius: scale(4),
    borderTopRightRadius: scale(4)
  },
  mainTitle: {
    fontSize: config.Constant.Font_Size_14,
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.38,
    fontWeight: "600",
    fontFamily: config.Constant.Font_Semi_Bold,
    marginTop: scale(20),
    marginBottom: scale(3),
    marginHorizontal: scale(15)
  },
  Coonstant: {
    flex: 1,
    flexDirection: "column-reverse"
  },
  line: {
    height: scale(1),
    borderStyle: "solid",
    borderWidth: 1,
    opacity: 0.1,
    color: config.Constant.COLOR_DARK_GREY,
  },
  borderView: {
    width: config.Constant.SCREEN_WIDTH,
    backgroundColor: config.Constant.COLOR_DARK_GREY,
    opacity: 0.1,
    height: 1,
    alignSelf: 'center',
  },
  itemMainView: {
    flexDirection: "row",
    marginHorizontal: scale(15),
    justifyContent: 'space-between',
    paddingVertical: scale(20)
  },
  clickItemView: {
    width: scale(20),
    height: scale(20),
    borderRadius: scale(20), justifyContent: "center",
    alignItems: "center",
    borderColor: config.Constant.COLOR_DARK_GREY, borderWidth: 1
  },
  tickimg: { width: scale(8), height: (6) },
  itemStaticText: {
    fontSize: config.Constant.Font_Size_12,
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontWeight: "500",
    fontFamily: config.Constant.Font_Medium,
  },
  modalStaticText: {
    fontSize: config.Constant.Font_Size_12,
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontWeight: "normal",
    fontFamily: config.Constant.Font_Regular,
    opacity: 0.6,
    marginBottom: scale(20),
    marginHorizontal: scale(15)
  }
});
