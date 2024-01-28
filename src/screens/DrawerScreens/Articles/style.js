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
    borderLeftWidth: scale(1),
    borderRightWidth: scale(1),
    borderTopLeftRadius: scale(8),
    borderTopRightRadius: scale(8),
    borderColor: "rgba(20, 26, 26, 0.15)",
    width: '100%',
    paddingTop: scale(20),
    paddingHorizontal: scale(15)
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
  keywordItem: {
    paddingVertical: scale(9),
    backgroundColor: config.Constant.COLOR_WHITE,
    marginRight: scale(10),
    borderRadius: scale(5),
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: 'rgba(20, 26, 26, 0.15)',
    paddingHorizontal: scale(15)
  },
  keywordItemText: {
    fontSize: config.Constant.Font_Size_12,
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontWeight: "normal",
    fontFamily: config.Constant.Font_Regular,
  },
  searchArrFlat: {
    marginBottom: scale(15),
    flexGrow: 0, width: '80%'
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
  filterImg: { width: scale(17), height: scale(12) },
  FlatView: {
    height: scale(100),
    borderRadius: scale(4),
    backgroundColor: config.Constant.COLOR_WHITE,
    marginTop: scale(10),
    flexDirection: 'row',
    borderColor: config.Constant.COLOR_BORDER_HOME_LIST,
    borderWidth: scale(1),
  },
  FlatsemiView: {
    width: scale(100),
    backgroundColor: "silver",
    borderTopLeftRadius: scale(4),
    borderBottomLeftRadius: scale(4),
    justifyContent: "center"
  },
  mainIMg: {
    flex: 1,
    borderTopLeftRadius: scale(5),
    borderBottomLeftRadius: scale(5)
  },
  watchView: {
    position: "absolute",
    flexDirection: "row",
    borderColor: "rgba(41, 40, 48, 0.5)",
    bottom: 0,
    width: scale(50), height: scale(30),
    justifyContent: 'center',
    borderTopRightRadius: scale(4),
    backgroundColor: "rgba(41, 40, 48, 0.5)",
    borderStyle: "solid",
    // borderWidth: 1,
    borderBottomLeftRadius: scale(4),
    alignItems: "center"
  },
  eyeImg: {
    width: scale(15),
    height: scale(10),
  },
  viewText: {
    fontSize: scale(10),
    color: config.Constant.COLOR_WHITE,
    letterSpacing: 0.03,
    fontFamily: config.Constant.Font_Medium,
    marginLeft: scale(4),
    marginTop: scale(4)
  }, TextView: {
    paddingHorizontal: scale(10),
    flex: 1,
    borderTopRightRadius: scale(5),
    borderBottomRightRadius: scale(5),
    justifyContent: "space-between"
  },
  itemTitle: {
    fontSize: scale(12),
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.03,
    fontFamily: config.Constant.Font_Medium,
    fontWeight: "500",
    marginTop: scale(8),
  },
  DescriptionView: {
    flexDirection: "row",
    alignItems: 'flex-start',
    backgroundColor: "white",
    marginTop: scale(7)
  },
  timeText: {
    fontSize: scale(12),
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Regular,
    marginLeft: scale(4),
    fontWeight: "normal",
    opacity: 0.6
  },
  clockImg: {
    width: scale(12),
    height: scale(12),
    marginTop: scale(2)
  },
  emptyListText: {
    fontFamily: config.Constant.Font_Regular,
    fontSize: config.Constant.Font_Size_13,
    fontWeight: 'normal',
    letterSpacing: 0.43,
    color: config.Constant.COLOR_DARK_GREY,
    textAlign: "center",
  }, 
  emptyListView: { 
    flexGrow: 1, 
    justifyContent: "center", 
    alignItems: "center" }
});
module.exports = styles;