import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  Text,
  Modal,
  FlatList,
  Platform,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import config from '../../../config';
import images from '../../../config/Images';
import styles from './style';
import {BlurView} from '@react-native-community/blur';

const MenuProfileDisplayModel = ({
  props,
  popupTitle,
  Close,
  Arr,
  onSelect,
  subcateIndex,
}) => {
  const [selectItem, setSelectItem] = useState(subcateIndex);

  // useEffect(() => {
  //     return(selectItem)
  // }, [selectItem])

  const Item = ({item, index}) => {
    return (
      <Pressable onPress={() => [setSelectItem(index), onSelect(item, index)]}>
        <View style={styles.itemMainView}>
          <Text
            style={[
              styles.EAEText,
              {
                color:
                  selectItem == index
                    ? config.Constant.COLOR_RED
                    : config.Constant.COLOR_DARK_GREY,
              },
            ]}>
            {item.title}
          </Text>
        </View>
        <Text style={[styles.line, {marginHorizontal: scale(15)}]} />
      </Pressable>
    );
  };

  return (
    <Modal transparent={true} visible={true} statusBarTranslucent={true}>
      <View style={styles.Coonstant}>
        <BlurView
          style={styles.BlurSty}
          blurType="dark"
          blurAmount={10}
          blurRadius={5}
          reducedTransparencyFallbackColor="white"
        />
        <View style={styles.mainView}>
          <Text style={styles.mainTitle}>{popupTitle}</Text>
          <Text style={styles.line} />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={Arr}
            renderItem={(item, index) => Item(item, index)}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.CloseMainView}>
          <Pressable onPress={Close} style={styles.CloseBtn}>
            <View style={styles.CloseSemiView}>
              <Image
                source={images.CloseIcon}
                style={styles.CloseImg}
                resizeMode={'cover'}
              />
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default MenuProfileDisplayModel;
