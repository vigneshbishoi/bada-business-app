import React from 'react';
import { View, StyleSheet, Image, Pressable, Text, FlatList, Platform, ImageBackground } from 'react-native';
import { scale } from 'react-native-size-matters';
import { PlayIcon } from '../assets/svg';
import config from '../config';
import images from '../config/Images'

const Course = ({ Arr, props, onEndReached }) => {

    const Item = ({ item, index }) => {
        var ms = item.duration,
            min = Math.floor((ms / 1000 / 60) << 0),
            sec = Math.floor((ms / 1000) % 60);

        return (
            <View style={styles.mainView}>
                <ImageBackground source={item.image != '' ? { uri: item.image } :
                    null} style={styles.semiView}>
                    <PlayIcon />
                </ImageBackground>
                <View>
                    <Text numberOfLines={1} style={styles.itemTitle}>{item.title != '' ? item.title : '10 Points for Accounting'}</Text>
                    <View style={styles.DescriptionView} >
                        {item.duration != '' ? <Image style={styles.clockImg}
                            source={images.Time} resizeMode={'cover'} /> : null}
                        {item.duration != '' ?
                            <Text style={styles.timeText}>{min} mins</Text> : null}
                        {item.authorName && <View style={styles.dotStyle} />}
                        <Text style={styles.itemAuther}>{item.authorName}</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            data={Arr}
            horizontal
            style={styles.flatSty}
            renderItem={(item, index) => Item(item, index)}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.5}
        />
    )
};

const styles = StyleSheet.create({
    flatSty: {
        marginLeft: scale(10),
        borderRadius: scale(5)
    },
    mainView: {
        height: scale(215),
        width: scale(260),
        borderRadius: scale(4),
        padding: scale(10),
        backgroundColor: config.Constant.COLOR_WHITE,
        marginRight: scale(10),
        marginLeft: scale(5),
        marginVertical: scale(5),
        borderColor: config.Constant.COLOR_BORDER_HOME_LIST,
        borderStyle: 'solid',
        borderWidth: scale(1),
        shadowColor: config.Constant.COLOR_SHADOW_HOME_LIST,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    semiView: {
        height: scale(140),
        backgroundColor: "silver",
        borderRadius: scale(4),
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    itemTitle: {
        fontSize: config.Constant.Font_Size_12,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.33,
        fontWeight: "500",
        fontFamily: config.Constant.Font_Medium,
        marginTop: scale(10),
    },
    DescriptionView: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        paddingTop: scale(1)
    },
    clockImg: {
        width: scale(12),
        height: scale(12),
        marginTop: scale(-2)
    },
    timeText: {
        fontSize: config.Constant.Font_Size_12,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.33,
        fontFamily: config.Constant.Font_Medium,
        marginLeft: scale(4),
        opacity: 0.6
    },
    dotStyle: {
        width: scale(5),
        height: scale(5),
        borderRadius: scale(5),
        marginLeft: scale(5),
        backgroundColor: config.Constant.COLOR_GREY
    },
    itemAuther: {
        fontSize: config.Constant.Font_Size_12,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.33,
        fontWeight: "normal",
        fontFamily: config.Constant.Font_Medium,
        marginLeft: scale(4),
        opacity: 0.6
    }
});

export default Course

