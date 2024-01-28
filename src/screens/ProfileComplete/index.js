import React from 'react';
import {
  View,
  Image,
  Text,
  StatusBar,
  FlatList,
  Alert,
} from 'react-native';
import config from '../../config';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../component/CustButton';
import Ripple from 'react-native-material-ripple';
import * as Progress from 'react-native-progress';
import styles from './style';
import {
  Enter,
  Activebuss,
  Activeenter,
  Activeindus,
  Activestud,
  Buss,
  Indus,
  Stud,
} from '../../assets/svg/index';

export default class ProfileComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      num: '',
      validate: true,
      dataArr: [
        {
          id: 1,
          name: 'Entrepreneur',
          icon: require('../../assets/images/enter.png'),
          activeIcon: require('../../assets/images/activeenter.png'),
          is_selected: true,
        },
        {
          id: 2,
          name: 'Businessman',
          icon: require('../../assets/images/buss.png'),
          activeIcon: require('../../assets/images/activebuss.png'),
          is_selected: false,
        },
        {
          id: 3,
          name: 'Service Industry',
          icon: require('../../assets/images/indus.png'),
          activeIcon: require('../../assets/images/activeindus.png'),
          is_selected: false,
        },
        {
          id: 4,
          name: 'Student',
          icon: require('../../assets/images/stud.png'),
          activeIcon: require('../../assets/images/activestud.png'),
          is_selected: false,
        },
      ],
      dataArr2: [
        {
          id: 1,
          name: 'Entrepreneur',
          icon: require('../../assets/images/enter.png'),
          activeIcon: require('../../assets/images/activeenter.png'),
          is_selected: true,
        },
        {
          id: 2,
          name: 'Businessman',
          icon: require('../../assets/images/buss.png'),
          activeIcon: require('../../assets/images/activebuss.png'),
          is_selected: false,
        },
        {
          id: 3,
          name: 'Service Industry',
          icon: require('../../assets/images/indus.png'),
          activeIcon: require('../../assets/images/activeindus.png'),
          is_selected: false,
        },
      ],
      progress: 0.5,
    };
  }
  getSvgIcon = (id, active) => {
    if (id==1 && !active){
      return <Enter style={[styles.boxImage]} />
    } else if (id==1 && !!active){
      return <Activeenter style={[styles.boxImage]} />
    }if (id==2 && !active){
      return <Buss style={[styles.boxImage]} />
    } else if (id==2 && !!active){
      return <Activebuss style={[styles.boxImage]} />
    }else if (id==3 && !active){
      return <Indus style={[styles.boxImage]} />
    } else if (id==3 && !!active){
      return <Activeindus style={[styles.boxImage]} />
    }if (id==4 && !active){
      return <Stud style={[styles.boxImage]} />
    } else if (id==4 && !!active){
      return <Activestud style={[styles.boxImage]} />
    }

  };
  componentDidMount = () => {};
  validate = () => {
    var validate = true;
    if (!this.state.name) {
      validate = false;
    } else if (!this.state.num) {
      validate = false;
    } else if (this.state.num.length < 10) {
      validate = false;
    }

    this.setState({
      validate,
    });
  };
  renderItem = ({item, index}) => {
    return (
      <Ripple
        onPress={() => {
          this.state.dataArr.map((itm, indx) => {
            debugger;
            if (item.id == itm.id) {
              debugger;
              this.state.dataArr[indx].is_selected = !this.state.dataArr[indx]
                .is_selected;
            } else {
              debugger;
              this.state.dataArr[indx].is_selected = false;
            }
            debugger;
          });
          this.setState({
            dataArr: this.state.dataArr,
          });
        }}
        style={[
          styles.renderBox,
          {
            borderColor: item.is_selected
              ? config.Constant.COLOR_BLUE
              : '#dfdfe0',
          },
        ]}>
        {/* <Image
          resizeMode={'contain'}
          source={!item.is_selected ? item.icon : item.activeIcon}
          style={[styles.boxImage]}
        /> */}
        {this.getSvgIcon(item.id, item.is_selected)}
        <Text
          style={[
            styles.txt,
            {
              color: item.is_selected
                ? config.Constant.COLOR_BLUE
                : config.Constant.COLOR_DARK_GREY,
            },
          ]}>
          {item.name}
        </Text>
      </Ripple>
    );
  };

  renderItem1 = ({item, index}) => {
    return (
      <Ripple
        onPress={() => {
          this.state.dataArr2.map((itm, indx) => {
            debugger;
            if (item.id == itm.id) {
              debugger;
              this.state.dataArr2[indx].is_selected = !this.state.dataArr2[indx]
                .is_selected;
            } else {
              debugger;
              this.state.dataArr2[indx].is_selected = false;
            }
            debugger;
          });
          this.setState({
            dataArr2: this.state.dataArr2,
          });
        }}
        style={[
          styles.renderBox,
          {
            borderColor: item.is_selected
              ? config.Constant.COLOR_BLUE
              : '#dfdfe0',
          },
        ]}>
        <Image
          resizeMode={'contain'}
          source={!item.is_selected ? item.icon : item.activeIcon}
          style={[styles.boxImage]}
        />
        <Text
          style={[
            styles.txt,
            {
              color: item.is_selected
                ? config.Constant.COLOR_BLUE
                : config.Constant.COLOR_DARK_GREY,
            },
          ]}>
          {item.name}
        </Text>
      </Ripple>
    );
  };
  UpdateProfile = async () => {
    config.Constant.showLoader.showLoader();
    var what_describe = '';
    var what_become = '';
    this.state.dataArr.map(itm => {
      if (itm.is_selected == true) {
        what_describe = itm.name;
      }
    });
    this.state.dataArr2.map(itm => {
      if (itm.is_selected == true) {
        what_become = itm.name;
      }
    });
    var formData = {
      first_name: config.Constant.USER_DATA.first_name,
      last_name: config.Constant.USER_DATA.last_name,
      email: '',
      what_describe: what_describe,
      what_become: what_become,
    };
    var data = await modules.APIServices.PutApiCall(
      config.ApiEndpoint.UPDATE_PROFILE,
      formData,
    );
    config.Constant.showLoader.hideLoader();
    if (data.success == true) {
      this.props.navigation.reset({
        index: 1,
        routes: [{name: 'HomeScreen'}],
      });
    } else {
      // Alert.alert('error', data.message);
    }
  };
  phase1 = () => {
    return (
      <View style={styles.body}>
        <Text style={styles.bodyHeader}>
          {config.I18N.t('whatDescribeYouBest')}
        </Text>
        <Text style={styles.bodyHeaderLight}>
          {config.I18N.t('thisWillHelpUsToFetchCourse')}
        </Text>
        <FlatList
          data={this.state.dataArr}
          style={{width: '90%', alignSelf: 'center'}}
          renderItem={this.renderItem}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          extraData={this.state}
          numColumns={2}
        />
        <View style={{flex: 1}} />
        <CustomButton
          onPress={() => {
            this.setState({
              progress: 1,
            });
          }}
          validate={
            this.state.dataArr.filter(itm => {
              return itm.is_selected == true;
            }).length > 0
          }
          title={config.I18N.t('continue')}
          style={styles.btnStyle}
        />
        <Ripple
          onPress={() => {
            this.setState({
              progress: 1,
            });
          }}
          style={styles.skipBtn}>
          <Image
            source={require('../../assets/images/skip.png')}
            style={{width: 15, height: 15}}
            resizeMode={'contain'}
          />
          <Text style={styles.skipTxt}>{config.I18N.t('skip')}</Text>
          <Image
            source={require('../../assets/images/skip.png')}
            style={{width: 15, height: 15}}
            resizeMode={'contain'}
          />
        </Ripple>
      </View>
    );
  };
  phase2 = () => {
    return (
      <View style={styles.body}>
        <Text style={styles.bodyHeader}>
          {config.I18N.t('whatWouldLikeToBecome')}
        </Text>
        <Text style={styles.bodyHeaderLight}>
          {config.I18N.t('selectAnOptionWhichYouDream')}
        </Text>
        <FlatList
          data={this.state.dataArr2}
          style={{width: '90%', alignSelf: 'center'}}
          renderItem={this.renderItem1}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          extraData={this.state}
          numColumns={2}
        />
        <View style={{flex: 1}} />
        <CustomButton
          onPress={() => {
            this.UpdateProfile();
          }}
          validate={
            this.state.dataArr2.filter(itm => {
              return itm.is_selected == true;
            }).length > 0
          }
          style={styles.btnStyle}
          title={config.I18N.t('done')}
        />
        <Ripple
          onPress={() => {
            this.props.navigation.reset({
              index: 1,
              routes: [{name: 'HomeScreen'}],
            });
          }}
          style={styles.skipBtn}>
          <Image
            source={require('../../assets/images/skip.png')}
            style={{width: 15, height: 15}}
            resizeMode={'contain'}
          />
          <Text style={styles.skipTxt}>{config.I18N.t('skip')}</Text>
          <Image
            source={require('../../assets/images/skip.png')}
            style={{width: 15, height: 15}}
            resizeMode={'contain'}
          />
        </Ripple>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle={'light-content'}
          translucent={true}
        />
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.subSingleCardTop}
          colors={[
            config.Constant.COLOR_DARK_BLACK,
            config.Constant.COLOR_LIGHT_BLACK,
          ]}>
          <Ripple
            onPress={() => {
              if (this.state.progress <= 0.5) {
                this.props.navigation.pop();
              } else {
                this.setState({
                  progress: 0.5,
                });
              }
            }}>
            <Image
              source={require('../../assets/images/backIcon.png')}
              resizeMode={'contain'}
              style={styles.backIcon}
            />
          </Ripple>
          <Text style={styles.headerTitle}>
            {config.I18N.t('lastTwoSteps')}
          </Text>
          <Progress.Circle
            animated={false}
            borderColor={'white'}
            color={'white'}
            size={30}
            showsText={true}
            formatText={progress => {
              if (this.state.progress > 0.51) {
                return 2;
              }
              return 1;
            }}
            textStyle={{fontSize: 15}}
            thickness={2}
            progress={this.state.progress}
          />
        </LinearGradient>
        {this.state.progress <= 0.5 ? this.phase1() : this.phase2()}
      </View>
    );
  }
}
