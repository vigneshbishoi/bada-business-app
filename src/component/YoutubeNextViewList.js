import React, { useState } from 'react';
import { View, StyleSheet, Image, Pressable, Text, FlatList, Platform } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../config';
import images from '../config/Images'
import {
    msToHMS
} from '../Util/Utilities';

const Course_List = ({ Arr, props, Falt_style, ListHeaderComponent, horizontal, width,
    marginHorizontal, marginRight, HandlePress, onEndReached,
    onEndReachedThreshold, ListEmptyComponent, }) => {

    const Item = ({ item }) => {

        return (
            <Pressable onPress={() => HandlePress(item.item, item.index)}>
                <View style={[styles.mainView, {
                    marginRight: marginRight,
                    width: width,
                }]}>
                    <View style={styles.semiView}>
                        <Image source={item.item.image != '' ? { uri: item.item.image } : null}
                            style={styles.mainIMg} resizeMode={'cover'} />
                    </View>
                    <View style={styles.TextView}>
                        <Text numberOfLines={2} style={styles.itemTitle}>
                            {item.item.title != '' ? item.item.title : ' '}</Text>
                        <Text numberOfLines={2} style={[styles.timeText, { marginLeft: 0 }]}>
                            {item.item.type != '' ? item.item.type : ' '}</Text>
                        <View style={styles.DescriptionView} >
                            <Image style={styles.clockImg}
                                source={images.Time} resizeMode={'cover'} />
                            <Text style={styles.timeText}>{msToHMS(item.item.duration) ?
                                msToHMS(item.item.duration) : msToHMS(item.item.duration)}</Text>
                            {/* {item.item.authorName && <View style={styles.dotStyle} />} */}
                        </View>
                    </View>
                </View >
            </Pressable>
        )
    }

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={Arr}
            horizontal={horizontal}
            style={Falt_style}
            contentContainerStyle={{ flexGrow: 1 }}
            ListHeaderComponent={ListHeaderComponent}
            renderItem={(item, index) => <Item item={item} index={index} />}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={onEndReached}
            ListEmptyComponent={ListEmptyComponent}
            onEndReachedThreshold={onEndReachedThreshold}
        />
    )
};

const styles = StyleSheet.create({
    mainView: {
        height: scale(80),
        borderRadius: scale(4),
        marginTop: scale(10),
        flexDirection: 'row',
    },
    semiView: {
        width: scale(140),
        backgroundColor: "silver",
        justifyContent: "center",
        borderRadius: scale(4),
        overflow: 'hidden'
    },
    itemTitle: {
        fontSize: scale(10),
        color: config.Constant.COLOR_DARK_GREY,
        fontFamily: config.Constant.Font_Medium,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0.27,
    },
    DescriptionView: {
        flexDirection: "row",
        alignItems: 'flex-start',
        paddingTop: scale(1),
    },
    clockImg: {
        width: scale(10),
        height: scale(10),
        marginTop: scale(2)
    },
    timeText: {
        fontSize: scale(10),
        color: config.Constant.COLOR_DARK_GREY,
        fontFamily: config.Constant.Font_Regular,
        marginLeft: scale(4),
        fontWeight: "normal",
        opacity: 0.6,
        fontStyle: "normal",
        letterSpacing: 0.27,
    },
    mainIMg: {
        flex: 1,
        overflow: 'hidden'
        // borderTopLeftRadius: scale(5),
        // borderBottomLeftRadius: scale(5)
    },
    TextView: {
        paddingHorizontal: scale(10),
        borderTopRightRadius: scale(5),
        borderBottomRightRadius: scale(5),
        justifyContent: "space-between",
        flex: 1
    },
});

export default Course_List

