import Constant from '../../config/Constant'
import { scale } from 'react-native-size-matters';
import config from '../../config/index';
export default (styles = {
  container: {
    flex: 1,
    backgroundColor: Constant.COLOR_WHITE,
  },
  CoursesText: {
    fontSize: config.Constant.Font_Size_20,
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.54,
    fontFamily: config.Constant.Font_Medium,
    marginHorizontal: scale(15),
    marginTop: scale(10),
    fontWeight: "500",
    marginBottom: scale(10)
  },
  EAEText: {
    fontSize: config.Constant.Font_Size_12,
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Semi_Bold,
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
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
  filterBtnView: {
    marginRight: scale(15),
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
  splitViewEAE: {
    flexDirection: "row",
    marginHorizontal: scale(15)
  },
  EAEMainView: {
    marginTop: scale(15),
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  staticTextBold: {
    fontSize: config.Constant.Font_Size_12,
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontWeight: '500',
    opacity: 0.8,
    fontFamily: config.Constant.Font_Semi_Bold,
    lineHeight: scale(17)
  },
  staticText: {
    fontSize: config.Constant.Font_Size_12,
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.5,
    opacity: 0.8,
    fontWeight: "normal",
    fontFamily: config.Constant.Font_Regular,
  },
  EAEBtn: {
    borderBottomWidth: 2,
    borderStyle: "solid",
    opacity: 1
  },
  FullDescriptionMainView: {
    marginHorizontal: scale(15),
    // marginVertical: scale(20),
    marginTop: scale(20),
    marginBottom: scale(10),
    flexDirection: "row",
  },
  FullDescriptionView: {
    height: scale(20),
    paddingLeft: scale(12)
    , width: scale(50),
    borderRadius: scale(4),
    position: "absolute", right: 0,
    bottom: 0,
    backgroundColor: config.Constant.COLOR_WHITE,
    opacity: 0.9
  },
  FullDescriptionBtn: {
    width: scale(20),
    height: scale(20),
    alignSelf: "flex-end",
    borderRadius: scale(4),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: config.Constant.COLOR_INPUT
  },
  down_arrow: {
    width: scale(10),
    height: scale(5),
    tintColor: config.Constant.COLOR_BLUE
  },
  filterImg: { width: scale(17), height: scale(12) }
});
module.exports = styles;