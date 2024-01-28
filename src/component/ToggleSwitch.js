/**
 * toggle-switch-react-native
 * Toggle Switch component for react native, it works on iOS and Android
 * https://github.com/aminebenkeroum/toggle-switch-react-native
 * Email:amine.benkeroum@gmail.com
 * Blog: https://medium.com/@aminebenkeroum/
 * @benkeroumamine
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Platform,
  I18nManager,
  Image,
} from 'react-native';

import PropTypes from 'prop-types';
import config from '../config';
import images from '../config/Images';
import { scale } from 'react-native-size-matters';

export default class ToggleSwitch extends React.Component {
  static calculateDimensions(size) {
    switch (size) {
      case 'small':
        return {
          width: 40,
          padding: 10,
          circleWidth: 15,
          circleHeight: 15,
          translateX: 22,
        };
      case 'large':
        return {
          width: 65,
          padding: 15,
          circleWidth: 25,
          circleHeight: 25,
          translateX: 35,
        };
      default:
        return {
          width: 46,
          padding: 12,
          circleWidth: 18,
          circleHeight: 18,
          translateX: 26,
        };
    }
  }

  static propTypes = {
    isOn: PropTypes.bool.isRequired,
    label: PropTypes.string,
    onColor: PropTypes.string,
    offColor: PropTypes.string,
    size: PropTypes.string,
    labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    thumbOnStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    thumbOffStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    trackOnStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    trackOffStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    onToggle: PropTypes.func,
    icon: PropTypes.object,
    disabled: PropTypes.bool,
    animationSpeed: PropTypes.number,
    useNativeDriver: PropTypes.bool,
    circleColor: PropTypes.string,
  };

  static defaultProps = {
    isOn: false,
    onColor: '#4cd137',
    offColor: '#ecf0f1',
    size: 'medium',
    labelStyle: {},
    thumbOnStyle: {},
    thumbOffStyle: {},
    trackOnStyle: {},
    trackOffStyle: {},
    icon: null,
    disabled: false,
    animationSpeed: 300,
    useNativeDriver: true,
    circleColor: 'white',
  };

  offsetX = new Animated.Value(0);
  dimensions = ToggleSwitch.calculateDimensions(this.props.size);

  createToggleSwitchStyle = () => [
    {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: this.dimensions.width,
      borderRadius: 20,
      padding: this.dimensions.padding,
      backgroundColor: this.props.isOn
        ? this.props.onColor
        : this.props.offColor,
    },
    this.props.isOn ? this.props.trackOnStyle : this.props.trackOffStyle,
  ];

  createInsideCircleStyle = () => [
    {
      alignItems: 'center',
      justifyContent: 'center',
      margin: Platform.OS === 'web' ? 0 : 4,
      left: Platform.OS === 'web' ? 4 : 0,
      position: 'absolute',
      backgroundColor: this.props.circleColor,
      transform: [{ translateX: this.offsetX }],
      width: this.dimensions.circleWidth,
      height: this.dimensions.circleHeight,
      borderRadius: this.dimensions.circleWidth / 2,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2.5,
      elevation: 1.5,
    },
    this.props.isOn ? this.props.thumbOnStyle : this.props.thumbOffStyle,
  ];

  render() {
    const {
      animationSpeed,
      useNativeDriver,
      isOn,
      onToggle,
      disabled,
      labelStyle,
      label,
      icon,
    } = this.props;

    let toValue;
    if (!I18nManager.isRTL && isOn) {
      toValue = this.dimensions.width - this.dimensions.translateX;
    } else if (I18nManager.isRTL && isOn) {
      toValue = -this.dimensions.width + this.dimensions.translateX;
    } else {
      toValue = -1;
    }

    Animated.timing(this.offsetX, {
      toValue,
      duration: animationSpeed,
      useNativeDriver: useNativeDriver,
    }).start();

    return (
      <View style={styles.container} {...this.props}>
        {label ? (
          <Text style={[styles.labelStyle, labelStyle]}>{label}</Text>
        ) : null}
        <TouchableOpacity
          style={[this.createToggleSwitchStyle(), { padding: 3 }]}
          activeOpacity={0.8}
          onPress={() => (disabled ? null : onToggle(!isOn))}>
          <Animated.View style={this.createInsideCircleStyle()}>
            {isOn ? (
              <View
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 25,
                  backgroundColor: config.Constant.COLOR_BLUE,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={images.TickIcon}
                  style={{ width: 10, height: 10, tintColor: 'white' }}
                  resizeMode={'contain'}
                />
              </View>
            ) : (
              <View
                style={{
                  width: 25,
                  height: 25,
                  borderRadius: 25,
                  backgroundColor: '#7f7e83',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={images.CloseIcon}
                  style={{ width: 8, height: 8, tintColor: 'white' }}
                  resizeMode={'contain'}
                />
              </View>
            )}
          </Animated.View>
          {isOn ?
            <Text style={[styles.textStyle, { color: "#5446ff", marginRight: scale(20) }]}>Yes</Text> :
            <Text style={[styles.textStyle, { color: '#292830', opacity: 0.6, marginLeft: scale(20) }]}>No</Text>
          }
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyle: {
    marginHorizontal: 10,
  },
  textStyle: {
    flex: 1,
    fontFamily: config.Constant.Font_Regular,
    fontSize: scale(12),
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0.33,
    textAlign: 'center',
  }
});