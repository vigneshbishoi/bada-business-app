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
    borderLeftWidth: scale(1),
    borderRightWidth: scale(1),
    borderTopLeftRadius: scale(8),
    borderTopRightRadius: scale(8),
    borderColor: "rgba(20, 26, 26, 0.15)",
    width: '100%',
  },
  flatMainBtn: {
    height: scale(105),
    borderRadius: scale(4),
    borderStyle: "solid",
    borderWidth: scale(1),
    borderColor: "#dfdfe0",
    padding: scale(12)
  },
  FlatSemiView: {
    flexDirection: 'row',
    flex: 1
  },
  FlatMainImg: {
    width: scale(83),
    height: scale(83),
    borderRadius: scale(4),
    backgroundColor: "silver",
    marginRight: scale(10)
  },
  flatTitleText: {
    fontFamily: config.Constant.Font_Medium,
    fontSize: config.Constant.Font_Size_12,
    fontWeight: "500",
    letterSpacing: 0.33,
    color: config.Constant.COLOR_DARK_GREY,
    marginTop: scale(10),
  },
  FlatDetailsText: {
    fontFamily: config.Constant.Font_Regular,
    fontSize: config.Constant.Font_Size_12,
    fontWeight: "normal",
    letterSpacing: 0.33,
    color: config.Constant.COLOR_DARK_GREY,
    opacity: 0.6
  },
  downArrowimg: {
    width: scale(12),
    height: scale(7),
    opacity: 0.8
  },
  borderView: {
    width: '100%',
    marginVertical: scale(10),
    backgroundColor: config.Constant.COLOR_DARK_GREY,
    opacity: 0.1,
    height: 1,
    alignSelf: 'center',
},
  viewCoursesBtn: {
    marginTop: scale(10),
    marginBottom: scale(-12), paddingVertical: scale(10),
    marginHorizontal: scale(-12),
    borderBottomLeftRadius: scale(4),
    borderBottomRightRadius: scale(4),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: config.Constant.COLOR_LIGHT_BLACK_DRAWER
  },
  authorListFlat: {
    paddingTop: scale(20),
    marginHorizontal: scale(15)
  },
  emptyListView: {
    justifyContent: 'center',
    alignItems: "center",
    flex: 1
  }

});
module.exports = styles;