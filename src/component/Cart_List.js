import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import config from '../config';
import images from '../config/Images';
import {msToHMS, intToString} from '../Util/Utilities';
import {SwipeListView} from 'react-native-swipe-list-view';
import { Bookmark, DeleteIconSvg } from '../assets/svg';

const Cart_List = ({
  Arr,
  props,
  Falt_style,
  ListHeaderComponent,
  horizontal,
  width,
  marginHorizontal,
  marginRight,
  onPress,
  colorAuthor,
  deleteCartId=()=>{}
}) => {
  const [bookmarkClick, setBookmarkClick] = useState('');
  const [RowRef, setRowRef] = useState(null);
  var rowRefs = [];

  const onRowLayout = (key, rowMap) => {
    debugger;
    const rowRef = rowMap[key];
    setRowRef(rowRef);
  };

  const Item = ({item, index}, rowMap) => {
    debugger;
    return (
      <Pressable onLayout={onRowLayout(0, rowMap)} onPress={onPress}>
        <View
          style={[
            styles.mainView,
            {
              marginRight: marginRight,
              borderColor: config.Constant.COLOR_BORDER_HOME_LIST,
              marginBottom: Arr.length - 1 == index ? scale(20) : scale(0),
              width: width,
              marginHorizontal: marginHorizontal,
              //  marginHorizontal: marginHorizontal,
            },
          ]}>
          <View style={styles.semiView}>
            <Image
              source={!!item.image ? {uri: item.image} : null}
              style={styles.mainIMg}
              resizeMode={'cover'}
            />
            <View style={styles.watchView}>
              <Image
                style={styles.eyeImg}
                source={images.Eye}
                resizeMode={'cover'}
              />
              <Text style={styles.viewText}>
                {!!item.views ? intToString(item.views) : '0'}
              </Text>
            </View>
          </View>
          <View style={styles.TextView}>
            <View>
              <Text numberOfLines={1} style={styles.itemTitle}>
                {!!item.title ? item.title : '10 Points for Accounting'}
              </Text>
              <View style={styles.DescriptionView}>
                <Image
                  style={styles.clockImg}
                  source={images.Time}
                  resizeMode={'cover'}
                />
                <Text style={styles.timeText}>
                  {!!item.duration && msToHMS(item.duration)
                    ? msToHMS(item.duration)
                    : ''}
                </Text>
                <View style={styles.dotStyle} />
                <Text
                  numberOfLines={1}
                  style={[styles.itemAuther, {color: colorAuthor}]}>
                  {!!item.author_name ? item.author_name : ''}
                </Text>
              </View>
            </View>
            <View style={styles.priceView}>
              <Text style={styles.priceText}>₹ {item.basePrice}</Text>
              <Pressable
                onPress={() => setBookmarkClick(index)}
                style={{padding: scale(5)}}></Pressable>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              debugger;
              RowRef.manuallySwipeRow(-config.Constant.SCREEN_WIDTH * 0.35);
            }}>
            <Image
              source={require('../assets/images/moreCart.png')}
              resizeMode={'contain'}
              style={{
                width: 16,
                marginRight: 5,
                marginTop: 10,
                height: 16,
                tintColor: 'black',
              }}
            />
          </TouchableOpacity>
        </View>
      </Pressable>
    );
  };
  return (
    // <FlatList
    //   showsVerticalScrollIndicator={false}
    //   showsHorizontalScrollIndicator={false}
    //   data={Arr}
    //   horizontal={horizontal}
    //   style={Falt_style}
    //   ListHeaderComponent={ListHeaderComponent}
    //   renderItem={(item, index) => Item(item, index)}
    //   keyExtractor={(item, index) => index.toString()}
    // />
    <SwipeListView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={Arr}
      style={Falt_style}
      ListHeaderComponent={ListHeaderComponent}
      renderItem={(item, index) => Item(item, index)}
      renderHiddenItem={(data, rowMap) => (
        <View style={styles.rowBack}>
          <TouchableOpacity
           onPress={()=>{
            debugger
            deleteCartId(data.item.id)
          }}>
            <DeleteIconSvg />
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight:scale(35), marginLeft: scale(25)}}>
            <Bookmark />
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      rightOpenValue={-config.Constant.SCREEN_WIDTH * 0.35}
    />
  );
};

const styles = StyleSheet.create({
  mainView: {
    height: scale(100),
    borderRadius: scale(4),
    backgroundColor: config.Constant.COLOR_WHITE,
    marginTop: scale(10),
    flexDirection: 'row',
    // borderColor: config.Constant.COLOR_BORDER_HOME_LIST,
    // borderStyle: 'solid',
    // borderWidth: scale(0.5),
    // shadowColor: config.Constant.COLOR_SHADOW_HOME_LIST,
    // shadowOffset: {
    //     width: 0,
    //     height: 2,
    // },
    // shadowOpacity: 0.23,
    // shadowRadius: 2.62,
    // elevation: 4,
    borderColor: config.Constant.COLOR_BORDER_HOME_LIST,
    borderWidth: scale(1),
  },
  semiView: {
    width: scale(100),
    backgroundColor: 'silver',
    borderTopLeftRadius: scale(4),
    borderBottomLeftRadius: scale(4),
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: scale(12),
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.03,
    fontFamily: config.Constant.Font_Medium,
    fontWeight: '500',
    marginTop: scale(8),
  },
  DescriptionView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: scale(1),
  },
  clockImg: {
    width: scale(12),
    height: scale(12),
    marginTop: scale(-2),
  },
  saveImg: {
    width: scale(10),
    height: scale(14),
  },
  eyeImg: {
    width: scale(15),
    height: scale(10),
  },
  timeText: {
    fontSize: scale(12),
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Regular,
    marginLeft: scale(4),
    fontWeight: 'normal',
    opacity: 0.6,
  },
  dotStyle: {
    width: scale(5),
    height: scale(5),
    borderRadius: scale(5),
    marginLeft: scale(5),
    backgroundColor: config.Constant.COLOR_GREY,
    opacity: 0.8,
    backgroundColor: '#949397',
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#dfdfe0',
  },
  itemAuther: {
    fontSize: scale(12),
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.33,
    fontFamily: config.Constant.Font_Regular,
    marginLeft: scale(4),
    width: '60%',
    fontWeight: 'normal',
    opacity: 0.6,
    flexShrink: 1,
  },
  mainIMg: {
    flex: 1,
    borderTopLeftRadius: scale(5),
    borderBottomLeftRadius: scale(5),
  },
  viewText: {
    fontSize: scale(10),
    color: config.Constant.COLOR_WHITE,
    letterSpacing: 0.03,
    fontFamily: config.Constant.Font_Medium,
    marginLeft: scale(4),
    marginTop: scale(4),
    marginBottom: 5,
  },
  watchView: {
    position: 'absolute',
    flexDirection: 'row',
    borderColor: 'rgba(41, 40, 48, 0.5)',
    bottom: 0,
    width: scale(50),
    height: scale(30),
    justifyContent: 'center',
    borderTopRightRadius: scale(4),
    backgroundColor: 'rgba(41, 40, 48, 0.5)',
    borderStyle: 'solid',
    // borderWidth: 1,
    borderBottomLeftRadius: scale(4),
    alignItems: 'center',
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  priceText: {
    fontSize: scale(14),
    color: config.Constant.COLOR_DARK_GREY,
    letterSpacing: 0.03,
    fontFamily: config.Constant.Font_Semi_Bold,
    marginBottom: scale(5),
  },
  TextView: {
    paddingHorizontal: scale(10),
    flex: 1,
    borderTopRightRadius: scale(5),
    borderBottomRightRadius: scale(5),
    justifyContent: 'space-between',
  },
  rowBack: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    height: scale(100),
    marginHorizontal: scale(15),
    backgroundColor: '#f4f4f4',
    marginTop: scale(10),
  },
});

export default Cart_List;
