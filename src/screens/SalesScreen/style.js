import Constant from '../../config/Constant'
import { scale } from 'react-native-size-matters';
import config from '../../config/index';
export default (styles = {
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: Constant.COLOR_WHITE,
  },
  LinearSty: {
    height: scale(62),
    width: '100%',
    justifyContent: 'center',
    paddingBottom: scale(5)
  },
  mainView: {
    flex: 1,
    width: '100%',
    alignItems: "center"
  },
  semiView: {
    flexDirection: "row",
    justifyContent: "center",
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
    tintColor: config.Constant.COLOR_WHITE
  },
  textInputSty: {
    flex: 1,
    fontSize: config.Constant.Font_Size_16,
    letterSpacing: 0.43,
    fontFamily: config.Constant.Font_Medium,
    fontWeight: "500",
    margin: 0, padding: 0,
    color: config.Constant.COLOR_WHITE,
    marginTop: scale(2)
  },
  recodeBtn: {
    marginRight: scale(5),
    width: scale(35),
    justifyContent: "center",
    height: scale(36),
    alignItems: "flex-end"
  },
  recodeImg: {
    width: scale(18),
    height: scale(18),
    marginRight: scale(15),
    tintColor: config.Constant.COLOR_WHITE
  },
  SemiMainView: {
    backgroundColor: config.Constant.COLOR_WHITE,
    marginTop: scale(-3),
    borderTopLeftRadius: scale(5),
    borderTopRightRadius: scale(5),
    paddingHorizontal: scale(15),
    paddingTop: scale(20)
  },
  subcateView: { justifyContent: "space-between", flexDirection: 'row' },
  subcateText: {
    fontSize: config.Constant.Font_Size_12,
    letterSpacing: 0.6,
    fontWeight: "normal",
    opacity: 0.6,
    fontFamily: config.Constant.Font_Regular,
    color: config.Constant.COLOR_DARK_GREY,
  },
  subcateDownArrow: {
    width: scale(9),
    height: scale(5),
    tintColor: config.Constant.COLOR_BLUE,
    opacity: 1, marginLeft: scale(5),
    marginBottom: scale(3),
    marginRight: scale(5)
  },
  keywordItem: {
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
  keywordItemText: {
    fontSize: config.Constant.Font_Size_12,
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.03,
    fontWeight: "normal",
    fontFamily: config.Constant.Font_Regular,
  },
  featureText: {
    fontSize: config.Constant.Font_Size_14,
    fontStyle: "normal",
    letterSpacing: 0.38,
    fontWeight: "600",
    fontFamily: config.Constant.Font_Semi_Bold,
    color: config.Constant.COLOR_DARK_GREY,
  },
  viewAllBtn: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  CouesesFlatView:
  {
    marginTop: scale(2),
    marginBottom: scale(22),
  },
  recommendedCardShadowStyle: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
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
  cartCountView: {
      position: "absolute",
      right: scale(8),
      backgroundColor: config.Constant.COLOR_RED,
      top: scale(2),
      width: scale(14),
      height: scale(14),
      justifyContent: "center",
      alignItems: 'center',
      borderRadius: scale(14)
  },
  countText: {
      fontSize: scale(8),
      color: config.Constant.COLOR_WHITE,
      letterSpacing: 0.33,
      fontFamily: config.Constant.Font_Semi_Bold,
      fontWeight: 'normal',
      marginTop: scale(1)
  }
});
module.exports = styles;