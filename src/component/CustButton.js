//Global imports
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Ripple from 'react-native-material-ripple';
import config from '../config';
import {scale} from 'react-native-size-matters';

const CustomButton = props => {
  const {title = '', validate = true, style, onPress = () => {}} = props;

  return (
    <Ripple
      disabled={!validate}
      onPress={() => onPress()}
      style={[
        styles.baseStyle,
        {
          backgroundColor: validate
            ? config.Constant.COLOR_PRIMARY
            : config.Constant.COLOR_ULTRA_LIGHT_BG,
        },
        style,
      ]}>
      <Text style={styles.baseTitleStyle}>{title}</Text>
    </Ripple>
  );
};

export default CustomButton;

const styles = new StyleSheet.create({
  baseStyle: {
    backgroundColor: config.Constant.COLOR_PRIMARY,
    width: '100%',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  baseTitleStyle: {
    fontFamily: config.Constant.Font_Medium,
    color: 'white',
    fontSize: scale(12),
    letterSpacing: 0.33,
  },
});
