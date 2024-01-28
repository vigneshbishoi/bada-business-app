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
    color: config.Constant.COLOR_DARK_GREY,
    flex: 1
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
    borderLeftWidth: scale(1),
    borderRightWidth: scale(1),
    borderTopLeftRadius: scale(8),
    borderTopRightRadius: scale(8),
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
  staticText: {
    fontWeight: "normal",
    fontFamily: config.Constant.Font_Regular,
    fontSize: config.Constant.Font_Size_12,
    letterSpacing: 0.43,
    color: config.Constant.COLOR_DARK_GREY
  },
  textInputSty: {
    flex: 1, fontSize: config.Constant.Font_Size_12,
    fontFamily: config.Constant.Font_Regular,
    margin: 0, padding: 0,
    fontWeight: "normal",
    letterSpacing: 0.33,
    color: config.Constant.COLOR_DARK_GREY
  },
  recodeBtn: {
    marginRight: scale(5),
    width: scale(35),
    justifyContent: "center",
    height: scale(36),
    alignItems: "flex-end"
  },
  recodeImg: {
    width: scale(10.2),
    height: scale(15.1),
    marginRight: scale(10),
    tintColor: config.Constant.COLOR_DRAWER_LIGHT
  },
  closeImg: {
    width: scale(10),
    height: scale(10),
    marginRight: scale(10),
    tintColor: config.Constant.COLOR_DRAWER_LIGHT
  },
  searchImg: {
    width: scale(14),
    height: scale(14),
    marginLeft: scale(10),
    tintColor: config.Constant.COLOR_DRAWER_DARK
  },
  searchArrFlat: {
    marginBottom: scale(15),
    flexGrow: 0, width: '80%'
  },
  emptyListText: {
    fontFamily: config.Constant.Font_Regular,
    fontSize: config.Constant.Font_Size_12,
    fontWeight: 'normal',
    letterSpacing: 0.43,
    color: config.Constant.COLOR_DARK_GREY,
    textAlign: "center",
  },
  emptyListView: {
    height: config.Constant.SCREEN_HEIGHT / 1.4,
    justifyContent: "center",
    alignItems: "center",
  },
  dotSty: {
    width: scale(6),
    height: scale(6),
    borderRadius: scale(10),
    marginHorizontal: scale(-5),
    padding: 0,
    margin: 0,
    backgroundColor: "rgba(128, 128, 128, 0.92)",
    backgroundColor: 'blue'
  },
  dotBoxSty: {
    bottom: scale(-22),
    padding: 0,
  },
  boxSliderSty: {
    borderRadius: scale(5),
    width: '90%',
    marginLeft: (-35)
  },
  mainFlatView: {
    width: '47.3%', height: scale(110),
    margin: scale(5),
    borderRadius: scale(4),
    borderColor: config.Constant.COLOR_BORDER_HOME_LIST,
    borderWidth: scale(1),
    backgroundColor: config.Constant.COLOR_WHITE,
    borderStyle: 'solid',
    shadowColor: config.Constant.COLOR_SHADOW_HOME_LIST,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    borderColor: "#dfdfe0",
    paddingVertical: scale(15),
    paddingHorizontal: scale(10)
  },
  mianImgView: {
    height: scale(30), width: scale(24),
    marginBottom: scale(10)
  },
  cateFlatname: {
    fontFamily: config.Constant.Font_Medium,
    fontSize: config.Constant.Font_Size_12,
    fontWeight: "500",
    letterSpacing: 0.33,
    color: config.Constant.COLOR_DARK_GREY
  },
  cateFlatVideoCout: {
    fontFamily: config.Constant.Font_Regular,
    fontSize: config.Constant.Font_Size_12,
    fontWeight: "normal",
    letterSpacing: 0.33,
    color: config.Constant.COLOR_DARK_GREY,
    opacity: 0.6
  },
});
module.exports = styles;