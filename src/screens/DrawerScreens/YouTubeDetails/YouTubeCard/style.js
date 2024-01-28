import { scale } from 'react-native-size-matters';
import config from '../../../../config/index';
export default (styles = {
  mainFlatView: {
    height: scale(253),
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
    marginHorizontal: scale(15),
  },
  mianImgView: {
    height: scale(160),
    marginBottom: scale(15),
    borderTopLeftRadius: scale(4),
    borderTopRightRadius: scale(4)
  },
  mainFlatItemTextView: {
    marginHorizontal: scale(15), flex: 1
  },
  cateFlatname: {
    fontFamily: config.Constant.Font_Medium,
    fontSize: config.Constant.Font_Size_12,
    fontWeight: "500",
    letterSpacing: 0.33,
    color: config.Constant.COLOR_DARK_GREY,
    flex: 1
  },
  clockMainView: {
    flexDirection: "row",
    justifyContent: "space-between",
    // flex: 1,
    marginBottom: scale(15),
    alignItems: 'center',
    justifyContent: "space-between"
  },
  clockImg: {
    width: scale(12),
    height: scale(12),
    marginTop: scale(-2)
  },
  timeText: {
    fontFamily: config.Constant.Font_Regular,
    fontSize: config.Constant.Font_Size_12,
    fontWeight: 'normal',
    opacity: 0.6,
    letterSpacing: 0.33,
    marginTop: scale(1),
    marginLeft: scale(4),
    color: config.Constant.COLOR_DARK_GREY,
  },
  shareImg: { width: scale(16), height: scale(16), },
});
module.exports = styles;