import React, { useState, useEffect } from 'react';
import { View, Image, Pressable, Text, Modal, FlatList, TextInput, SafeAreaView, } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../../../config';
import images from '../../../config/Images'
import styles from './style'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import modules from '../../../modules'
import { setArticleList, setArticleCategory } from '../../../Redux/actions'
import ArticaleDetails from './ArticleDetail/index'
import ArticleDetail from './ArticleDetail/index';
import All_Categories_Modal from '../../CoursesScreen/All_Categories_Modal/index'
import voice from '@react-native-voice/voice'

const SearchData = [
    {
        cate: "Popular"
    },
    {
        cate: "Recent"
    },
];

function Articles(props) {

    const [search, setSearch] = useState('')
    const [searchArrIndex, setsearchArrIndex] = useState(0)
    const [ArticlesList, setArticleList] = useState([])
    const [ArticlesListCount, setArticleListCount] = useState(20)
    const [ArticlesListClick, setArticleListClick] = useState('')
    const [ArticleDetailsModal, setArticleDetailsModal] = useState(false)
    const [showCategoryModal, setShowCategoryModal] = useState(false)
    const [checkMicColor, setCheckMicColor] = useState(false)

    useEffect(async () => {
        ArticlesCategory()
        setsearchArrIndex(0)
        Articles_List('popular', '', '')

        function onSpeechResults(e) {
            setSearch(e.value[0])
            Articles_List('popular', '', e.value[0])
            setCheckMicColor(false)
        }

        function onSpeechEnd(e) {
            setCheckMicColor(false)
        }

        voice.onSpeechResults = onSpeechResults;
        voice.onSpeechEnd = onSpeechEnd;
        return () => {
            voice.destroy().then(voice.removeAllListeners);
        };
    }, [])

    const ArticlesCategory = async () => {
        config.Constant.showLoader.showLoader();
        var cate = await modules.APIServices.GetApiCall(
            config.ApiEndpoint.Article_Categories,
        );
        if (cate.success == true) {
            config.Constant.showLoader.hideLoader();
            props.setArticleCategory(cate, () => { })
        } else {
            config.Constant.showLoader.hideLoader();
            // Alert.alert('error', data.message);
        }
    }

    const Articles_List = async (Type, CateId, Search) => {
        ArticlesListCount == 20 ?
            config.Constant.showLoader.showLoader() : null
        var formData = {
            "page": 0,
            "limit": ArticlesListCount,
            "sortBy": Type,
            "categoryId": CateId,
            "searchKey": Search
        }
        var list = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.Article_List,
            formData
        );
        if (list.success == true) {
            config.Constant.showLoader.hideLoader();
            setArticleList(list.data.articles)
            props.setArticleList(list, () => { })
        } else {
            config.Constant.showLoader.hideLoader();
            // Alert.alert('error', data.message);
        }
    }

    const Item = ({ item, index }) => {
        return (
            <Pressable onPress={() => [setsearchArrIndex(index),
            setSearch(''), Articles_List(item.cate, '', '')]}>
                <View style={[styles.keywordItem,
                {
                    backgroundColor: searchArrIndex == index ?
                        config.Constant.COLOR_DARK_GREY : config.Constant.COLOR_WHITE,
                    borderColor: searchArrIndex == index ? config.Constant.COLOR_DARK_GREY : 'rgba(20, 26, 26, 0.15)',
                    borderWidth: searchArrIndex == index ? 0 : 1
                }]}>
                    <Text style={[styles.keywordItemText,
                    {
                        color: searchArrIndex == index ? config.Constant.COLOR_WHITE :
                            config.Constant.COLOR_DARK_GREY
                    }]}>{item.cate}</Text>
                </View>
            </Pressable>
        )
    }

    const ItemList = ({ item, index }) => {
        return (
            <Pressable onPress={() => [setArticleListClick(item),
            setArticleDetailsModal(true)]} >
                <View style={[styles.FlatView, {
                    borderColor: config.Constant.COLOR_BORDER_HOME_LIST,
                    marginBottom: ArticlesList.length - 1 == index ?
                        scale(20) : scale(0)
                }]}>
                    <View style={styles.FlatsemiView}>
                        <Image source={item.image != '' ? { uri: item.image } : null}
                            style={styles.mainIMg} resizeMode={'cover'} />
                        <View style={styles.watchView}>
                            <Image style={styles.eyeImg}
                                source={images.Eye} resizeMode={'cover'} />
                            <Text style={styles.viewText}>{item.viewCount != '' &&
                                item.viewCount.toString().length <= 3 ?
                                item.viewCount : item.viewCount.toString().length == 4 ?
                                    `${item.viewCount.toString().substr(0, 1)},${item.viewCount.toString().substr(1, 1)} K` :
                                    item.viewCount.toString().length == 5 ?
                                        `${item.viewCount.toString().substr(0, 2)},${item.viewCount.toString().substr(2, 1)} K`
                                        : "0"}</Text>
                        </View>
                    </View>
                    <View style={styles.TextView}>
                        <View>
                            <Text numberOfLines={1} style={styles.itemTitle}>
                                {item.title != '' ? item.title : ''}</Text>
                            <Text style={[styles.timeText,
                            { marginLeft: 0, marginTop: scale(3) }]}>
                                {item.categoryName != '' ? item.categoryName : ' '}</Text>
                            <View style={styles.DescriptionView} >
                                {item.createdAt && <Image style={styles.clockImg}
                                    source={images.Time} resizeMode={'cover'} />}
                                {item.createdAt && <Text style={[styles.timeText, {
                                    marginTop: scale(-1)
                                }]}>{"Posted "}{item.createdAt.substr(0, 7)}</Text>}
                            </View>
                        </View>
                    </View>
                </View >
            </Pressable>
        )
    }

    return (
        <SafeAreaView style={styles.Contact}>
            <View style={styles.Contact}>
                <View style={[styles.LinearSty,
                styles.semiView]}>
                    <Pressable onPress={() => props.navigation.goBack()}
                        style={styles.backImgBtn}>
                        <Image style={styles.backImg}
                            source={images.BackIcon} resizeMode={'cover'} />
                    </Pressable>
                    <Text style={styles.titleText}>
                        {config.I18N.t('drawer_Articles')}</Text>
                </View>
                <View style={styles.mainTextView}>
                    <View style={styles.semiSearchView}>
                        <View style={styles.backImgBtn}>
                            <Image style={styles.searchImg}
                                source={images.Search} resizeMode={'cover'} />
                        </View>
                        <TextInput
                            style={[styles.textInputSty,
                            { opacity: search.length == 0 ? 0.5 : 1 }]}
                            onChangeText={(text) => setSearch(text)}
                            value={search}
                            autoFocus={false}
                            onEndEditing={() => search ?
                                Articles_List(SearchData[searchArrIndex].cate, '', search) : null}
                            placeholder={config.I18N.t('Articles_Search_for_articles')}
                            placeholderTextColor={config.Constant.COLOR_DARK_GREY}
                            keyboardType='default'
                        />
                        {search.length != '' ?
                            <Pressable onPress={() => [setSearch(''),
                            Articles_List(SearchData[searchArrIndex].cate, '', '')]} style={styles.recodeBtn}>
                                <Image style={styles.closeImg}
                                    source={images.CloseIcon} resizeMode={'cover'} />
                            </Pressable> :
                            <Pressable onPress={() => [voice.start('en-US'),
                            setCheckMicColor(true)]} style={styles.recodeBtn}>
                                <Image style={[styles.recodeImg, {
                                    tintColor: checkMicColor ? config.Constant.COLOR_RED
                                        : config.Constant.COLOR_DRAWER_LIGHT
                                }]}
                                    source={images.Recording} resizeMode={'cover'} />
                            </Pressable>}
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={SearchData}
                            horizontal
                            style={styles.searchArrFlat}
                            renderItem={(item, index) => Item(item, index)}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        <View style={styles.filterBtnView}>
                            <Pressable onPress={() => setShowCategoryModal(true)}
                                style={styles.filterBtn}>
                                <Image source={images.filter} resizeMode={'cover'}
                                    style={styles.filterImg} />
                            </Pressable>
                        </View>
                    </View>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={ArticlesList}
                        renderItem={(item, index) => ItemList(item, index)}
                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={{ flexGrow: 1 }}
                        onEndReached={() => {
                            search == "" ? [setArticleListCount(ArticlesListCount + 20),
                            Articles_List(SearchData[searchArrIndex].cate, '', '')] : null
                        }}
                        ListEmptyComponent={() => {
                            return (
                                search != '' || searchArrIndex != 0 ?
                                    <View style={styles.emptyListView}>
                                        <Text style={styles.emptyListText}>
                                            No data found</Text></View> : null
                            )
                        }}
                        onEndReachedThreshold={0.5}
                    />
                </View>
            </View>

            {ArticleDetailsModal ? <ArticleDetail Close={() => setArticleDetailsModal(false)}
                Details={ArticlesListClick} /> : null}
            {showCategoryModal ? <All_Categories_Modal Arr={props.articleData.article_Category.data}
                Close={() => setShowCategoryModal(false)}
                onSelect={(item, index) => {
                    setShowCategoryModal(false)
                    Articles_List('popular', item._id, '')
                }} /> : null}
        </SafeAreaView>
    )
};

//---- Connect to props functions and values -----//
function mapStateToProps({ articleData }) {
    return { articleData };
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
        setArticleList,
        setArticleCategory
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
