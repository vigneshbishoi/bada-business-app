import {Platform, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import config from '../../config';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Constant.COLOR_WHITE,
  },
  innerContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  itemView: {
    borderRadius: 4,
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(151, 151, 151, 0.2)',
    marginVertical: scale(35),
    width: config.Constant.SCREEN_WIDTH * 0.6,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  titleTxt: {
    fontFamily: config.Constant.Font_Medium,
    fontSize: scale(20),
    fontWeight: '500',
    letterSpacing: 0.54,
    color: config.Constant.COLOR_DARK_GREY,
    textAlign: 'center',
    alignSelf: 'center',
  },
  itemTxt: {
    fontFamily: config.Constant.Font_Medium,
    fontSize: scale(12),
    fontWeight: '500',
    letterSpacing: 0.54,
    color: config.Constant.COLOR_DARK_GREY,
    textAlign: 'center',
    alignSelf: 'center',
  },
  semiView: {
    width: scale(45),
    backgroundColor: 'silver',
    borderTopLeftRadius: scale(4),
    borderBottomLeftRadius: scale(4),
    justifyContent: 'center',
    height: scale(45),
    marginRight: 10,
  },
  mainIMg: {
    flex: 1,
    borderTopLeftRadius: scale(5),
    borderBottomLeftRadius: scale(5),
  },
  btnText: {
    fontFamily: config.Constant.Font_Medium,
    fontSize: scale(12),
    fontWeight: '500',
    letterSpacing: 0.33,
    color: config.Constant.COLOR_DARK_GREY,
    textAlign: 'center',
    alignSelf: 'center',
  },
  successIcon: {
    width: config.Constant.SCREEN_WIDTH * 0.25,
    height: config.Constant.SCREEN_WIDTH * 0.25,
    marginBottom: scale(20),
  },
  btnView: {width: '90%', alignSelf: 'center', marginBottom: 15},
});
