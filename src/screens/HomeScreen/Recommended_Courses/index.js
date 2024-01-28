import React, { useState } from 'react';
import { View, StyleSheet, Image, Pressable, Text, FlatList, Platform } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../../../config';
import images from '../../../config/Images'
import styles from './style'
import {
    msToHMS, Coverter
} from '../../../Util/Utilities';

const Recommended_Courses = ({ props, item, index, width, marginHorizontal, marginRight, mainViewStyle, save,
    ClickOnSave }) => {

    const [bookmarkClick, setBookmarkClick] = item.isSaved != undefined ?
        useState(item.isSaved) : item.is_saved != undefined ?
            useState(item.is_saved) : useState(false)

    return (
        <View style={[styles.mainView, mainViewStyle, {
            width: width, marginHorizontal: marginHorizontal,
            marginRight: marginRight
        }]}>
            <View style={styles.semiView}>
                <Image resizeMode={'cover'} source={item.image != '' ? { uri: item.image }
                    : null} style={styles.mainIMg} />

                <View style={styles.watchView}>
                    {/* <Image style={styles.eyeImg}
                        source={images.Eye} resizeMode={'cover'} /> */}
                    <Text style={styles.viewText}>{item?.view_count != undefined ?
                        Coverter(item?.view_count, 1)
                        : item?.total_views != undefined ?
                            Coverter(item?.total_views, 1)
                            : item?.viewCount != undefined ?
                                Coverter(item?.viewCount, 1) : " "} views</Text>
                </View>

                {item?.is_bestseller == true ? <View style={styles.bestSellerTagViewStyle}>
                    <Text style={styles.bestSellerTagTextStyle}>{config.I18N.t('Bestseller')}</Text>
                </View> : null}

            </View>
            <View style={{ paddingHorizontal: scale(10) }}>
                <Text numberOfLines={1} style={styles.itemTitle}>{item.title}</Text>
                <View style={styles.DescriptionView} >
                    <Image style={styles.clockImg}
                        source={images.Time} resizeMode={'cover'} />
                    <Text style={styles.timeText}>{msToHMS(item.duration) ? msToHMS(item.duration) : msToHMS(item.duration)}</Text>
                    {item.course_type != "eae" && !!item?.authorName ?
                        <View style={styles.dotStyle} /> : null}
                    {item?.course_type == "eae" ? null :
                        <Text style={styles.itemAuther}>{item.authorName}</Text>}
                </View>
            </View>

            <View style={styles.priceView}>
                {item?.course_type == "eae" ?
                    <Text style={styles.itemAuther}>{item.authorName}</Text> :
                    <Text style={styles.priceText}>₹ {item.basePrice}</Text>
                }
                <Pressable onPress={() => [setBookmarkClick(!bookmarkClick),
                ClickOnSave(item, bookmarkClick)]}
                    style={{ padding: scale(5) }}>
                    {bookmarkClick ? <Image style={styles.saveImg}
                        source={images.BookmarkFill} resizeMode={'contain'} /> :
                        <Image style={styles.saveImg}
                            source={images.bookmarkPng} resizeMode={'contain'} />}
                </Pressable>
            </View>
        </View >
    )
    // }
};

export default Recommended_Courses