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
  titleText: {
    fontFamily: config.Constant.Font_Semi_Bold,
    fontSize: config.Constant.Font_Size_14,
    fontWeight: 'normal',
    letterSpacing: 0.38,
    color: config.Constant.COLOR_DARK_GREY
  },
  mainTextView: {
    flex: 1,
    // borderTopWidth: scale(1),
    borderTopLeftRadius: scale(4),
    borderTopRightRadius: scale(4),
    borderColor: "rgba(20, 26, 26, 0.15)",
    width: '100%',
    paddingHorizontal: scale(15)
  },
  shareBtn: {
    marginRight: scale(18),
    justifyContent: "center",
    alignItems: "center",
  },
  shareImg: {
    width: scale(16),
    height: scale(16),
    marginRight: scale(2),
  },
  mainItemView: {
    backgroundColor: "silver",
    //height: scale(200),
    marginHorizontal: scale(-15),
    marginBottom: scale(20)
  },
  timeView: {
    marginTop: scale(15),
    justifyContent: "space-between",
    alignItems: "center"
    , flexDirection: 'row',
    marginBottom: scale(30)
  },
  timesemiView: {
    flexDirection: 'row',
    alignItems: "center"
  },
  timeImg: {
    width: scale(12),
    height: scale(12),
    marginRight: scale(5),
    marginTop: scale(-2)
  },
  duration: {
    fontFamily: config.Constant.Font_Regular,
    fontSize: config.Constant.Font_Size_12,
    fontWeight: 'normal',
    letterSpacing: 0.33,
    opacity: 0.6,
    color: config.Constant.COLOR_DARK_GREY
  },
  downloadBtn: { paddingRight: scale(5), },
  downloadImg: {
    width: scale(17),
    height: scale(18),
  },
  nextVideoView: {
    paddingTop: scale(20),
    marginHorizontal: scale(-15),
    paddingHorizontal: scale(15),
    backgroundColor: config.Constant.COLOR_LIGHT_BLACK_DRAWER,
    paddingBottom: scale(30)
  },
  nextviewSemiMainView: {
    height: scale(253),
    borderRadius: scale(4),
    backgroundColor: config.Constant.COLOR_WHITE,
    marginTop: scale(10),
    borderColor: config.Constant.COLOR_BORDER_HOME_LIST,
    borderStyle: 'solid',
    borderWidth: scale(1),
    shadowColor: config.Constant.COLOR_SHADOW_HOME_LIST,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    marginBottom: scale(25)
  },
  nextMainImgView: {
    backgroundColor: "silver",
    height: scale(160),
    borderTopLeftRadius: scale(4),
    borderTopRightRadius: scale(4)
  },
  nexViewTitle: {
    fontSize: config.Constant.Font_Size_12,
    fontWeight: '600',
    letterSpacing: 0.33,
    color: config.Constant.COLOR_DARK_GREY,
    fontFamily: config.Constant.Font_Medium,
    opacity: 1, marginHorizontal: scale(15),
    marginTop: scale(15),
    marginBottom: scale(4)
  },
  nextVideoTimeView: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginHorizontal: scale(15)
  },
  LearingListView: {
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
  writeReviewBtn: {
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 0.5, 
    paddingVertical: scale(20),
    marginHorizontal: scale(-15),
    borderColor: "#979797",
    height: scale(60)
  }
});
module.exports = styles;