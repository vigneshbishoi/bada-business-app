import { scale } from 'react-native-size-matters';
import config from '../../../../config/index';
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
  semiSearchView: {
    height: scale(36),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: scale(5),
    backgroundColor: config.Constant.COLOR_LIGHT_BLACK_DRAWER,
    marginBottom: scale(15)
  },
  mainTextView: {
    flex: 1,
    borderTopWidth: scale(1),
    borderTopLeftRadius: scale(8),
    borderTopRightRadius: scale(8),
    borderColor: "rgba(20, 26, 26, 0.15)",
    width: '100%',
    paddingHorizontal: scale(15)
  },
  titleText: {
    fontWeight: "500",
    fontFamily: config.Constant.Font_Medium,
    fontSize: config.Constant.Font_Size_20,
    letterSpacing: 0.54,
    color: config.Constant.COLOR_DARK_GREY,
    marginBottom: scale(6)
  },
  mainImg: {
    height: scale(175), borderTopLeftRadius: scale(8),
    marginHorizontal: scale(-15),
    marginBottom: scale(20),
    borderTopRightRadius: scale(8)
  },
  saleText: {
    fontWeight: 'normal',
    fontFamily: config.Constant.Font_Regular,
    fontSize: config.Constant.Font_Size_12,
    letterSpacing: 0.33,
    color: config.Constant.COLOR_DARK_GREY,
    opacity: 0.6, marginBottom: scale(8)
  },
  filterBtnView: {
    height: scale(36),
    marginLeft: scale(8)
    , width: scale(36),
    borderRadius: scale(4)
  },
  filterBtn: {
    flex: 1,
    borderRadius: scale(4),
    backgroundColor: config.Constant.COLOR_INPUT,
    justifyContent: "center",
    alignItems: 'center'
  },
  filterImg: { width: scale(18), height: scale(18), },
  clockImg: {
    width: scale(12),
    height: scale(12),
    marginTop: scale(-2)
  },
  ViewText: {
    fontSize: scale(12),
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Regular,
    marginLeft: scale(4),
    fontWeight: "normal",
    opacity: 0.6,
    marginTop: scale(2)
  },
  eyeImg: {
    width: scale(13),
    height: scale(9),
    tintColor: "rgba(20, 26, 26, 0.6)",
  },
  timeText: {
    fontSize: scale(12),
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Regular,
    marginLeft: scale(4),
    fontWeight: "normal",
    opacity: 0.6,
    borderRightWidth: 2,
    marginRight: scale(10),
    paddingRight: scale(10), borderStyle: "solid",
    borderColor: "rgba(20, 26, 26, 0.15)"
  },
  ShareAndtimeMainView: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom: scale(30)
  },
  timeSemiView: {
    flexDirection: "row",
    alignItems: 'center'
  },
  introductionText: {
    fontSize: config.Constant.Font_Size_14,
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.38,
    fontFamily: config.Constant.Font_Semi_Bold,
    fontWeight: "600",
    marginBottom: scale(10)
  }
});
module.exports = styles;