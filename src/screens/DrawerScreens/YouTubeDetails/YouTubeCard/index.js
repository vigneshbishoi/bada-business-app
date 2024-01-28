import React, { useState } from 'react';
import { View, StyleSheet, Image, Pressable, Text, FlatList, Platform } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../../../../config';
import images from '../../../../config/Images'
import styles from './style'

const YouTubeCard = ({ props, item, Arr, index , onPress}) => {

    var ms = item.duration,
        min = Math.floor((ms / 1000 / 60) << 0),
        sec = Math.floor((ms / 1000) % 60);

    return (
        <Pressable onPress={() => onPress(item, index)}
            style={[styles.mainFlatView, {
                marginBottom: index == Arr.length - 1 ?
                    scale(30) : scale(10)
            }]}>
            <Image style={styles.mianImgView}
                source={{
                    uri: item?.image != '' ?
                        item.image : null
                }}
                resizeMode={'cover'} />
            <View style={styles.mainFlatItemTextView}>
                <Text numberOfLines={2}
                    style={styles.cateFlatname}>{item.title}</Text>
                <View style={styles.clockMainView}>
                    <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: "center" }}>
                        <Image style={styles.clockImg}
                            source={images.Time} resizeMode={'cover'} />
                        <Text numberOfLines={2}
                            style={styles.timeText}>{min} mins</Text>
                    </View>
                    <Pressable onPress={() =>
                        Share.share({
                            url: item.shareShortUrl,
                            message: `Hey, I recommend you watching this interesting video: ${item.shareShortUrl}`
                        })}>
                        <Image style={styles.shareImg}
                            source={images.ShareIcon} resizeMode={'cover'} />
                    </Pressable>
                </View>
            </View>
        </Pressable>
    )
};

export default YouTubeCard