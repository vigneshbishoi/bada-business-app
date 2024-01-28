
import config from '../config';
import modules from '../modules/index';
import { DeviceEventEmitter } from 'react-native'

const AddToSave = async (id, type) => {
  var formData = {
    "course_topic_id": id,
    "type": type
  }
  var _Save = await modules.APIServices.PostApiCall(
    config.ApiEndpoint.ADD_TO_SAVE,
    formData,
  );
  if (_Save.success == true) {
    config.Constant.showLoader.hideLoader();
    DeviceEventEmitter.emit('UpdateSaveValue')
    return _Save
  } else {
    config.Constant.showLoader.hideLoader();
    return _Save
  }
}

const DeleteSave = async (id, type) => {
  var formData = {
    "course_topic_id": id,
    "type": type
  }

  var _Save = await modules.APIServices.DeleteApiCall(
    config.ApiEndpoint.DELETE_SAVE,
    formData,
  );
  if (_Save.success == true) {
    config.Constant.showLoader.hideLoader();
    DeviceEventEmitter.emit('UpdateSaveValue')
    return _Save
  } else {
    config.Constant.showLoader.hideLoader();
    return _Save
  }
}

export default {
  AddToSave,
  DeleteSave
};
