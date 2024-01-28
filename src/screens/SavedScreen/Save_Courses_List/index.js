import React, { useState } from 'react';
import { View, StyleSheet, Image, Pressable, Text, FlatList, Platform } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../../../config';
import images from '../../../config/Images'
import styles from './style'
import {
    msToHMS, Coverter
} from '../../../Util/Utilities';

const Save_Courses = ({ props, Arr, selectedList, ListHeaderComponent, marginTop, price, ItemBtn,
    marginBottom, hiddenAddToCart, onEndReached, onEndReachedThreshold, deleteViewShow, save,
    ClickOnSave, PressDelete }) => {

    const Item = ({ item, index }) => {

        const [deleteList, setDeleteList] = useState(null)
        const [bookmarkClick, setBookmarkClick] = item.item.isSaved != undefined ?
            useState(item.item.isSaved) : item.item.is_saved != undefined ?
                useState(item.item.is_saved) : useState(false)

        return (
            <View>
                <Pressable style={[styles.mainBtn, {
                    marginTop: item.index == 0 ? marginTop : scale(10),
                    marginBottom: Arr.length - 1 == item.index ? marginBottom : scale(0),
                }]}
                    onPress={() => [setDeleteList(null), ItemBtn(item.item, item.index)]}>
                    <View style={[styles.mainView, {
                        marginLeft: deleteList == item.index && deleteViewShow ?
                            scale(-85) : scale(15),
                        marginRight: deleteList == item.index && deleteViewShow
                            ? scale(-1) : scale(15),
                        borderWidth: 0,
                        borderRadius: 0
                    }]}>
                        <View style={styles.semiView}>
                            <Image source={item.item.image != '' ? { uri: item.item.image } : null}
                                style={styles.mainIMg} resizeMode={'cover'} />
                            <View style={styles.watchView}>
                                {/* <Image style={styles.eyeImg}
                                source={images.Eye} resizeMode={'cover'} /> */}
                                <Text style={styles.viewText}>{item?.item?.view_count != undefined ?
                                    Coverter(item?.item?.view_count, 1) :
                                    item?.item?.total_views != undefined ?
                                        Coverter(item?.item?.total_views, 1)
                                        : item?.item?.viewCount != undefined ?
                                            Coverter(item?.item?.viewCount, 1) : " "} views</Text>
                            </View>
                        </View>
                        <View style={styles.TextView}>
                            <View>
                                <View style={styles.MoreTextView}>
                                    <Text numberOfLines={2} style={styles.itemTitle}>
                                        {item.item.title}</Text>
                                </View>
                                <View style={styles.DescriptionView} >
                                    {item.item?.duration != "" ? <Image style={styles.clockImg}
                                        source={images.Time} resizeMode={'cover'} /> : null}
                                    {item.item?.duration != '' ? <Text style={styles.timeText}>
                                        {msToHMS(item.item.duration) ?
                                            msToHMS(item.item.duration) : msToHMS(item.item.duration)}</Text>
                                        : null}
                                    {item.item?.authorName && <View style={styles.dotStyle} />}
                                    {item.item?.authorName && <Text numberOfLines={1} style={styles.itemAuther}>
                                        {item.item.authorName}</Text>}
                                </View>
                            </View>
                            {item?.item?.is_bestseller == true ? <View style={styles.bestSellerTagViewStyle}>
                                <Text style={styles.bestSellerTagTextStyle}>{config.I18N.t('Bestseller')}</Text>
                            </View> : null}
                            <View style={styles.priceView}>
                                {/* <Text style={styles.priceText}> {item.item?.basePrice != undefined ?
                                `₹ ${item.item?.basePrice}` : price == '' ? ' ' : item.item?.course_type == 'eae' ? '' : '₹'}</Text> */}
                                {deleteList == item.index || hiddenAddToCart ? null :
                                    <Pressable>
                                        <Text style={styles.AddToCartStyle}>
                                            ADD TO CART
                                    </Text>
                                    </Pressable>}
                                {hiddenAddToCart ?
                                    <Pressable onPress={() =>
                                        [setBookmarkClick(!bookmarkClick),
                                        ClickOnSave(item.item, bookmarkClick)]}
                                        style={{ padding: scale(5) }}>
                                        {bookmarkClick ? <Image style={styles.saveImg}
                                            source={images.BookmarkFill} resizeMode={'contain'} /> :
                                            <Image style={styles.saveImg}
                                                source={images.bookmarkPng} resizeMode={'contain'} />}

                                    </Pressable> : null}
                                {deleteList == item.index && deleteViewShow ? null :
                                    <Pressable style={styles.MoreBtn}
                                        onPress={() => [setDeleteList(item.index),
                                        selectedList(item.index)]}>
                                        <Image source={images.More} resizeMode={'contain'}
                                            style={styles.MoreView} />
                                    </Pressable>}
                            </View>
                        </View>
                    </View>

                    {deleteList == item.index && deleteViewShow ?
                        <Pressable onPress={() => [setDeleteList(null), PressDelete(item.item)]}
                            style={styles.deleteView}>
                            <Image style={styles.binImg}
                                source={images.Bin} resizeMode={'contain'} />
                        </Pressable> : null}

                </Pressable>
                <View style={[styles.sepratorLineStyle, {
                    marginTop: Arr.length - 1 == item.index ? -marginBottom + scale(10) : scale(10),
                    marginBottom: Arr.length - 1 == item.index ? scale(20) : scale(10)
                }]} />
            </View>
        )
    }

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={Arr}
            ListHeaderComponent={ListHeaderComponent}
            renderItem={(item, index) => <Item item={item} index={index} />}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={onEndReached}
            onEndReachedThreshold={onEndReachedThreshold}
        />
    )
};

export default Save_Courses