import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, Platform, DeviceEventEmitter } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen/index';
import config from '../config';
import image from '../config/Images'
import DrawerCom from '../component/Drawer'
import ProfileComplete from '../screens/ProfileComplete';
import SalesScreen from '../screens/SalesScreen/index'
import CoursesDetailScreen from '../screens/CoursesDetailScreen/index'
import CoursesScreen from '../screens/CoursesScreen/index'
import SavedScreen from '../screens/SavedScreen/index'
import DownloadCoursesScreen from '../screens/DrawerScreens/DownloadCousesScreen/index'
import ArticlesScreen from '../screens/DrawerScreens/Articles/index'

//Lib
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { scale } from 'react-native-size-matters';
import LandingScreen from '../screens/LandingScreen';
import MyAccount from '../screens/MyAccount';
import EditProfile from '../screens/EditProfile';
import CartScreen from '../screens/CartScreen';
import CreditScores from '../screens/CreditScores';
import SuccessScreen from '../screens/SuccessScreen';
import SpeakersScreen from '../screens/DrawerScreens/Speakers/index'
import GalleryScreen from '../screens/DrawerScreens/Gallery/index'
import WebViewText from '../screens/WebViewText';
import LiveSession from '../screens/LiveSession';
import BannerCtaScreen from '../screens/BannerCtaScreen';
import YouTubeScreen from '../screens/DrawerScreens/YouTube';
import SyllabusFullDetails from '../screens/CoursesDetailScreen/SyllabusFullDetail';
import ChatScreen from '../screens/ChatScreen';
import YouTubeDetailsScreen from '../screens/DrawerScreens/YouTubeDetails'
import MyCoursesScreen from '../screens/MyCoursesScreen/index'
import YouTubePlayer from '../screens/DrawerScreens/YouTubePlayer/index'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
function MainNavigator() {
  return (
    <NavigationContainer gestureHandlerProps={false}>
      <Stack.Navigator
        gestureHandlerProps={false}
        mode="card"
        headerMode={'none'}
        initialRouteName={'LandingScreen'}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="ProfileComplete" component={ProfileComplete} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={DrawerFun} />
        <Stack.Screen name="SalesScreen" component={SalesScreen} />
        <Stack.Screen name="CoursesDetailScreen" component={CoursesDetailScreen} />
        <Stack.Screen name="DownloadCoursesScreen" component={DownloadCoursesScreen} />
        <Stack.Screen name="ArticlesScreen" component={ArticlesScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="WebViewText" component={WebViewText} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="CreditScores" component={CreditScores} />
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        <Stack.Screen name="LiveSession" component={LiveSession} />
        <Stack.Screen name="SpeakersScreen" component={SpeakersScreen} />
        <Stack.Screen name="GalleryScreen" component={GalleryScreen} />
        <Stack.Screen name="BannerCtaScreen" component={BannerCtaScreen} />
        <Stack.Screen name="SyllabusFullDetails" component={SyllabusFullDetails} />
        <Stack.Screen name="YouTubeScreen" component={YouTubeScreen} />
        <Stack.Screen name="YouTubeDetailsScreen" component={YouTubeDetailsScreen} />
        <Stack.Screen name="MyCoursesScreen" component={MyCoursesScreen} />
        <Stack.Screen name="YouTubePlayer" component={YouTubePlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


function DrawerFun() {

  const [catchview, setCatchView] = useState(false);
  const [aboutview, setAboutView] = useState(false);

  return (
    <Drawer.Navigator initialRouteName='Home'
      drawerContentOptions={{
        activeTintColor: 'transparent',
        activeBackgroundColor: 'transparent',
      }}
      overlayColor='rgba(0, 0, 0, 0.7)'
      drawerStyle={{
        width: '74%'
      }}
      drawerContent={props => <DrawerCom props={props}
        pressctach={() => [setCatchView(!catchview), setAboutView(false)]} catchshow={catchview}
        pressabout={() => [setAboutView(!aboutview), setCatchView(false)]} aboutshow={aboutview}
      />}>
      <Drawer.Screen name="Home" component={MyTabs} options={{ drawerLabel: '', headerShown: false }} />
    </Drawer.Navigator>
  )
}

const MyTabs = () => {

  return (
    <BottomTab.Navigator initialRouteName='home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconColor;
          let labelColor;
          let labelText;
          let iconOpacity;
          let labelWeight;
          let labelOpacity;
          if (route.name === 'home') {
            iconName = focused ? image.Home : image.EmptyHome
            iconColor = focused
              ? config.Constant.COLOR_DRAWER_DARK : config.Constant.COLOR_DARK_GREY
            labelColor = focused
              ? config.Constant.COLOR_DRAWER_DARK : 'transparent'
            labelText = config.I18N.t('bottom_Tab_Home')
            iconOpacity = focused ? 1 : 0.8
            labelOpacity = focused ? 1 : 0.6
            labelWeight = focused ? '900' : 'normal'
          } else if (route.name === 'courses') {
            iconName = focused ? image.BookFill : image.Courses
            iconColor = focused
              ? config.Constant.COLOR_DRAWER_DARK : config.Constant.COLOR_DARK_GREY
            labelColor = focused
              ? config.Constant.COLOR_DRAWER_DARK : 'transparent'
            labelText = config.I18N.t('bottom_Tab_Courses')
            iconOpacity = focused ? 1 : 0.8
            labelOpacity = focused ? 1 : 0.6
            labelWeight = focused ? '900' : 'normal'
          } else if (route.name === 'saved') {
            iconName = focused ? image.BookmarkFill : image.Save
            iconColor = focused
              ? config.Constant.COLOR_DRAWER_DARK : config.Constant.COLOR_DARK_GREY
            labelColor = focused
              ? config.Constant.COLOR_DRAWER_DARK : 'transparent'
            labelText = config.I18N.t('bottom_Tab_Save')
            iconOpacity = focused ? 1 : 0.8
            labelOpacity = focused ? 1 : 0.6
            labelWeight = focused ? '900' : 'normal'
          } else if (route.name === 'chat') {
            iconName = image.Chat
            iconColor = focused
              ? config.Constant.COLOR_DRAWER_DARK : config.Constant.COLOR_DARK_GREY
            labelColor = focused
              ? config.Constant.COLOR_DRAWER_DARK : 'transparent'
            labelText = config.I18N.t('bottom_Tab_Chat')
            iconOpacity = focused ? 1 : 0.8
            labelOpacity = focused ? 1 : 0.6
            labelWeight = focused ? '900' : 'normal'
          } else if (route.name === 'account') {
            iconName = focused ? image.ProfileFill : image.Profile
            iconColor = focused
              ? config.Constant.COLOR_DRAWER_DARK : config.Constant.COLOR_DARK_GREY
            labelColor = focused
              ? config.Constant.COLOR_DRAWER_DARK : 'transparent'
            labelText = config.I18N.t('bottom_Tab_Account')
            iconOpacity = focused ? 1 : 0.8
            labelOpacity = focused ? 1 : 0.6
            labelWeight = focused ? '900' : 'normal'
          }

          // You can return any component that you like here!
          return <View style={styles.semiTabView}>
            <Text style={[styles.tabLine, { backgroundColor: labelColor }]} > </Text>
            <Image source={iconName} style={[styles.iconImg, { tintColor: iconColor, opacity: iconOpacity }]} resizeMode='contain' />
            <Text style={[styles.labelStyle, {
              fontWeight: labelOpacity == 1 && Platform.OS == 'android' ? labelWeight : '500',
              fontFamily: labelOpacity == 1 && Platform.OS == 'android' ? config.Constant.Font_Semi_Bold
                : config.Constant.Font_Medium,
              opacity: labelOpacity
            }]}>{labelText}</Text>
          </View>
        },
      })}
      tabBarOptions={{
        style: styles.tabView,
        labelStyle: styles.labelStyle,
        activeTintColor: config.Constant.COLOR_DARK_GREY,
      }}>
      <BottomTab.Screen name="home" options={{ tabBarLabel: '', labelStyle: { color: "blue" } }}
        component={HomeScreen} />
      <BottomTab.Screen name="courses" options={{ tabBarLabel: '', }} component={CoursesScreen} />
      <BottomTab.Screen name="saved" options={{ tabBarLabel: '' }} component={SavedScreen}
        // listeners={({ navigation, route }) => ({
        //   tabPress: e => {
        //     DeviceEventEmitter.emit('UpdateSaveValue')
        //   },
        // })}
         />
      <BottomTab.Screen name="chat" options={{ tabBarLabel: '' }} component={ChatScreen} />
      <BottomTab.Screen name="account" options={{ tabBarLabel: '' }} component={MyAccount} />
    </BottomTab.Navigator>
  );
}

export default MainNavigator

const styles = StyleSheet.create({
  tabView: {
    height: Platform.OS == 'android' ? scale(52.5) : scale(50),
    paddingBottom: scale(6),
  },
  tabLine: {
    width: scale(70),
    height: scale(2),
    marginBottom: scale(10),
  },
  semiTabView: {
    backgroundColor: "white",
    flex: 1
    // marginBottom: Platform.OS == 'android' ?
    //   scale(-14.2) : scale(-12.)
  },
  iconImg: {
    width: scale(18),
    height: scale(18),
    alignSelf: "center"
  },
  labelStyle: {
    fontSize: scale(10),
    margin: 0,
    padding: 0,
    letterSpacing: 0.03,
    textAlign: "center",
    color: config.Constant.COLOR_DARK_GREY,
  }
});