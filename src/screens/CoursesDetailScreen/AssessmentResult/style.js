import { scale } from 'react-native-size-matters';
import config from '../../../config/index';
export default (styles = {
  Contact: {
    flex: 1,
    backgroundColor: config.Constant.COLOR_WHITE
  },
  LinearSty: {
    height: scale(60),
    width: '100%',
  },
  mainView: {
    flex: 1,
    width: '100%',
    alignItems: "center"
  },
  semiView: {
    flexDirection: "row",
    alignItems: "center",
  },
  backImgBtn: {
    marginLeft: scale(5),
    width: scale(35),
    justifyContent: "center",
    height: scale(36),
  },
  backImg: {
    width: scale(13),
    height: scale(11), marginLeft: scale(10),
    tintColor: config.Constant.COLOR_DARK_GREY
  },
  titleText: {
    fontFamily: config.Constant.Font_Medium,
    fontSize: config.Constant.Font_Size_16,
    fontWeight: "500",
    letterSpacing: 0.43,
    color: config.Constant.COLOR_DARK_GREY
  },
  mainTextView: {
    flex: 1,
    borderTopWidth: scale(1),
    borderTopLeftRadius: scale(8),
    borderTopRightRadius: scale(8),
    borderColor: "rgba(20, 26, 26, 0.15)",
    width: '100%',
    paddingTop: scale(10),
    // paddingHorizontal: scale(15)
  },
  numberText: {
    opacity: 0.6,
    fontWeight: "normal",
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Regular,
    fontSize: config.Constant.Font_Size_12,
    color: config.Constant.COLOR_DARK_GREY,
    paddingHorizontal: scale(15),
  },
  line: {
    borderBottomWidth: scale(1),
    borderColor: "rgba(20, 26, 26, 0.15)",
  },
  resultView: {
    justifyContent: "center", alignItems: 'center',
    marginTop: scale(50)
  },
  percetageText: {
    fontFamily: config.Constant.Font_Semi_Bold,
    fontSize: config.Constant.Font_Size_20,
    fontWeight: 'normal',
    letterSpacing: 0.53,
    color: config.Constant.COLOR_DARK_GREY
  },
  yourResultTextView: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    marginBottom: scale(20)
  },
  yourResultText: {
    fontFamily: config.Constant.Font_Regular,
    fontSize: config.Constant.Font_Size_10,
    fontWeight: 'normal',
    letterSpacing: 0.27,
    marginTop: scale(15),
    color: config.Constant.COLOR_DARK_GREY
  },
  yourResultInnumber: {
    fontFamily: config.Constant.Font_Medium,
    fontSize: config.Constant.Font_Size_12,
    fontWeight: 'normal',
    letterSpacing: 0.33,
    marginTop: scale(15), marginLeft: scale(5),
    color: config.Constant.COLOR_BLUE
  },
  congratulationText: {
    fontFamily: config.Constant.Font_Medium,
    fontSize: config.Constant.Font_Size_20,
    fontWeight: 'normal',
    letterSpacing: 0.54,
    color: config.Constant.COLOR_DARK_GREY,
    marginBottom: scale(6)
  },
  passText: {
    fontFamily: config.Constant.Font_Regular,
    fontSize: config.Constant.Font_Size_12,
    fontWeight: 'normal',
    letterSpacing: 0.33,
    color: config.Constant.COLOR_DARK_GREY,
    marginBottom: scale(40)
  },
  solutionText: {
    fontFamily: config.Constant.Font_Semi_Bold,
    fontSize: config.Constant.Font_Size_14,
    fontWeight: 'normal',
    letterSpacing: 0.38,
    marginTop: scale(40),
    marginHorizontal: scale(15),
    color: config.Constant.COLOR_DARK_GREY
  },
  listquation: {
    fontFamily: config.Constant.Font_Regular,
    fontSize: config.Constant.Font_Size_12,
    fontWeight: '600',
    letterSpacing: 0.33,
    color: config.Constant.COLOR_DARK_GREY,
  },
  downArrowImg: {
    width: scale(12),
    height: scale(6),
    marginTop: scale(5)
  },
  flatView: {
    borderRadius: scale(4),
    borderWidth: 1,
    marginTop: scale(10),
    marginHorizontal: scale(15),
    padding: scale(15),
    borderColor: "rgba(20, 26, 26, 0.15)",
  },
  yourAnswerView: {
    backgroundColor: config.Constant.COLOR_LIGHT_BLACK_DRAWER,
    marginHorizontal: scale(-15),
    marginBottom: scale(-15),
    padding: scale(15),
    marginTop: scale(15),
    borderBottomLeftRadius: scale(4),
    borderBottomRightRadius: scale(4)
  },
  youAnswerText: {
    fontFamily: config.Constant.Font_Regular,
    fontSize: config.Constant.Font_Size_10,
    fontWeight: 'normal',
    letterSpacing: 0.27,
    marginTop: scale(15),
    color: config.Constant.COLOR_DARK_GREY,
    marginTop: 0, opacity: 0.6,
    marginBottom: scale(1)
  },
  realAnswerText:{
    fontFamily: config.Constant.Font_Regular,
    fontSize: config.Constant.Font_Size_12,
    fontWeight: 'normal',
    letterSpacing: 0.33,
    color: config.Constant.COLOR_DARK_GREY,
    marginBottom: 0, fontWeight: '600',
    fontFamily: config.Constant.Font_Medium,
  }
});
module.exports = styles;