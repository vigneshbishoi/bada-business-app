import Constant from '../../config/Constant';
import {scale} from 'react-native-size-matters';
import config from '../../config/index';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
    paddingBottom: scale(5),
    marginBottom: scale(5),
  },
  mainView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  semiView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderColor: '#26141a1a',
  },
  backImgBtn: {
    marginLeft: scale(5),
    width: scale(35),
    justifyContent: 'center',
    height: scale(36),
  },
  backImg: {
    width: scale(13),
    height: scale(11),
    marginLeft: scale(10),
    tintColor: config.Constant.COLOR_DARK_GREY,
  },
  cardBtn: {
    marginRight: scale(5),
  },
  shareBtn: {
    marginRight: scale(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveBtn: {
    marginRight: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
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
  cartTxt: {
    color: config.Constant.COLOR_DARK_GREY,
    fontFamily: config.Constant.Font_Medium,
    fontSize: scale(16),
    flex: 1,
    textAlign: 'left',
    paddingRight: scale(10),
  },
  btnView: {
    paddingVertical: scale(5),
    paddingHorizontal: scale(10),
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: '#292830',
    borderWidth: 0.5,
    marginRight: scale(15),
  },
  btnName: {
    fontFamily: config.Constant.Font_Medium,
    color: config.Constant.COLOR_BLUE,
    fontSize: scale(12),
    letterSpacing: 0.33,
    marginBottom: Platform.OS == 'ios' ? 0 : -2,
  },
  taxTxt: {
    color: config.Constant.COLOR_DARK_GREY,
    fontSize: scale(10),
    fontFamily: config.Constant.Font_Medium,
    opacity: 0.6,
    letterSpacing: 0.27,
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});
