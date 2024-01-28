import React, { useState, useEffect } from 'react';
import { View, Text, Modal, Image, Platform, Pressable, FlatList } from 'react-native';
import { scale } from 'react-native-size-matters';
import styles from './style'
import config from '../../config/index';
import images from '../../config/Images'
import LinearGradient from 'react-native-linear-gradient';
import Recommended_Courses from '../HomeScreen/Recommended_Courses/index'
import { Courses_Screen_List, SaveAndUnsaveHandle } from '../../component/index'
import All_Subcate_Modal from './All_Subcate_Modal/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    setRecommendedCourses,
    setKeywordSearch,
    setSaveGetList
} from '../../Redux/actions/index'

const EAEStaticList = [{ name: 'All' }, { name: 'EAE' }, { name: "PSC" }]

function Sales(props) {

    const [subcateIndex, setSubcateIndex] = useState(0)
    const [subcateItem, setSubcateItem] = useState('')
    const [subcateModal, setSubcateModal] = useState(false)
    const [subcateKeywords, setSubcateKeywords] = useState(false)
    const [ListCount, setListCount] = useState(20)
    const [Courses, setCourses] = useState([])
    const [CoursesItem, setCoursesItem] = useState([])
    const [searchListCount, setSearchListCount] = useState(20)
    const [searchList, setSearchList] = useState([])
    const [searchListEAE, setSearchListEAE] = useState([])
    const [searchListPSC, setSearchListPSC] = useState([])
    const [coursesEAEListCount, setCoursesEAEListCount] = useState(0)
    const [coursesEAEList, setCoursesEAEList] = useState([])
    const [coursesAllEAEList, setCoursesAllEAEList] = useState([])
    const [coursesEAEfeaturedList, setCoursesEAEfeaturedList] = useState([])
    const [searchTypeEAE, setSearchTypeEAE] = useState(0)

    useEffect(async () => {
        if (props.route.params?.SubData != undefined) {
            // handle from Search screen 
            setSubcateKeywords([])
            props.route?.params?.SubData?.length >= 3 ?
                setSubcateKeywords(subcateKeywords => [...subcateKeywords, { title: "All" }]) : null
            props.route?.params?.SubData.map((key) => {
                setSubcateKeywords(subcateKeywords => [...subcateKeywords, key])
            })
            props.route?.params?.SubData?.length >= 3 ?
                setSubcateIndex(props.route?.params?.subindex + 1) :
                setSubcateIndex(props.route?.params?.subindex)
            props.route?.params?.DataTitle != '' && !props.route?.params?.EAEBtn ?
                CoursesAPI('all', props.route?.params?.searchSubId, false, props.route?.params?.searchModaid, 0) :
                props.route?.params?.EAEBtn ?
                    CoursesEAEAPI('all', [props.route?.params?.searchSubId], false, [props.route?.params?.searchModaid], 0, false) :
                    null
            // SearchOnKeywords(props.route?.params?.subtitle)
            props.route?.params?.SubData?.length >= 3 ?
                CoursesAPI('all', '', true, '', 0) : null
        } else {
            // handle from Home screen
            setSubcateKeywords([])
            props.route?.params?.subCategory?.length >= 3 ?
                setSubcateKeywords(subcateKeywords => [...subcateKeywords, { title: "All" }]) : null
            props.route?.params?.subCategory.map((key) => {
                setSubcateKeywords(subcateKeywords => [...subcateKeywords, key])
            })
            props.route?.params?.subCategory?.length < 3 ?
                CoursesAPI('all', props.route?.params?.searchCateId, true, props.route?.params?.searchId, 0) :
                CoursesAPI('all', '', true, '', 0)
            setSubcateIndex(0)
        }
        props.route.params?.SearchKeyResponse != undefined ?
            SearchOnKey(props.route.params?.SearchKeyResponse) : null
        // props.route?.params?.EAEBtn ?
        //     CoursesEAEAPI('all', [], true, [], 0) : null

        // CoursesAPI('all', '', true)
    }, [])

    const SearchOnKey = async (item) => {
        // searchListCount == 20 ?
        config.Constant.showLoader.showLoader()
        // : null
        var formData = {
            "userQuery": item,
            "Limit": searchListCount,
            "Page": 0
        };

        if (props.route?.params?.isMyCourse && props.route?.params?.isMyCourse != undefined) {
            formData['progress'] = "my_course"
        }
        var SearchKey = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.Search,
            formData,
        );
        // console.log('propsprops*-*-*---*-*', SearchKey, item, formData);
        if (SearchKey.success == true) {
            config.Constant.showLoader.hideLoader();
            setSearchList(SearchKey.data)
            let EAEArr = SearchKey?.data?.filter(i => i?.course_type == 'eae')
            let PSCArr = SearchKey?.data?.filter(i => i?.course_type != 'eae')
            setSearchListEAE(EAEArr);
            setSearchListPSC(PSCArr);
        } else {
            config.Constant.showLoader.hideLoader();
            // Alert.alert('error', data.message);
        }
    }

    const CoursesEAEAPI = async (data, Id, value, cateId, index, type) => {
        // console.log('propspropspropsEAE', data, Id, value, cateId, index, type);
        coursesEAEListCount == 0 ?
            config.Constant.showLoader.showLoader() : null
        var formData = {
            "progress": data,
            "page": coursesEAEListCount,
            "categoryId": cateId,
            "subCategoryId": Id,
            "authorId": "",
            "sort": "asc"
        }
        var _Courses = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.EAELIST_COURSE_TAB,
            formData,
        );
        if (_Courses.success == true) {
            config.Constant.showLoader.hideLoader();
            value && index == 0 && coursesEAEListCount == 0 ?
                setCoursesAllEAEList(_Courses.data) :
                value && index == 0 && coursesEAEListCount != 0 ?
                    _Courses.data.map((mapData) => {
                        setCoursesAllEAEList(coursesAllEAEList => [...coursesAllEAEList, mapData]);
                    }) :
                    value && index != 0 && coursesEAEListCount == 0 ?
                        setCoursesEAEList(_Courses.data) :
                        value && index != 0 && coursesEAEListCount != 0 ?
                            _Courses.data.map((mapData) => {
                                setCoursesEAEList(coursesEAEList => [...coursesEAEList, mapData]);
                            }) : null

            type && coursesEAEListCount == 0 ?
                setCoursesEAEfeaturedList(_Courses.data) :
                type && coursesEAEListCount != 0 ?
                    _Courses.data.map((mapData) => {
                        setCoursesEAEfeaturedList(coursesEAEfeaturedList => [...coursesEAEfeaturedList, mapData]);
                    }) : null

            // CoursesEAEAPI('all', [], true, [], 0)
        } else {
            config.Constant.showLoader.hideLoader();
        }
    }

    const CoursesAPI = async (data, Id, value, cateId, index) => {
        // console.log('propspropspropsPSC', data, Id, value, cateId, index);
        config.Constant.showLoader.showLoader();
        var formData = {
            "type": data,
            // "categoryId": props.route?.params?.TopCateId,
            "categoryId": cateId,
            "subCategoryId": value ? "" : Id,
            "page": 0,
            "limit": ListCount
        }
        var _Courses = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.RECOMMENDED_COURSES,
            formData,
        );
        if (_Courses.success == true) {
            config.Constant.showLoader.hideLoader();
            (props.route?.params?.SubData?.length >= 3 ||
                props.route?.params?.subCategory?.length >= 3) && index == 0 &&
                value && Array.isArray(_Courses.data.pscCourse) ?
                setCourses(_Courses.data.pscCourse) :
                (props.route?.params?.SubData?.length < 3 && index == 0 ||
                    props.route?.params?.subCategory?.length < 3) &&
                    value && Array.isArray(_Courses.data.pscCourse) ?
                    setCoursesItem(_Courses.data.pscCourse) :
                    !value && index != 0 && Array.isArray(_Courses.data.pscCourse) ?
                        setCoursesItem(_Courses.data.pscCourse) : null
        } else {
            config.Constant.showLoader.hideLoader();
        }
    }

    const Item = ({ item, index }) => {
        return (
            <Pressable onPress={() => [setSubcateIndex(index), setCoursesAllEAEList([]), setCoursesEAEList([]),
            props.route?.params?.EAEBtn && index != 0 ? CoursesEAEAPI('all', [item.id], false, [item.category_id], index, false) :
                props.route?.params?.EAEBtn && index == 0 ? [CoursesEAEAPI('all', [], true, [], index, false),
                CoursesEAEAPI('featured', [], true, [], index, true)] :
                    CoursesAPI('all', item.id, false, item.category_id, index), setCoursesEAEListCount(0),
            setSubcateItem(item)]}>
                <View style={[styles.keywordItem,
                {
                    backgroundColor: subcateIndex == index ?
                        config.Constant.COLOR_DARK_GREY : config.Constant.COLOR_WHITE,
                    paddingHorizontal: index == 0 ? scale(20) : scale(15),
                    borderColor: subcateIndex == index ? config.Constant.COLOR_DARK_GREY : 'rgba(20, 26, 26, 0.15)',
                    borderWidth: subcateIndex == index ? 0 : 1
                }]}>
                    <Text style={[styles.keywordItemText,
                    {
                        color: subcateIndex == index ? config.Constant.COLOR_WHITE :
                            config.Constant.COLOR_DARK_GREY
                    }]}>{item.title}</Text>
                </View>
            </Pressable>
        )
    }

    const FeatureItem = ({ item, index }) => {
        return (
            <Pressable onPress={() => {
                props.navigation.navigate('CoursesDetailScreen', {
                    EAETrue: false,
                    PSCid: item._id,
                    IsSave: item?.is_saved
                })
            }}>
                <Recommended_Courses
                    props={props}
                    item={item}
                    index={index}
                    width={config.Constant.SCREEN_WIDTH * 0.85}
                    marginRight={scale(10)}
                    mainViewStyle={styles.recommendedCardShadowStyle}
                    ClickOnSave={async (item, data) => !data ?
                        await SaveAndUnsaveHandle.AddToSave(item._id, "1") :
                        await SaveAndUnsaveHandle.DeleteSave(item._id, "1")}
                />
            </Pressable>
        )
    }

    const SubcateFlat = () => {
        return (
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={subcateKeywords}
                horizontal
                style={{ marginTop: scale(10), marginBottom: scale(30) }}
                renderItem={(item, index) => Item(item, index)}
                keyExtractor={(item, index) => index.toString()}
            />
        )
    }

    const FeatureFlat = () => {
        return (
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={props.route?.params?.EAEBtn ? coursesEAEfeaturedList :
                    props?.homeData?.recommendedCourses?.data?.pscCourse}
                horizontal
                style={styles.CouesesFlatView}
                renderItem={(item, index) => FeatureItem(item, index)}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={() => {
                    setCoursesEAEListCount(coursesEAEListCount + 1)
                    CoursesEAEAPI('featured', [], false, [], 0, true)
                }}
                onEndReachedThreshold={0.5}
            />
        )
    }

    const EAESelectItem = ({ item, index }) => {
        return (
            <Pressable onPress={() => setSearchTypeEAE(index)}>
                <View style={[styles.keywordItem,
                {
                    backgroundColor: searchTypeEAE == index ?
                        config.Constant.COLOR_DARK_GREY : config.Constant.COLOR_WHITE,
                    paddingHorizontal: index == 0 ? scale(20) : scale(15),
                    borderColor: searchTypeEAE == index ? config.Constant.COLOR_DARK_GREY : 'rgba(20, 26, 26, 0.15)',
                    borderWidth: searchTypeEAE == index ? 0 : 1
                }]}>
                    <Text style={[styles.keywordItemText,
                    {
                        color: searchTypeEAE == index ? config.Constant.COLOR_WHITE :
                            config.Constant.COLOR_DARK_GREY
                    }]}>{item.name}</Text>
                </View>
            </Pressable>
        )
    }

    return (
        // console.log('propsprops', props?.homeData?.recommendedCourses?.data?.pscCourse.length),
        <View style={styles.container} >
            <Courses_Screen_List
                ListHeaderComponent={(
                    <View>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 2.2, y: 0 }}
                            style={styles.LinearSty}
                            colors={[config.Constant.COLOR_LINEAR__LIGHT,
                            config.Constant.COLOR_LINEAR__DARK,]} >
                            <View style={styles.semiView}>
                                <Pressable onPress={() => props.navigation.goBack()} style={styles.backImgBtn}>
                                    <Image style={styles.backImg} d nvb
                                        source={images.BackIcon} resizeMode={'cover'} />
                                </Pressable>
                                {props.route.params?.DataTitle != undefined ?
                                    <Text style={styles.textInputSty}>{props.route.params.DataTitle}</Text> :
                                    props.route.params?.title != undefined ?
                                        <Text style={styles.textInputSty}>{props.route.params.title}</Text> :
                                        <Text style={styles.textInputSty}>Sales</Text>}
                                <Pressable onPress={() => {
                                    config.Constant.RootNavigation.navigate('CartScreen')
                                }} style={styles.recodeBtn}>
                                    <Image style={styles.recodeImg}
                                        source={images.Cart} resizeMode={'cover'} />
                                    {props?.homeData?.savecarts != null && props?.homeData?.savecarts != undefined
                                        && props?.homeData?.savecarts != 0 ?
                                        <View style={styles.cartCountView}>
                                            <Text style={styles.countText}>{props?.homeData?.savecarts}</Text>
                                        </View> : null}
                                </Pressable>
                            </View>
                        </LinearGradient>
                        <View style={styles.SemiMainView}>
                            {props.route.params != undefined && props.route.params.DataTitle == '' ? null :
                                <View style={styles.subcateView}>
                                    <Text style={styles.subcateText}>
                                        {config.I18N.t('Sale_Subcategories')}</Text>
                                    <Pressable onPress={() => setSubcateModal(!subcateModal)}
                                        style={styles.viewAllBtn}>
                                        <Text style={[styles.subcateText,
                                        {
                                            color: config.Constant.COLOR_BLUE,
                                            letterSpacing: 0.33, opacity: 1,
                                        }]}>
                                            {config.I18N.t('Sale_View_All')}</Text>
                                        <Image style={styles.subcateDownArrow}
                                            source={images.down_arrow} resizeMode={'cover'} />
                                    </Pressable>
                                </View>}
                            {props.route.params?.SearchKeyResponse != undefined ?
                                <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    data={EAEStaticList}
                                    horizontal
                                    style={{ marginBottom: scale(10) }}
                                    renderItem={(item, index) => EAESelectItem(item, index)}
                                    keyExtractor={(item, index) => index.toString()}
                                /> : null}
                            {props.route.params != undefined && props.route.params.DataTitle == '' ? null :
                                <SubcateFlat />}
                            {subcateIndex == 0 && (props.route?.params?.SubData?.length >= 3 ||
                                props.route?.params?.subCategory?.length >= 3) ?
                                <View>
                                    {coursesEAEfeaturedList.length != 0 ||
                                        props?.homeData?.recommendedCourses?.data?.pscCourse.length != 0 ?
                                        <Text style={styles.featureText}>
                                            {config.I18N.t('Sale_Featured_Courses')}</Text> : null}
                                    {coursesEAEfeaturedList.length != 0 ||
                                        props?.homeData?.recommendedCourses?.data?.pscCourse.length != 0 ?
                                        <FeatureFlat /> : null}
                                    <Text style={styles.featureText}>
                                        {config.I18N.t('Sale_All_Courses')}</Text>
                                </View> : null}
                        </View>
                    </View>
                )} Arr={props.route.params?.SearchKeyResponse != undefined && searchTypeEAE == 0 ? searchList :
                    props.route.params?.SearchKeyResponse != undefined && searchTypeEAE == 1 ? searchListEAE :
                        props.route.params?.SearchKeyResponse != undefined && searchTypeEAE == 2 ? searchListPSC :
                            subcateIndex == 0 && !props.route?.params?.EAEBtn ? Courses :
                                subcateIndex == 0 && props.route?.params?.EAEBtn ? coursesAllEAEList :
                                    CoursesItem.length != 0 && !props.route?.params?.EAEBtn ? CoursesItem :
                                        coursesEAEList.length != 0 && props.route?.params?.EAEBtn ? coursesEAEList :
                                            CoursesItem} props={props}
                marginHorizontal={scale(15)}
                price={'₹'}
                onEndReached={() => {
                    props.route.params?.SearchKeyResponse != undefined ?
                        [setSearchListCount(searchListCount + 20),
                        SearchOnKey(props.route.params?.SearchKeyResponse)] :
                        subcateIndex == 0 && !props.route?.params?.EAEBtn ?
                            [setListCount(ListCount + 20),
                            CoursesAPI('all', '', true, '', 0)] :
                            subcateIndex == 0 && props.route?.params?.EAEBtn ?
                                [setCoursesEAEListCount(coursesEAEListCount + 1),
                                CoursesEAEAPI('all', [], true, [], 0, false)] :
                                subcateIndex != 0 && props.route?.params?.EAEBtn ?
                                    [setCoursesEAEListCount(coursesEAEListCount + 1),
                                    CoursesEAEAPI('all', [subcateItem?.id], false, [subcateItem?.category_id], 0, false)] :
                                    subcateIndex != 0 && !props.route?.params?.EAEBtn ?
                                        [setListCount(ListCount + 20),
                                        CoursesAPI('all', subcateItem?.id, true, subcateItem?.category_id, 0)] : null
                }}
                onEndReachedThreshold={0.5}
                colorAuthor={config.Constant.COLOR_DARK_GREY}
                HandlePress={(item, index) => item?.course_type != undefined &&
                    item?.course_type == "eae" ? props.navigation.navigate('CoursesDetailScreen', {
                        EAETrue: true,
                        EAEid: item.topic_id,
                    }) : props.navigation.navigate('CoursesDetailScreen', {
                        EAETrue: false,
                        PSCid: item._id,
                        IsSave: item?.is_saved
                    })}
                ListEmptyComponent={() => {
                    return (
                        <View style={styles.emptyListView}>
                            <Text style={styles.emptyListText}>
                                {config.I18N.t('No_data_available')}</Text></View>
                    )
                }}
                ClickOnSave={async (item, data) => {
                    !data ?
                        [item?.topic_id ? await SaveAndUnsaveHandle.AddToSave(item.topic_id, "2") : await SaveAndUnsaveHandle.AddToSave(item._id, "1")] :
                        [item?.topic_id ? await SaveAndUnsaveHandle.DeleteSave(item?.topic_id, "2") : await SaveAndUnsaveHandle.DeleteSave(item._id, "1")]
                }
                } />

            {subcateModal ? <All_Subcate_Modal Arr={subcateKeywords}
                subcateIndex={subcateIndex}
                props={props}
                Close={() => setSubcateModal(false)}
                onSelect={(item, index) => {
                    setSubcateIndex(index)
                    CoursesAPI('all', item.id, false, item.category_id, index)
                    setTimeout(() => {
                        setSubcateModal(false)
                    }, 300)
                }}
            />
                : null}
        </View>
    )
}

//---- Connect to props functions and values -----//
function mapStateToProps({ userData, homeData }) {
    return { userData, homeData };
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
        setRecommendedCourses,
        setKeywordSearch,
        setSaveGetList
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sales)