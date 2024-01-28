import React, { useState } from 'react';
import { View, StyleSheet, Image, Pressable, Text, FlatList, Platform } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../config';
import images from '../config/Images'
import {
    msToHMS, Coverter
} from '../Util/Utilities';
import { YellowStarSvg } from '../assets/svg/index'

const Course_List = ({ Arr, props, Falt_style, ListHeaderComponent, horizontal, width,
    marginHorizontal, marginRight, HandlePress, price, onEndReached, colorAuthor, hidesepratorLine,
    onEndReachedThreshold, ListEmptyComponent, save, ClickOnSave }) => {

    const Item = ({ item }) => {

        const [bookmarkClick, setBookmarkClick] = item.item.isSaved != undefined ?
            useState(item.item.isSaved) : item.item.is_saved != undefined ?
                useState(item.item.is_saved) : useState(false)
        return (
            <Pressable style={{
                backgroundColor: item?.item?.isUnlocked == true || item.item?.progress != undefined ?
                    config.Constant.COLOR_LIGHT_BLACK_DRAWER :
                    config.Constant.COLOR_WHITE
            }}
                onPress={() => HandlePress(item.item, item.index)}>
                <View style={[styles.mainView, {
                    marginRight: marginRight,
                    borderColor: config.Constant.COLOR_BORDER_HOME_LIST,
                    marginBottom: Arr.length - 1 == item.index ? scale(20) : scale(0),
                    width: width,
                    paddingHorizontal: marginHorizontal,
                    // marginHorizontal: marginHorizontal,
                    borderWidth: 0,
                    borderRadius: 0,
                    backgroundColor: item?.item?.isUnlocked == true || item.item?.progress != undefined ?
                        config.Constant.COLOR_LIGHT_BLACK_DRAWER :
                        config.Constant.COLOR_WHITE
                }]}>
                    <View style={styles.semiView}>
                        <Image source={item.item.image != '' ? { uri: item.item.image } : null}
                            style={styles.mainIMg} resizeMode={'cover'} />
                        <View style={styles.watchView}>
                            <Text style={styles.viewText}>{item?.item?.view_count != undefined ?
                                Coverter(item?.item?.view_count, 1)
                                : item?.item?.total_views != undefined ?
                                    Coverter(item?.item?.total_views, 1)
                                    : item?.item?.viewCount != undefined ?
                                        Coverter(item?.item?.viewCount, 1) : " "} views</Text>
                        </View>
                        {item.item?.progress != undefined ?
                            <View style={styles.progressBarMainView}>
                                <View style={[styles.progressView,
                                { width: `${item.item?.progress}%` }]} />
                            </View> : null}
                    </View>
                    <View style={styles.TextView}>
                        <View>
                            <Text numberOfLines={2} style={styles.itemTitle}>
                                {item.item.title != '' ? item.item.title : ' '}</Text>
                            <View style={styles.DescriptionView} >
                                <Image style={styles.clockImg}
                                    source={images.Time} resizeMode={'cover'} />
                                <Text style={styles.timeText}>{msToHMS(item.item.duration) ?
                                    msToHMS(item.item.duration) : msToHMS(item.item.duration)}</Text>
                                <View style={[styles.DescriptionView, { alignItems: "center", paddingTop: scale(3.3) }]}>
                                    <View style={[styles.dotStyle, { marginTop: 0.8 }]} />
                                    <YellowStarSvg />
                                </View>
                                <Text style={styles.ratingText}>
                                    {item?.item?.rating != undefined ? item?.item?.rating : 0}/5</Text>
                                {/* {item.item.authorName && <View style={styles.dotStyle} />} */}
                            </View>
                        </View>
                        {item?.item?.is_bestseller == true ? <View style={styles.bestSellerTagViewStyle}>
                            <Text style={styles.bestSellerTagTextStyle}>{config.I18N.t('Bestseller')}</Text>
                        </View> : null}
                        <View style={styles.priceView}>
                            {item.item?.course_type == 'eae' ?
                                <Text numberOfLines={2} style={[styles.itemAuther, {
                                    // color:
                                    //     colorAuthor
                                    alignSelf: 'flex-end'
                                }]}>
                                    {item.item.authorName}</Text> :
                                <Text style={[styles.priceText, { alignSelf: 'flex-end' }]}>
                                    {item.item?.basePrice != undefined ?
                                        `₹ ${item.item?.basePrice}` : price == '' ? ' ' : item.item?.course_type == 'eae' ? '' : '₹'}
                                </Text>}

                            <Pressable onPress={() =>
                                [setBookmarkClick(!bookmarkClick), ClickOnSave(item.item, bookmarkClick)]}
                                style={{ padding: scale(6), paddingRight: 0 }}>
                                {bookmarkClick ? <Image style={styles.saveImg}
                                    source={images.BookmarkFill} resizeMode={'contain'} /> :
                                    <Image style={styles.saveImg}
                                        source={images.bookmarkPng} resizeMode={'contain'} />}

                            </Pressable>
                        </View>
                    </View>
                </View >
                {!!hidesepratorLine ? null :
                    <View style={[styles.sepratorLineStyle, {
                        marginTop: Arr.length - 1 == item.index ? scale(-10) : scale(10),
                        marginBottom: Arr.length - 1 == item.index ? scale(20) : scale(0)
                    }]} />}
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
        height: scale(79),
        borderRadius: scale(4),
        backgroundColor: config.Constant.COLOR_WHITE,
        marginTop: scale(9.5),
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
    saveImg: {
        width: scale(10),
        height: scale(14),
    },
    eyeImg: {
        width: scale(15),
        height: scale(10),
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
    dotStyle: {
        width: scale(5),
        height: scale(5),
        borderRadius: scale(5),
        marginHorizontal: scale(4.2),
        backgroundColor: config.Constant.COLOR_GREY,
        opacity: 0.8,
        backgroundColor: "#949397",
        borderRadius: 4,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#dfdfe0",
        marginTop: scale(6)
    },
    itemAuther: {
        fontSize: scale(10),
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.33,
        fontFamily: config.Constant.Font_Regular,
        marginLeft: scale(4),
        width: '60%',
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0.27,
        flexShrink: 1,
        opacity: 0.6
    },
    mainIMg: {
        flex: 1,
        overflow: 'hidden'
        // borderTopLeftRadius: scale(5),
        // borderBottomLeftRadius: scale(5)
    },
    viewText: {
        fontSize: scale(10),
        color: config.Constant.COLOR_WHITE,
        letterSpacing: 0.03,
        fontFamily: config.Constant.Font_Medium,
        // marginLeft: scale(4),
        // marginTop: scale(3.5)
    },
    watchView: {
        position: "absolute",
        flexDirection: "row",
        borderColor: "rgba(41, 40, 48, 0.5)",
        bottom: 0,
        width: scale(65), height: scale(20),
        justifyContent: 'center',
        borderTopRightRadius: scale(4),
        backgroundColor: "rgba(41, 40, 48, 0.5)",
        borderStyle: "solid",
        // borderWidth: 1,
        // borderBottomLeftRadius: scale(4),
        alignItems: "center"
    },
    priceView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    priceText: {
        fontSize: scale(12),
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.33,
        fontFamily: config.Constant.Font_Semi_Bold,
        fontWeight: "600",
        fontStyle: "normal",
    },
    TextView: {
        paddingHorizontal: scale(10),
        flex: 1,
        borderTopRightRadius: scale(5),
        borderBottomRightRadius: scale(5),
        justifyContent: "space-between"
    },
    bestSellerTagViewStyle: {
        width: scale(70),
        height: scale(16),
        borderRadius: scale(4),
        backgroundColor: "rgba(84,70,255,0.08)",
        alignItems: 'center',
        justifyContent: 'center'
    },
    bestSellerTagTextStyle: {
        fontFamily: config.Constant.Font_Medium,
        fontSize: scale(10),
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0.5,
        color: "#5446ff"
    },
    sepratorLineStyle: {
        marginHorizontal: scale(15),
        marginTop: scale(10),
        height: 1,
        opacity: 0.1,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#292830"
    },
    ratingText: {
        fontSize: scale(10),
        color: config.Constant.COLOR_DARK_GREY,
        fontFamily: config.Constant.Font_Regular,
        marginLeft: scale(2.6),
        fontWeight: "normal",
        opacity: 0.6,
        fontStyle: "normal",
        letterSpacing: 0.27,
        marginTop: scale(0.5)
    },
    progressBarMainView: {
        width: '100%',
        height: scale(3),
        flexDirection: 'row',
        backgroundColor: "rgba(255,255,255, 0.85)"
    },
    progressView: {
        height: scale(30),
        backgroundColor: config.Constant.COLOR_RED
    }
});

export default Course_List

