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
    justifyContent: "space-between",
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
  cardBtn: {
    marginRight: scale(5),
  },
  shareBtn: {
    marginRight: scale(18),
    justifyContent: "center",
    alignItems: "center",
  },
  saveBtn: {
    marginRight: scale(20),
    justifyContent: "center",
    alignItems: "center",
  },
  cardImg: {
    width: scale(18),
    height: scale(18),
    marginRight: scale(15),
  },
  shareImg: {
    width: scale(16),
    height: scale(16),
    marginRight: scale(2),
  },
  saveImg: {
    width: scale(13),
    height: scale(18),
  },
  downloadImg: {
    width: scale(17),
    height: scale(18),
    marginRight: scale(15),
  },
  SemiMainView: {
    backgroundColor: config.Constant.COLOR_WHITE,
    borderTopRightRadius: scale(10),
    borderTopLeftRadius: scale(10),
    borderTopWidth: 1,
    borderColor: '#26141a1a',
  },
  mainImageItemView: {
    height: scale(230),
    backgroundColor: 'silver',
    borderTopLeftRadius: scale(10),
    borderTopRightRadius: scale(10),
  },
  mainImageItemViewDetails: {
    padding: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: scale(20),
    marginBottom: scale(15)
  },
  downloadviewText: {
    fontSize: config.Constant.Font_Size_12,
    color: config.Constant.COLOR_BLUE,
    letterSpacing: 0.33,
    marginHorizontal: scale(15),
    fontFamily: config.Constant.Font_Regular,
  },
  downloadDoneView: {
    width: scale(18),
    height: scale(18),
    borderRadius: scale(18),
    justifyContent: "center",
    alignItems: "center",
    marginRight: scale(20),
    marginLeft: scale(-1),
    borderColor: config.Constant.COLOR_BLUE,
    borderWidth: 1
  },
  tickimg: {
    width: scale(7),
    height: (8),
    tintColor: config.Constant.COLOR_BLUE
  },
  titleText: {
    fontSize: config.Constant.Font_Size_20,
    color: config.Constant.COLOR_DARK_GREY,
    fontWeight: "500",
    marginTop: scale(-5),
    letterSpacing: 0.54, marginHorizontal: scale(15),
    fontFamily: config.Constant.Font_Medium,
    marginBottom: scale(2)
  },
  titlebelowFalt: {
    flexWrap: 'wrap',
    flexDirection: "row",
    marginHorizontal: scale(15)
  },
  flatText: {
    fontSize: config.Constant.Font_Size_12,
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontWeight: "normal",
    fontFamily: config.Constant.Font_Regular,
  },
  flatView: {
    paddingRight: scale(10),
    // marginHorizontal: scale(8),
    marginRight: scale(10),
    borderColor: config.Constant.COLOR_SILVER
  },
  playVideoView: {
    height: scale(95),
    backgroundColor: config.Constant.COLOR_LIGHT_BLACK_DRAWER,
    marginTop: scale(15),
    padding: scale(15),
    flexDirection: 'row', alignItems: 'center',
    justifyContent: "center"
  },
  playVideoItemView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playImg: { width: scale(18), height: scale(18) },
  playvideoText: {
    fontSize: config.Constant.Font_Size_12,
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Medium,
    fontWeight: "500",
    textAlign: 'center'
  },
  playVideoStaticText: {
    fontSize: config.Constant.Font_Size_12,
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Regular,
    opacity: 0.6,
    textAlign: 'center',
    marginTop: scale(8)
  },
  flatStyle: {
    marginTop: scale(20),
    marginBottom: scale(30),
    paddingLeft: scale(15),
    borderBottomWidth: 1,
    borderColor: config.Constant.COLOR_SILVER
  },
  flacCateView: {
    marginRight: scale(8),
    marginVertical: scale(4),
    paddingVertical: scale(8),
    paddingHorizontal: scale(15)
    , borderColor: config.Constant.COLOR_SILVER,
  },
  flatCateText: {
    fontSize: config.Constant.Font_Size_12,
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.03,
    fontWeight: "600",
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Semi_Bold
  },
  flatCateBottomLine: {
    height: scale(2),
    marginRight: scale(8)
  },
  overviewText: {
    fontSize: config.Constant.Font_Size_14,
    color: config.Constant.COLOR_DARK_GREY,
    fontWeight: "600",
    letterSpacing: 0.38,
    marginHorizontal: scale(15),
    fontFamily: config.Constant.Font_Semi_Bold,
    marginBottom: scale(6)
  },
  overviewInsideText: {
    fontSize: config.Constant.Font_Size_12,
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontWeight: "normal",
    marginHorizontal: scale(15),
    fontFamily: config.Constant.Font_Regular,
  },
  relatedCoursesText: {
    fontSize: config.Constant.Font_Size_14,
    color: config.Constant.COLOR_DARK_GREY,
    fontWeight: "600",
    letterSpacing: 0.38,
    fontFamily: config.Constant.Font_Semi_Bold,
    marginBottom: scale(6)
  },
  relatedCoureseView: {
    backgroundColor: config.Constant.COLOR_LIGHT_BLACK_DRAWER,
    paddingTop: scale(20),
    paddingLeft: scale(15),
    marginBottom: scale(30),
    height: scale(183)
  },
  benefitView: { marginHorizontal: scale(15) },
  benefitSemiView: {
    marginRight: scale(15),
    borderColor: config.Constant.COLOR_SILVER,
    flexDirection: 'row',
    marginBottom: scale(20)
  },
  benefitDotView: {
    width: scale(8),
    height: scale(8),
    marginTop: scale(5),
    marginRight: scale(8),
    borderRadius: scale(8),
    backgroundColor: "silver",
    flexDirection: 'row'
  },
  ratingNub: {
    fontSize: config.Constant.Font_Size_20,
    color: config.Constant.COLOR_DARK_GREY,
    fontWeight: "500",
    letterSpacing: 0.03, marginHorizontal: scale(8),
    fontFamily: config.Constant.Font_Medium,
  },
  ratingNubView: {
    marginTop: scale(13),
    flexDirection: "row",
    alignItems: "center",
    marginBottom: scale(15)
  },
  ratinginsideViewstar: {
    width: scale(11),
    height: scale(10),
    tintColor: config.Constant.COLOR_BLACK,
    marginTop: scale(-5)
  },
  ratingFlatView: {
    borderRadius: scale(4),
    borderWidth: 1,
    borderColor: config.Constant.COLOR_SILVER,
    marginBottom: scale(10),
    padding: scale(10)
  },
  ratingFlatSemiView: {
    flexDirection: 'row',
    marginBottom: scale(10),
    alignItems: "center",
    justifyContent: "space-between"
  },
  ratingSplitView: { flexDirection: "row", alignItems: "center" },
  ratingName: {
    fontSize: config.Constant.Font_Size_12,
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Medium,
    fontWeight: "500", marginHorizontal: scale(5)
  },
  ratingDot: {
    width: scale(4),
    height: scale(4),
    borderRadius: scale(4),
    backgroundColor: "silver",
    flexDirection: 'row',
    marginBottom: scale(2)
  },
  ratingDate: {
    fontSize: config.Constant.Font_Size_10,
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.5,
    fontWeight: "normal",
    fontFamily: config.Constant.Font_Regular,
    marginHorizontal: scale(5),
    opacity: 0.6
  },
  ratingInsideNum: {
    fontSize: config.Constant.Font_Size_12,
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Medium,
    fontWeight: 'normal', marginHorizontal: scale(3)
  },
  ratingViewAllBtn: {
    alignSelf: "center",
    marginVertical: scale(20),
    borderRadius: scale(4),
    borderWidth: 0.5,
    paddingVertical: scale(6),
    paddingHorizontal: scale(15),
    borderColor: config.Constant.COLOR_DARK_GREY,
    borderStyle: "solid",
    borderColor: "#292830"
  },
  ExtraLearingView: {
    marginTop: scale(10),
    marginBottom: scale(30)
  },
  LearingListView: {
    marginHorizontal: scale(15),
    flexDirection: "row",
    paddingVertical: scale(15),
    borderStyle: "solid",
    borderBottomWidth: 0.5,
    borderColor: "#979797",
    alignItems: "center",
    justifyContent: "center"
  },
  learnItemText: {
    fontFamily: config.Constant.Font_Medium,
    fontSize: config.Constant.Font_Size_12,
    fontWeight: "500",
    letterSpacing: 0.33,
    color: config.Constant.COLOR_DARK_GREY,
    flex: 1
  },
  learnItemRightArrow: {
    width: scale(6), height: scale(12),
    tintColor: config.Constant.COLOR_DARK_GREY
  },
  learnItemPlusImg: {
    width: scale(10), height: scale(10),
    tintColor: config.Constant.COLOR_DARK_GREY
  },
  syllabusHeaderView: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center"
  },
  syllabusMainImageView: {
    backgroundColor: config.Constant.COLOR_INPUT,
    height: scale(160), width: '100%',
    marginVertical: scale(15),
    borderRadius: scale(4)
  },
  syllabusHideText: {
    opacity: 0.6,
    fontWeight: "normal",
    fontFamily: config.Constant.Font_Regular,
    fontSize: config.Constant.Font_Size_12,
    letterSpacing: 0.33,
    color: config.Constant.COLOR_DARK_GREY,
  },
  syllabusMainImage: {
    flex: 1, borderRadius: scale(4),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  MainImage: {
    flex: 1, borderTopLeftRadius: scale(4),
    justifyContent: 'flex-end',
    overflow: 'hidden',
    borderTopRightRadius: scale(4),
  },
  watchText: {
    fontSize: config.Constant.Font_Size_12,
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Regular,
    marginLeft: scale(5),
    color: config.Constant.COLOR_WHITE,
    fontWeight: '500', marginTop: scale(2)
  },
  watchView: {
    margin: scale(15),
    flexDirection: "row",
    height: scale(30),
    alignItems: "center",
    width: '39%',
    paddingHorizontal: scale(8),
    borderRadius: scale(4), borderWidth: 1,
    borderColor: "rgba(41, 40, 48, 0.5)",
    backgroundColor: "rgba(41, 40, 48, 0.75)",
    borderStyle: "solid",
  },
  cartCountView: {
    position: "absolute",
    left: scale(10),
    backgroundColor: config.Constant.COLOR_RED,
    top: scale(-8),
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
  },
  ratingView: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center'
  }

});
module.exports = styles;