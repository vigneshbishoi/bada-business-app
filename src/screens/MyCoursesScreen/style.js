import { scale } from 'react-native-size-matters';
import config from '../../config/index';
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
    marginVertical: scale(20)
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
    alignItems: "center"
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
    letterSpacing: 0.03,
    fontWeight: "normal",
    fontFamily: config.Constant.Font_Regular,
  },
  EAEListsAndBtnView: {
    flexDirection: 'row',
    justifyContent: "center",
    marginBottom: scale(20),
    marginHorizontal: scale(15)
  },
  filterBtn: {
    height: scale(36),
    width: scale(36),
    backgroundColor: config.Constant.COLOR_INPUT,
    borderRadius: scale(4.8),
    justifyContent: "center",
    alignItems: "center"
  },
  line: {
    height: 1,
    backgroundColor: config.Constant.COLOR_SILVER,
    opacity: 0.15,
    borderStyle: "solid",
    // marginTop: scale(-1)
    borderBottomWidth: 1,
    borderColor: "#292830"
  },
  categoriesFlat: {
    marginLeft: scale(15),
    marginBottom: scale(10)
  },
  categoriesBtn: {
    borderBottomWidth: 2,
    borderStyle: "solid",
    opacity: 1,
    marginRight: scale(15)
  },
  categoriesText: {
    fontSize: config.Constant.Font_Size_12,
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Semi_Bold,
    paddingHorizontal: scale(5),
    paddingVertical: scale(8),
  },
  redDotView: {
    width: scale(5),
    height: scale(5),
    borderRadius: scale(5),
    position: 'absolute',
    right: scale(5), top: scale(5),
    backgroundColor: config.Constant.COLOR_RED
  }

});
module.exports = styles;