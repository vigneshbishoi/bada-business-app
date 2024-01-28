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
    paddingHorizontal: scale(5)
  },
  mainFlatView: {
    width: '44%', height: scale(127),
    margin: scale(10),
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
  },
  mianImgView: {
    width: '100%', height: scale(100),
    borderTopLeftRadius: scale(4),
    borderTopRightRadius: scale(4)
  },
  flatTextView: {
    flex: 1,
    justifyContent: "center",
    marginLeft: scale(5)
  },
  flatText: {
    fontFamily: config.Constant.Font_Regular,
    fontSize: scale(8),
    fontWeight: "normal",
    letterSpacing: 0.22,
    color: config.Constant.COLOR_DARK_GREY,
  },
  modalMainView: {
    backgroundColor: "rgba(00, 00, 00, 0.75)",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  CloseMainView: {
    alignSelf: 'center',
    position: 'absolute',
    right: 0,
    top: scale(30)
  },
  CloseBtn: { padding: scale(8), },
  CloseSemiView: {
    padding: scale(8),
    backgroundColor: config.Constant.COLOR_BLACK,
    borderRadius: scale(50)
  },
  CloseImg: {
    width: scale(10),
    height: scale(10),
    tintColor: config.Constant.COLOR_WHITE
  },
});
module.exports = styles;