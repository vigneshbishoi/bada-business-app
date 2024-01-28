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
    borderTopLeftRadius: scale(8),
    borderTopRightRadius: scale(8),
    borderColor: "rgba(20, 26, 26, 0.15)",
    width: '100%',
    paddingTop: scale(10),
    paddingHorizontal: scale(15)
  },
  numberText: {
    opacity: 0.6,
    fontWeight: "normal",
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Regular,
    fontSize: config.Constant.Font_Size_12,
    color: config.Constant.COLOR_DARK_GREY,
    paddingHorizontal: scale(15),
  },
  line: {
    borderBottomWidth: scale(1),
    borderColor: "rgba(20, 26, 26, 0.15)",
    marginHorizontal: scale(-15),
    marginBottom: scale(20)
  },
  numberMainView: {
    paddingVertical: scale(10),
    borderBottomWidth: scale(2),
    borderColor: config.Constant.COLOR_BLUE,
    marginHorizontal: scale(5),
  },
  timeView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    marginBottom: scale(10)
  },
  timeQuestionText: {
    fontFamily: config.Constant.Font_Semi_Bold,
    fontSize: config.Constant.Font_Size_14,
    fontWeight: "600",
    letterSpacing: 0.38,
    color: config.Constant.COLOR_DARK_GREY
  },
  timeImg: {
    width: scale(14), height: scale(16),
    marginLeft: scale(4),
    marginTop: scale(-3)
  },
  optionText: {
    fontWeight: "500",
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Medium,
    fontSize: config.Constant.Font_Size_12,
    color: config.Constant.COLOR_DARK_GREY
  },
  opationPress: {
    flexDirection: 'row',
    paddingVertical: scale(20),
    paddingHorizontal: scale(15),
    borderRadius: 4,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#dfdfe0',
    justifyContent: "space-between",
    alignItems: "center"
  },
  optionRightTickView: {
    borderRadius: scale(10),
    width: scale(20),
    opacity: 0.3,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: config.Constant.COLOR_DARK_GREY,
    height: scale(20),
    backgroundColor: config.Constant.COLOR_WHITE,
    justifyContent: 'center', alignItems: "center"
  },
  optionRightTickimg: {
    width: scale(8),
    height: scale(6)
  },
  optionTextView: {
    flexDirection: 'row',
    width: '82%',
  },
  nextBtnView: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: scale(15),
    marginHorizontal: scale(15),
    borderRadius: scale(4),
    backgroundColor: 'rgba(41,40,48, 0.25)'
  },
  donnotKnowBtn: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: scale(25),
    marginHorizontal: scale(15),
    flexDirection: 'row'
  },
  skipImg: {
    width: scale(11), height: scale(9),
    marginTop: scale(-2),
  }
});
module.exports = styles;