//Global imports
import React, {useContext, useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';
import config from '../config';
import {scale} from 'react-native-size-matters';
import CountryPicker from 'react-native-country-picker-modal';
import { DropArrowSvg } from '../assets/svg';

const CustInput = props => {
  const {
    value,
    onChangeText,
    label,
    style,
    secureTextEntry,
    keyboardType,
    editable = true,
    multiline = false,
    returnKeyType = 'default',
    iconDisplay,
    onPress = false,
    is_display_num = false,
    countryCode = () => {},
  } = props;

  const [cca2, setCca2] = useState('IN');
  const [countryPopup, setCountryPopup] = useState(false);
  const [callingCode, setCallingCode] = useState('91');
  const [refs,setRefs] = useState(null)
  const [is_focused,setIs_focused] = useState(false)

  return (
    <Pressable
      onPress={!!onPress ? onPress : () => {}}
      style={[styles.txtView, style]}>
      <View style={{flex: 1, height: scale(35), justifyContent: 'center'}}>
        {(!!value || !!is_display_num || !!is_focused) && (
          <Text
            style={[
              styles.placeholderTxt,
              {color: config.Constant.COLOR_LIGHT_BG},
            ]}>
            {!!value || !!is_display_num || !!is_focused ? label : ''}
          </Text>
        )}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {!!is_display_num && (
            <TouchableOpacity
              style={{
                flexDirection: 'row', 
                alignItems:'center', 
                justifyContent: 'center',
                marginRight: scale(4),
              }}
              onPress={() => {
                setCountryPopup(true);
                //refs.onOpen()
              }}>
              <Text
                style={{
                  fontSize: scale(12),
                  letterSpacing: 0.33,
                  fontFamily: config.Constant.Font_Medium,
                  fontWeight: '500',
                  color: config.Constant.COLOR_BLUE,
                  marginHorizontal:scale(2)
                }}>
                +{callingCode}{' '}
              </Text>              
              <DropArrowSvg />              
            </TouchableOpacity>
          )}
          <TextInput
            multiline={multiline}
            placeholder={!!is_focused?'':label}
            editable={editable && !onPress}
            value={value}
            keyboardType={!!keyboardType ? keyboardType : 'default'}
            secureTextEntry={secureTextEntry}
            returnKeyType={returnKeyType}
            placeholderTextColor={'rgba(40,40,47,0.6)'}
            style={[
              styles.baseStyle,
              {
                color: editable
                  ? config.Constant.COLOR_DARK_GREY
                  : 'rgba(40,40,47,0.6)',
              },
            ]}
            selectionColor={config.Constant.COLOR_LIGHT_BG}
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
            onFocus={()=>{
              setIs_focused(true)
            }}
            onBlur={()=>{
              setIs_focused(false)
            }}
            onChangeText={text => onChangeText(text)}
          />
        </View>
      </View>
      {!!iconDisplay ? iconDisplay : <></>}
      <View style={{width: 0, height: 0}}>
        <CountryPicker
        ref={(ref)=>{setRefs(ref)}}
          withAlphaFilter={false}
          style={{
            fontSize: 0,
          }}
          showCallingCode={true}
          withCallingCode={true}
          // withCurrency={true}
          withCallingCodeButton={true}
          withFlagButton={false}
          withEmoji={true}
          withFilter={true}
          withModal={true}
          filterPlaceholder={'Search Country'}
          filterable={false}
          filterPlaceholderTextColor={config.Constant.COLOR_BLACK}
          onSelect={value => {
            setCountryPopup(false);
            countryCode(value.callingCode);
            setCca2(value.cca2);
            setCallingCode(value.callingCode);
          }}
          countryCode={cca2 ? cca2 : 'IN'}
          translation="eng"
          visible={countryPopup}
        />        
      </View>
    </Pressable>
  );
};

export default CustInput;

const styles = new StyleSheet.create({
  baseStyle: {
    flex: 1,
    backgroundColor: config.Constant.COLOR_WHITE,
    borderRadius: 0,
    marginVertical: 0,
    fontSize: scale(12),
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Medium,
    fontWeight: '500',
    color: config.Constant.COLOR_DARK_GREY,
    paddingVertical: 0,
  },
  txtView: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#dfdfe0',
    width: '90%',
    alignSelf: 'center', 
    paddingTop: scale(15),
    paddingBottom: scale(3),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: scale(15),
  },
  placeholderTxt: {
    fontFamily: config.Constant.Font_Regular,
    fontSize: scale(10),
    letterSpacing: 0.27,
    color: '#28282f',
    fontWeight: '500',
    marginLeft: scale(2)
    //opacity:0.6
  },
});
