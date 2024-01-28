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
    paddingHorizontal: scale(15),
    // paddingTop: scale(20)
  },
  staticText: {
    opacity: 0.8,
    fontFamily: config.Constant.Font_Regular,
    fontSize: config.Constant.Font_Size_12,
    fontWeight: "normal",
    letterSpacing: 0.33,
    color: config.Constant.COLOR_DARK_GREY
  },
  linkText: {
    borderBottomWidth: 1,
    width: '50%',
    fontFamily: config.Constant.Font_Regular,
    fontSize: config.Constant.Font_Size_12,
    fontWeight: "normal",
    letterSpacing: 0.33,
    color: config.Constant.COLOR_BLUE,
    borderColor: config.Constant.COLOR_BLUE,
  },
  iagreeBtn: {
    height: scale(50),
    borderRadius: scale(4),
    backgroundColor: config.Constant.COLOR_RED,
    justifyContent: "center",
    alignItems: 'center'
  }
});
module.exports = styles;