import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {scale} from 'react-native-size-matters';
import CustomButton from '../../component/CustButton';
import CustInput from '../../component/CustInput';
import config from '../../config';
import images from '../../config/Images';
import {
  Lock,
  Calender,
  BlueArrowSvg,
  EditCamera,
  EditIcon,
} from '../../assets/svg';
import modules from '../../modules';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {userDateUpdate} from '../../Util/Utilities';
import MenuDisplayModel from './MenuDisplayModel';
import ImagePicker from 'react-native-image-crop-picker';
import MenuProfileDisplayModel from './MenuProfileDisplayModel';
import styles from './style';

export default function EditProfile(props) {
  const [fName, setFName] = useState(config.Constant.USER_DATA.first_name);
  const [lName, setLName] = useState(config.Constant.USER_DATA.last_name);
  const [mobileNum, setMobileNum] = useState(
    `${config.Constant.USER_DATA.country_code} ${config.Constant.USER_DATA.phone_no}`,
  );
  const [emailId, setEmailId] = useState(config.Constant.USER_DATA.email);
  const [MenuSelect, setMenuSelect] = useState(false);
  const [ProfileSelect, setProfileSelect] = useState(false);

  const [Is_true, setIs_true] = useState(false);

  const [ImageSource, setImagePicker] = useState(false);

  const [arrayData, setArrayData] = useState([]);
  const [popupTitle, setPopupTitle] = useState('');

  const [SelectedPopup, setSelectedPopup] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(10);

  const [Gender, setGender] = useState(
    !!config.Constant.USER_DATA.gender && config.Constant.USER_DATA.gender != 0
      ? config.Constant.USER_DATA.gender == 'Male'
        ? 'Male'
        : 'Female'
      : '',
  );
  const [DOB, setDOB] = useState(
    !!config.Constant.USER_DATA.dob ? config.Constant.USER_DATA.dob : '',
  );
  const [Language, setLanguage] = useState(
    !!config.Constant.USER_DATA.language &&
      config.Constant.USER_DATA.language != 0
      ? config.Constant.USER_DATA.language == 'eng'
        ? 'English'
        : 'Hindi'
      : '',
  );

  const [UserLevel, setUserLevel] = useState(
    !!config.Constant.USER_DATA.level
      ? config.Constant.USER_DATA.level
      : '',
  );
  const [CurrIndus, setCurrIndus] = useState(
    !!config.Constant.USER_DATA.industry_id
      ? config.Constant.USER_DATA.industry_id
      : '',
  );
  const [WantToBecome, setWantToBecome] = useState(
    !!config.Constant.USER_DATA.what_become
      ? config.Constant.USER_DATA.what_become
      : '',
  );

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const Header = () => {
    return (
      <View style={[styles.LinearSty]}>
        <Pressable
          onPress={() => props.navigation.goBack()}
          style={styles.backImgBtn}>
          <Image
            style={styles.backImg}
            source={images.BackIcon}
            resizeMode={'cover'}
          />
        </Pressable>
        <Text style={styles.cartTxt}>{config.I18N.t('editProfileSmall')}</Text>
        <Ripple style={styles.btnView}></Ripple>
      </View>
    );
  };

  const uploadImage = selectedId => {
    if (selectedId == 1) {
      ImagePicker.openCamera({
        width: 500,
        height: 500,
        mediaType: 'photo',
        cropping: true,
      }).then(image => {
        setImagePicker(image);
      });
    } else {
      ImagePicker.openPicker({
        width: 500,
        height: 500,
        mediaType: 'photo',
        cropping: true,
      }).then(image => {
        setImagePicker(image);
      });
    }
  };

  useEffect(() => {
    let is_true = true;
    if (!fName) {
      is_true = false;
    } else if (!Gender) {
      is_true = false;
    } else if (!DOB) {
      is_true = false;
    } else if (!Language) {
      is_true = false;
    } else if (!UserLevel) {
      is_true = false;
    } else if (!CurrIndus) {
      is_true = false;
    } else if (!WantToBecome) {
      is_true = false;
    }

    setIs_true(is_true);
  }, [
    fName,
    emailId,
    Gender,
    DOB,
    Language,
    UserLevel,
    CurrIndus,
    WantToBecome,
  ]);

  const userUpdate = async () => {
    config.Constant.showLoader.showLoader();
    var formData = {
      first_name: fName,
      last_name: lName,
      email: emailId,
      what_describe: UserLevel,
      what_become: WantToBecome,
      gender: Gender.toLowerCase(),
      industry_id: CurrIndus,
      dob: DOB,
      language: Language == 'English' ? 'eng' : 'hin',
    };
    var data = await modules.APIServices.PutApiCall(
      config.ApiEndpoint.UPDATE_PROFILE,
      formData,
    );
    if (data.success == true) {
      await userDateUpdate();
      config.Constant.showLoader.hideLoader();
      props.navigation.pop();
    } else {
      config.Constant.showLoader.hideLoader();
      // Alert.alert('error', data.message);
    }
  };

  const updateImage = async () => {
    config.Constant.showLoader.showLoader();
    let formData = new FormData();
    formData.append('user_image', {
      uri: ImageSource.path,
      name: 'photo.png',
      filename: 'imageName.png',
      type: 'image/png',
    });
    var data = await modules.APIServices.PostApiCallFormDate(
      config.ApiEndpoint.UPDATE_PROFILE_IMAGE,
      formData,
    );
    if (data.success == true) {
      userUpdate();
    } else {
      config.Constant.showLoader.hideLoader();
      // Alert.alert('error', data.message);
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    setDOB(moment(date).format('DD/MM/YYYY'));
    hideDatePicker();
  };

  const displayPopup = id => {
    setSelectedPopup(id);
    if (id == 1) {
      setPopupTitle(config.I18N.t('gender'));
      setArrayData([
        {title: 'Male', value: 'male'},
        {title: 'Female', value: 'male'},
      ]);
      if (!!Gender) {
        setSelectedIndex(Gender == 'Male' ? 0 : 1);
      } else {
        setSelectedIndex(10);
      }
      setMenuSelect(true);
    } else if (id == 2) {
      setPopupTitle(config.I18N.t('language'));
      setArrayData([
        {title: 'English', value: 'en'},
        {title: 'Hindi', value: 'hin'},
      ]);
      if (!!Language) {
        setSelectedIndex(Language == 'English' ? 0 : 1);
      } else {
        setSelectedIndex(10);
      }
      setMenuSelect(true);
    } else if (id == 3) {
      setPopupTitle(config.I18N.t('userLevel'));
      setArrayData([
        {title: 'Entrepreneur'},
        {title: 'Businessman'},
        {title: 'Service Industry'},
        {title: 'Student'},
      ]);
      if (!!UserLevel) {
        if (UserLevel == 'Entrepreneur') {
          setSelectedIndex(0);
        } else if (UserLevel == 'Businessman') {
          setSelectedIndex(1);
        } else if (UserLevel == 'Service Industry') {
          setSelectedIndex(2);
        } else if (UserLevel == 'Student') {
          setSelectedIndex(3);
        }
      } else {
        setSelectedIndex(10);
      }
      setMenuSelect(true);
    } else if (id == 4) {
      setPopupTitle(config.I18N.t('currentIndustry'));
      setArrayData([
        {title: 'Entrepreneur'},
        {title: 'Businessman'},
        {title: 'Service Industry'},
        {title: 'Student'},
      ]);
      if (!!CurrIndus) {
        if (CurrIndus == 'Entrepreneur') {
          setSelectedIndex(0);
        } else if (CurrIndus == 'Businessman') {
          setSelectedIndex(1);
        } else if (CurrIndus == 'Service Industry') {
          setSelectedIndex(2);
        } else if (CurrIndus == 'Student') {
          setSelectedIndex(3);
        }
      } else {
        setSelectedIndex(10);
      }
      setMenuSelect(true);
    } else if (id == 5) {
      setPopupTitle(config.I18N.t('wantToBecome'));
      setArrayData([
        {title: 'Entrepreneur'},
        {title: 'Businessman'},
        {title: 'Service Industry'},
      ]);
      if (!!WantToBecome) {
        if (WantToBecome == 'Entrepreneur') {
          setSelectedIndex(0);
        } else if (WantToBecome == 'Businessman') {
          setSelectedIndex(1);
        } else if (WantToBecome == 'Service Industry') {
          setSelectedIndex(2);
        }
      } else {
        setSelectedIndex(10);
      }
      setMenuSelect(true);
    }
  };

  const setSelectedIndexFun = index => {
    if (SelectedPopup == 1) {
      setGender(index == 0 ? 'Male' : 'Female');
    } else if (SelectedPopup == 2) {
      setLanguage(index == 0 ? 'English' : 'Hindi');
    } else if (SelectedPopup == 3) {
      if (index == 0) {
        setUserLevel('Entrepreneur');
      } else if (index == 1) {
        setUserLevel('Businessman');
      } else if (index == 2) {
        setUserLevel('Service Industry');
      } else if (index == 3) {
        setUserLevel('Student');
      }
    } else if (SelectedPopup == 4) {
      if (index == 0) {
        setCurrIndus('Entrepreneur');
      } else if (index == 1) {
        setCurrIndus('Businessman');
      } else if (index == 2) {
        setCurrIndus('Service Industry');
      } else if (index == 3) {
        setCurrIndus('Student');
      }
    } else if (SelectedPopup == 5) {
      if (index == 0) {
        setWantToBecome('Entrepreneur');
      } else if (index == 1) {
        setWantToBecome('Businessman');
      } else if (index == 2) {
        setWantToBecome('Service Industry');
      }
    }
  };

  return (
    <View style={styles.container}>
      {Header()}
      <View style={styles.innerView}>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={{
              width: 70,
              height: 70,
              marginHorizontal: scale(15),
              marginTop: scale(15),
            }}
            onPress={() => {
              setProfileSelect(true);
            }}>
            <View style={styles.absoluteView}>
              <EditCamera />
            </View>
            {!!ImageSource ? (
              <Image
                source={{uri: ImageSource.path}}
                resizeMode={'cover'}
                style={{width: 60, height: 60, borderRadius: 50}}
              />
            ) : (
              <EditIcon />
            )}
          </TouchableOpacity>
          <View style={{marginTop: scale(5)}} />
          <CustInput
            value={fName}
            onChangeText={name => {
              setFName(name);
            }}
            label={config.I18N.t('FirstName')}
            style={styles.textView1}
          />
          <CustInput
            value={lName}
            onChangeText={val => {
              setLName(val);
            }}
            label={config.I18N.t('LastName')}
            style={styles.textView2}
          />
          <CustInput
            value={mobileNum}
            onChangeText={val => {
              setMobileNum(val);
            }}
            label={config.I18N.t('mobileNumber')}
            style={styles.textView2}
            iconDisplay={<Lock />}
            editable={false}
          />
          <CustInput
            value={emailId}
            onChangeText={val => {
              setEmailId(val);
            }}
            label={config.I18N.t('EmailId')}
            style={styles.textView3}
          />

          <CustInput
            value={Gender}
            onChangeText={name => {
              setGender(name);
            }}
            label={config.I18N.t('gender')}
            style={styles.textView1}
            iconDisplay={<BlueArrowSvg />}
            onPress={() => {
              displayPopup(1);
            }}
          />
          <CustInput
            value={!!DOB ? moment(DOB,'DD/MM/YYYY').format('DD-MM-YYYY') : ''}
            onChangeText={val => {
              //setDOB(val);
            }}
            label={config.I18N.t('dob')}
            style={styles.textView2}
            iconDisplay={<Calender />}
            onPress={showDatePicker}
          />
          <CustInput
            value={Language}
            onChangeText={val => {
              setLanguage(val);
            }}
            label={config.I18N.t('language')}
            style={styles.textView3}
            iconDisplay={<BlueArrowSvg />}
            onPress={() => {
              displayPopup(2);
            }}
          />

          <CustInput
            value={UserLevel}
            onChangeText={name => {
              //setUserLevel(name);
            }}
            label={config.I18N.t('userLevel')}
            style={styles.textView1}
            iconDisplay={<BlueArrowSvg />}
            onPress={() => {
              displayPopup(3);
            }}
          />
          <CustInput
            value={CurrIndus}
            onChangeText={val => {
              //setCurrIndus(val);
            }}
            label={config.I18N.t('currentIndustry')}
            style={styles.textView2}
            iconDisplay={<BlueArrowSvg />}
            onPress={() => {
              displayPopup(4);
            }}
          />
          <CustInput
            value={WantToBecome}
            onChangeText={val => {
              //setWantToBecome(val);
            }}
            label={config.I18N.t('wantToBecome')}
            style={styles.textView3}
            iconDisplay={<BlueArrowSvg />}
            onPress={() => {
              displayPopup(5);
            }}
          />
          <CustomButton
            onPress={() => {
              if (!!ImageSource) {
                updateImage();
              } else {
                userUpdate();
              }
            }}
            validate={Is_true}
            title={config.I18N.t('saveChanges')}
            style={styles.btnStyle}
          />
        </ScrollView>
      </View>
      <DateTimePickerModal
        date={!!DOB ? new Date(moment(DOB,'DD/MM/YYYY').format()) : new Date()}
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      {MenuSelect ? (
        <MenuDisplayModel
          Arr={arrayData}
          subcateIndex={selectedIndex}
          popupTitle={popupTitle}
          props={props}
          Close={() => setMenuSelect(false)}
          onSelect={(item, index) => {
            setSelectedIndexFun(index);
            setTimeout(() => {
              setMenuSelect(false);
            }, 300);
          }}
        />
      ) : null}

      {ProfileSelect ? (
        <MenuProfileDisplayModel
          Arr={[
            {title: 'Select Image from Gallery'},
            {title: 'Click Image From Camera'},
          ]}
          subcateIndex={selectedIndex}
          popupTitle={'Select Image'}
          props={props}
          Close={() => setProfileSelect(false)}
          onSelect={(item, index) => {
            uploadImage(index);
            setTimeout(() => {
              setProfileSelect(false);
            }, 300);
          }}
        />
      ) : null}
    </View>
  );
}
