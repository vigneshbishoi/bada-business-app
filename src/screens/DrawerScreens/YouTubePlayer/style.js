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
    justifyContent: "space-between"
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
  semiSearchView: {
    height: scale(36),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: scale(5),
    backgroundColor: config.Constant.COLOR_LIGHT_BLACK_DRAWER,
    marginBottom: scale(10),
    marginTop: scale(20)
  },
  mainTextView: {
    flex: 1,
    borderTopWidth: scale(1),
    // borderLeftWidth: scale(1),
    // borderRightWidth: scale(1),
    // borderTopLeftRadius: scale(8),
    // borderTopRightRadius: scale(8),
    borderColor: "rgba(20, 26, 26, 0.15)",
    width: '100%',
  },
  overview: {
    fontFamily: config.Constant.Font_Semi_Bold,
    fontSize: config.Constant.Font_Size_10,
    fontWeight: "normal",
    letterSpacing: 0.38,
    opacity: 0.4,
    color: config.Constant.COLOR_DARK_GREY,
    marginBottom: scale(10)
  },
  shareImg: {
    width: scale(16),
    height: scale(16),
    tintColor: config.Constant.COLOR_DARK_GREY
  },
  titleText: {
    marginHorizontal: scale(15),
    fontFamily: config.Constant.Font_Semi_Bold,
    fontSize: config.Constant.Font_Size_14,
    fontWeight: "600",
    letterSpacing: 0.38,
    color: config.Constant.COLOR_DARK_GREY,
    marginTop: scale(20), 
    // marginBottom: scale(12)
  },
  clockMainView: {
    flexDirection: 'row',
    marginHorizontal: scale(15),
    alignItems: "center",
    marginBottom: scale(30)
  },
  clockImg: {
    width: scale(12),
    height: scale(12),
    marginRight: scale(5)
  },
  timeText: {
    marginTop: scale(2),
    opacity: 0.6,
    fontWeight: "normal",
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Regular,
    fontSize: config.Constant.Font_Size_12,
    color: config.Constant.COLOR_DARK_GREY,
  },
  nextVideoText:{
    fontFamily: config.Constant.Font_Semi_Bold,
    fontSize: config.Constant.Font_Size_14,
    fontWeight: "600",
    letterSpacing: 0.38,
    color: config.Constant.COLOR_DARK_GREY,
  }
});
module.exports = styles;