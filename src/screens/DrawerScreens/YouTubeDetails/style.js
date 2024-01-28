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
    marginBottom: scale(20),
    marginTop: scale(20),
    marginHorizontal: scale(15)
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
    height: config.Constant.SCREEN_HEIGHT / 1.8,
    justifyContent: "center",
    alignItems: "center",
  },
  mianImgView: {
    height: scale(160),
    marginBottom: scale(15),
    borderTopLeftRadius: scale(4),
    borderTopRightRadius: scale(4)
  },
  cateFlatVideoCout: {
    fontFamily: config.Constant.Font_Regular,
    fontSize: config.Constant.Font_Size_12,
    fontWeight: "normal",
    letterSpacing: 0.33,
    color: config.Constant.COLOR_DARK_GREY,
    opacity: 0.6
  },
  categoriesText: {
    letterSpacing: 0.5,
    fontSize: config.Constant.Font_Size_10,
    marginBottom: scale(10),
    fontFamily: config.Constant.Font_Regular,
    fontWeight: "normal",
    color: config.Constant.COLOR_DARK_GREY,
    opacity: 0.6,
    marginHorizontal: scale(15)
  },
  allcateItemView: {
    paddingVertical: scale(9),
    paddingHorizontal: scale(15),
    backgroundColor: config.Constant.COLOR_WHITE,
    // marginHorizontal: scale(8),
    marginRight: scale(8),
    borderRadius: scale(5),
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: 'rgba(20, 26, 26, 0.15)'
  },
  allcateItemText: {
    fontSize: config.Constant.Font_Size_12,
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontWeight: "normal",
    fontFamily: config.Constant.Font_Regular,
  },
});
module.exports = styles;