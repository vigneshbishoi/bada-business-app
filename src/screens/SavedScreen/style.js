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
    fontWeight: "500",
  },
  filterBtnView: {
    height: scale(36),
    width: scale(36),
    borderRadius: scale(4),
    marginTop: scale(4)
  },
  filterBtn: {
    flex: 1,
    borderRadius: scale(4),
    backgroundColor: config.Constant.COLOR_INPUT,
    justifyContent: "center",
    alignItems: 'center'
  },
  filterImg: {
    width: scale(17),
    height: scale(12)
  },
  MaintitleView: {
    marginHorizontal: scale(15),
    marginVertical: scale(10),
    justifyContent: "space-between",
    flexDirection: 'row',
  },
  totalCourses: {
    fontSize: config.Constant.Font_Size_12,
    color: config.Constant.COLOR_DARK_GREY,
    fontFamily: config.Constant.Font_Regular,
    marginTop: scale(-3),
    opacity: 0.7,
    fontWeight: "normal",
    letterSpacing: 0.33,
  },
  eaePscBtnMainView: {
    flexDirection: "row",
    marginHorizontal: scale(15),
    marginBottom: scale(20),
    marginTop: scale(10)
  },
  BtnEAE: {
    paddingVertical: scale(8),
    paddingHorizontal: scale(15),
    backgroundColor: config.Constant.COLOR_WHITE,
    // marginHorizontal: scale(8),
    marginRight: scale(8),
    borderRadius: scale(5),
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: 'rgba(20, 26, 26, 0.15)'
  },
  EAEBtnText: {
    fontSize: config.Constant.Font_Size_12,
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontWeight: "normal",
    fontFamily: config.Constant.Font_Regular,
  }
});
module.exports = styles;