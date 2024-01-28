import {Alert} from 'react-native';
import config from '../config';
import modules from './index';

var dropDownAlert = '';

const setDropDownRef = (ref) => {
  dropDownAlert = ref;
};

const showAlert = (type, title, message, data, duration,callback) => {
  if (type === 'custom') {
    //dropDownAlert.alertWithType(type, title, message, data, duration);
    Alert.alert('Success',message)
  } else {
    if (type == 'error') {
      Alert.alert('Error',message)
      return true
      //Alert.alert(config.I18N.t('error'),message)
      modules.ErrorAlert.getRef({
        title: 'Error',
        message: message,
        negativeBtnTxt: '',
        positiveBtnTxt: '',
        extraData: {},
        onPressPositiveBtn: async (data, pressOK) => {
          if (pressOK) {
            //this.updateData(false);
          }
        },
      });
    } else {
      dropDownAlert.alertWithType(type, title, message);
    }
  }
};

export default {
  setDropDownRef,
  showAlert,
};
