import React, {Component} from 'react';
import {View, ActivityIndicator, Text, StyleSheet} from 'react-native';
import config from '../config';

export default class CustLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      color: '',
      message: 'Loading...',
      showLoader: false,
    };
  }

  showLoader = (message='Loading...') => {
    this.setState({
      isVisible: true,
      color: config.Constant.COLOR_PRIMARY,
      message:message,
    });
  };

  hideLoader = () => {
    this.setState({
      isVisible: false,
    });
  };

  render() {
    const {isVisible} =
      Object.keys(this.props).length > 0 ? this.props : this.state;

    return (
      <View style={[styles.loaderView,{width: isVisible ? '100%' : '0%',
      height: isVisible ? '100%' : '0%',}]}>
        {isVisible && (
          <View style={styles.innerview}>
            <ActivityIndicator
              size={this.state.message ? 'small' : 'large'}
              color={'#fff'}
            />

            <Text style={styles.lodingtxt}>{this.state.message}</Text>
          </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  innerview: {
    maxHeight: 200,
    backgroundColor: config.Constant.COLOR_PRIMARY,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  lodingtxt: {
    color: 'white',
    fontSize: 15,
    marginTop: 10,
  },
  loaderView: {
    elevation: 10,
    position: 'absolute',
    
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    backgroundColor: 'transparent',
  },
});
