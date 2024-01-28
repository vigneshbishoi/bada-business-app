import React from 'react';
import { View, StyleSheet, Image, Pressable, Text, ScrollView, Platform } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../../../config';
import images from '../../../config/Images'
import styles from './style'

const Categories = ({ Arr, props, onItemPress }) => {

    const newStory = (ArrData) => {
        var imagearr2 = [...ArrData]
        var half_length = Math.ceil(imagearr2.length / 2);
        var leftSide = imagearr2.splice(0, half_length);
        let fail = false
        return leftSide.map((data, key) => {
            return (
                <View key={key}>
                    <Pressable onPress={() => onItemPress(data)}>
                        <View style={[styles.mainView, {
                            marginRight: leftSide.length - 1 == key ? scale(30) : scale(0)
                        }]}>
                            <View style={styles.semiview}>
                                <Image source={data.compress_image != '' ?
                                    { uri: data.compress_image } : images.RocketIcon}
                                    style={styles.imgsty} resizeMode={'contain'}
                                    onError={() => images.RocketIcon} />
                            </View>
                            <Text numberOfLines={2} style={styles.itemTitle}>{data.title}</Text>
                        </View>
                    </Pressable>
                    {imagearr2[key] &&
                        <Pressable onPress={() => onItemPress(imagearr2[key], imagearr2[key])}>
                            <View style={styles.mainView}>
                                <View style={styles.semiview}>
                                    <Image source={imagearr2[key].compress_image != '' ?
                                        { uri: imagearr2[key].compress_image } : fail ? images.RocketIcon
                                            : images.RocketIcon}
                                        style={styles.imgsty} resizeMode={'contain'}
                                        onError={() => fail = true} />
                                </View>
                                <Text numberOfLines={2} style={styles.itemTitle} >{imagearr2[key].title}</Text>
                            </View>
                        </Pressable>
                    }
                </View>
            )
        })
    }

    return (
        <ScrollView
            style={{ paddingLeft: scale(10), }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {newStory(Arr)}

        </ScrollView>
    )
};


export default Categories
