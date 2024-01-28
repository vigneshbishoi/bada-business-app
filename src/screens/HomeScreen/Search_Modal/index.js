import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Pressable, Text, Modal, FlatList, Platform, StatusBar, SafeAreaView, TextInput, Dimensions } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../../../config';
import images from '../../../config/Images'
import styles from './style'
import LinearGradient from 'react-native-linear-gradient';
import voice from '@react-native-voice/voice'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Speaker_Modal, } from '../../../component/index'
import {
    setCategoriesEae,
    setKeywordSearch
} from '../../../Redux/actions/userData'
import modules from '../../../modules'

const Search_Modal = ({ Arr, props, Back, FullClose, PSCTrue, checkMicColor, PressMic, searchText, isMyCourse = false }) => {

    const [search, setSearch] = useState('')
    const [categorieIndex, setCategorieIndex] = useState('')
    const [keywordIndex, setKeywordIndex] = useState(null)
    const [categorieInsideArr, setCategorieInsideArr] = useState(false)
    const [categorieInsideIndex, setCategorieInsideIndex] = useState(null)
    const [EAEBtn, setEAEBtn] = useState(true)
    const [micModal, setMicModal] = useState(false)

    useEffect(() => {
        PSCTrue != undefined ?
            setEAEBtn(PSCTrue) : null

    }, [])

    const SearchOnKeywords = async (key, item, data, subdata, subtitle, subindex, id, subId) => {
        setTimeout(() => {
            props.navigation.navigate('SalesScreen', {
                SearchKeyResponse: item,
                DataTitle: data,
                SubData: subdata,
                subtitle: subtitle,
                subindex: subindex,
                searchModaid: id,
                searchSubId: subId,
                EAEBtn: EAEBtn,
                isMyCourse: isMyCourse
            })
            FullClose(true),
                voice.destroy().then(voice.removeAllListeners);
        }, 300);
    }

    const Item = ({ item, index }) => {
        return (
            <View>
                <Pressable onPress={() => [setCategorieIndex(index),
                setCategorieInsideArr(categorieIndex == index ? !categorieInsideArr : true),
                setCategorieInsideIndex(null)]}>
                    <View style={styles.flatItem}>
                        <Image source={item.compress_image != '' ? { uri: item.compress_image } : images.RocketIcon}
                            style={[styles.flatMainImg, {
                                width: item.img == images.newtons_cradle ?
                                    scale(22.5) : scale(20), height: item.img == images.newtons_cradle ?
                                        scale(16) : scale(20),
                            }]}
                            resizeMode={'contain'}
                            onError={() => images.RocketIcon} />
                        <Text style={[styles.flatText, {
                            marginHorizontal: item.img ==
                                images.newtons_cradle ? scale(7) : scale(10)
                        }]}  >{item.title} {`(${item?.count})`}</Text>
                        {/* <Text style={styles.topicText} >0 Topics</Text> */}
                        {
                            categorieInsideArr && categorieIndex == index ?
                                <Image source={images.up_arrow}
                                    style={styles.flatDownArrow} resizeMode={'cover'} />
                                : <Image source={images.down_bold_arrow}
                                    style={styles.flatDownArrow} resizeMode={'cover'} />
                        }

                    </View >
                </Pressable>
                {
                    categorieInsideArr && categorieIndex == index ?
                        <View style={styles.flatInsideArr}>
                            {item.subCategory.map((itemSub, key) => {
                                return (
                                    <Pressable key={key} onPress={() => [setCategorieInsideIndex(key),
                                    setSearch(item), setKeywordIndex(null),
                                    SearchOnKeywords(key, undefined, item.title, item.subCategory,
                                        itemSub.title, key, item.id, itemSub.id)]}>
                                        <View style={[styles.keywordItem,
                                        {
                                            backgroundColor: categorieInsideIndex == key ?
                                                config.Constant.COLOR_HOME_CLICABLE : config.Constant.COLOR_INPUT
                                        }]}>
                                            <Text style={styles.keywordItemText}>{itemSub.title}</Text>
                                        </View>
                                    </Pressable>
                                )
                            })}
                        </View> : null
                }
            </View>
        )
    }

    return (
        <Modal transparent={false} visible={true} statusBarTranslucent={true}>
            <SafeAreaView style={styles.Contact}>
                <View style={styles.Contact}>
                    <FlatList
                        keyboardShouldPersistTaps={'handled'}
                        showsVerticalScrollIndicator={false}
                        data={EAEBtn ? props?.homeData?.categoriesEae?.data
                            : props?.homeData?.categoriesPsc?.data}
                        ListHeaderComponent={(
                            <View>
                                <LinearGradient
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 0.6, y: 0 }}
                                    style={styles.LinearSty}
                                    colors={[config.Constant.COLOR_LINEAR__LIGHT, config.Constant.COLOR_LINEAR__DARK,]} />
                                <View style={styles.mainView}>
                                    <View style={styles.semiView}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Pressable onPress={Back} style={styles.backImgBtn}>
                                                <Image style={styles.backImg}
                                                    source={images.BackIcon} resizeMode={'cover'} />
                                            </Pressable>
                                            <TextInput
                                                style={[styles.textInputSty,
                                                {
                                                    opacity: search.length == 0 ? 0.5 :
                                                        searchText == '' ? 0.5 : 1
                                                }]}
                                                onChangeText={(text) => setSearch(text)}
                                                value={searchText != '' ? searchText
                                                    : search}
                                                autoFocus={true}
                                                onEndEditing={() => search ?
                                                    SearchOnKeywords('', search, '', [], '', '', '', "")
                                                    : null}
                                                placeholder={config.I18N.t('Search_Call_Search_for_courses')}
                                                placeholderTextColor={config.Constant.COLOR_DARK_GREY}
                                                keyboardType='default'
                                            />
                                            {search.length != '' ?
                                                <Pressable onPress={() => setSearch('')} style={styles.recodeBtn}>
                                                    <Image style={styles.closeImg}
                                                        source={images.CloseIcon} resizeMode={'cover'} />
                                                </Pressable> :
                                                <Pressable onPress={() => setMicModal(true)} style={styles.recodeBtn}>
                                                    <Image style={[styles.recodeImg, {
                                                        tintColor: checkMicColor ? config.Constant.COLOR_RED
                                                            : config.Constant.COLOR_DRAWER_LIGHT
                                                    }]}
                                                        source={images.Recording} resizeMode={'cover'} />
                                                </Pressable>}
                                        </View>
                                        <View style={[styles.borderView, {
                                            width: config.Constant.SCREEN_WIDTH - scale(30),
                                            marginTop: scale(15)
                                        }]} />
                                    </View>

                                    <Text style={styles.keywordText}>{config.I18N.t('Home_Modal_Keywords')}</Text>

                                    <View style={styles.kewordView}>
                                        {props.homeData?.keyword?.data?.keywords?.split(',').map((item, key) => {
                                            return (
                                                <Pressable key={key} onPress={() => [setKeywordIndex(key),
                                                setSearch(item), setCategorieInsideIndex(null),
                                                SearchOnKeywords(key, item, '', [], '', '', '', ""),
                                                ]}>
                                                    <View style={[styles.keywordItem,
                                                    {
                                                        backgroundColor: keywordIndex == key ?
                                                            config.Constant.COLOR_HOME_CLICABLE : config.Constant.COLOR_INPUT
                                                    }]}>
                                                        <Text style={styles.keywordItemText}>{item}</Text>
                                                    </View>
                                                </Pressable>
                                            )
                                        })}
                                    </View>

                                    <Text style={styles.categoriesText} >{config.I18N.t('Home_Categories')}</Text>

                                    <View style={styles.categoriesView}>
                                        <View style={styles.categoriesSemiView}>
                                            <Text style={styles.filterText}>{config.I18N.t('Home_Filter_By')}</Text>
                                            <View style={styles.EAEView}>
                                                <Pressable onPress={() => setEAEBtn(true)}
                                                    style={[styles.EAEBtn, {
                                                        backgroundColor: EAEBtn ?
                                                            config.Constant.COLOR_PRIMARY : config.Constant.COLOR_INPUT
                                                    }]}>
                                                    <Text style={[styles.EAEText, {
                                                        color: EAEBtn ? config.Constant.COLOR_WHITE :
                                                            config.Constant.COLOR_DARK_GREY
                                                    }]}>{config.I18N.t('Home_EAE')}</Text>
                                                </Pressable>
                                                <Pressable onPress={() => setEAEBtn(false)}
                                                    style={[styles.EAEBtn, {
                                                        backgroundColor: !EAEBtn ?
                                                            config.Constant.COLOR_PRIMARY : config.Constant.COLOR_INPUT
                                                    }]}>
                                                    <Text style={[styles.EAEText, {
                                                        color: !EAEBtn ? config.Constant.COLOR_WHITE :
                                                            config.Constant.COLOR_DARK_GREY
                                                    }]}>{config.I18N.t('Home_PSC')}</Text>
                                                </Pressable>
                                            </View>
                                        </View>
                                        <View style={{ margin: scale(15) }}>
                                            <Text style={styles.staticTextBold}>
                                                Everything About Entrepreneurship{" "}
                                                <Text style={[styles.staticText, {
                                                    fontWeight: Platform.OS == 'android' ?
                                                        '200' : '400'
                                                }]}>
                                                    contain more that 15+ courses for
                                                    you to enhance your entrepreneurship skills. The course would range from $45,000 - $70,000
                                                </Text>
                                            </Text>
                                        </View>
                                        <View style={[styles.borderView, {
                                            width: config.Constant.SCREEN_WIDTH - scale(60),
                                            marginBottom: scale(15)
                                        }]} />
                                    </View>
                                </View>
                            </View>
                        )}
                        ListFooterComponent={() =>
                            <View style={styles.flatBottomView}>
                                <Text style={styles.flatBottomLine}> </Text>
                            </View>}
                        renderItem={(item, index) => Item(item, index)}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </SafeAreaView>
            {micModal ? <Speaker_Modal Close={() => setMicModal(false)} /> : null}
        </Modal>
    )
};

//---- Connect to props functions and values -----//
function mapStateToProps({ userData, homeData }) {
    return { userData, homeData };
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({

    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search_Modal)

