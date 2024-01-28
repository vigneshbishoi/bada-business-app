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
  dotSty: {
    width: scale(6),
    height: scale(6),
    borderRadius: scale(10),
    marginHorizontal: scale(-5),
    padding: 0,
    margin: 0,
    backgroundColor: "rgba(128, 128, 128, 0.92)"
  },
  dotBoxSty: {
    bottom: scale(-25),
    padding: 0
  },
  boxSliderSty: {
    borderRadius: scale(5),
    width: '90%',
    marginTop: scale(15)
  },
  yourCoursesText: {
    fontSize: config.Constant.Font_Size_14,
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.03,
    fontFamily: config.Constant.Font_Semi_Bold,
    marginHorizontal: scale(15),
    marginTop: scale(33),
    marginBottom: scale(5)
  },
  staticText: {
    fontSize: config.Constant.Font_Size_14,
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.03,
    fontFamily: config.Constant.Font_Semi_Bold,
    marginHorizontal: scale(15),
    marginTop: scale(30),
    marginBottom: scale(5)
  },
  linearView: {
    height: scale(60),
    borderRadius: scale(4),
    marginHorizontal: scale(15),
    marginTop: scale(25)
  },
  linearBackgroundView: {
    flex: 1,
    borderRadius: scale(4),
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: scale(15)
  },
  bookImg: {
    width: scale(22),
    height: scale(22),
    marginRight: scale(10)
  },
  mybooksText: {
    fontWeight: "500",
    fontFamily: config.Constant.Font_Medium,
    letterSpacing: 0.38,
    fontSize: config.Constant.Font_Size_14,
    color: config.Constant.COLOR_WHITE,
    flex: 1
  },
  rightArrowView: {
    width: scale(26),
    height: scale(26),
    borderRadius: scale(26),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  rightArrowImg: {
    width: scale(5),
    height: scale(9),
  }
});
module.exports = styles;