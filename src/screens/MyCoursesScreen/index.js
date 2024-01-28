import React, { useState, useEffect } from 'react';
import { View, Image, Pressable, Text, Modal, FlatList, TextInput, SafeAreaView, ScrollView, } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../../config';
import images from '../../config/Images'
import styles from './style'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import modules from '../../modules'
import { setYoutube } from '../../Redux/actions'
import voice from '@react-native-voice/voice'
import { ArrowUpDownSvg, FilterSvg } from '../../assets/svg/index'
import Search_Modal from '../HomeScreen/Search_Modal/index'
import { Search_Call, Courses_Screen_List, SaveAndUnsaveHandle } from '../../component/index'
import All_Subcate_Modal from './All_Subcate_Modal/index'

const EAEStaticList = [{ name: 'EAE' }, { name: "PSC" }]

const CategoriesStaticList = [
    { name: 'All' },
    { name: 'Applied Courses' },
    { name: "Ongoing Courses" },
    { name: "Complete Courses" }]

function MyCourses(props) {

    const [search, setSearch] = useState('')
    const [youTubeDetails, setYoutubeDetails] = useState([])
    const [allCateList, setAllCateList] = useState([])
    const [cateIndex, setCateIndex] = useState(0)
    const [EAEIndex, setEAEIndex] = useState(0)
    const [videoApiCount, setVideoApiCount] = useState(0)
    const [checkMicColor, setCheckMicColor] = useState(false)
    const [searchModal, setSearchModal] = useState(false)
    const [PSCApplied, setPSCApplices] = useState([])
    const [PSCOngoin, setPSCOngoing] = useState([])
    const [PSCComplete, setPSCComplete] = useState([])
    const [PSCAll, setPSCAll] = useState([])
    const [PSCApiCount, setPSCApiCount] = useState(20)
    const [EAEApplied, setEAEApplices] = useState([])
    const [EAEOngoin, setEAEOngoing] = useState([])
    const [EAEComplete, setEAEComplete] = useState([])
    const [EAEAll, setEAEAll] = useState([])
    const [EAEApiCount, setEAEApiCount] = useState(0)

    const [PSCAppliedCount, setPSCApplicesCount] = useState(20)
    const [PSCOngoinCount, setPSCOngoingCount] = useState(20)
    const [PSCCompleteCount, setPSCCompleteCount] = useState(20)
    const [EAEAppliedCount, setEAEApplicesCount] = useState(0)
    const [EAEOngoinCount, setEAEOngoingCount] = useState(0)
    const [EAECompleteCount, setEAECompleteCount] = useState(0)

    const [categoriesModal, setCategoriesModal] = useState(false)
    const [redDotForFilter, setRedDotForFilter] = useState(false)
    const [redDotForOrder, setRedDotForOrder] = useState(false)


    useEffect(async () => {
        PSCApi('all')
        EAEApi('all')
        EAEApi('purchased')
        EAEApi('ongoing')
        EAEApi('completed')
        PSCApi('purchased')
        PSCApi('ongoing')
        PSCApi('completed')
    }, [])

    const PSCApi = async (type) => {
        // PSCApiCount == 20 ?
        //     config.Constant.showLoader.showLoader() : null
        var formData = {
            "type": type,
            "categoryId": "",
            "subCategoryId": "",
            "page": 0,
            "limit": type == 'all' ? PSCApiCount :
                type == 'purchased' ? PSCAppliedCount :
                    type == 'ongoing' ? PSCOngoinCount :
                        type == 'completed' ? PSCCompleteCount : 20
        }
        var cate = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.RECOMMENDED_COURSES,
            formData
        );
        if (cate.success == true) {
            config.Constant.showLoader.hideLoader();
            type == 'all' ? setPSCAll(cate.data?.pscCourse != undefined ?
                cate.data.pscCourse : []) :
                type == 'purchased' ? setPSCApplices(cate.data?.pscCourse != undefined ?
                    cate.data.pscCourse : []) :
                    type == 'ongoing' ? setPSCOngoing(cate.data?.pscCourse != undefined ?
                        cate.data.pscCourse : []) :
                        type == 'completed' ? setPSCComplete(cate.data?.pscCourse != undefined ?
                            cate.data.pscCourse : []) : null
        } else {
            config.Constant.showLoader.hideLoader();
        }
    }

    const EAEApi = async (type) => {
        EAEApiCount == 0 ?
            config.Constant.showLoader.showLoader() : null
        var formData = {
            "progress": type,
            "page": type == 'all' ? EAEApiCount :
                type == 'purchased' ? EAEAppliedCount :
                    type == 'ongoing' ? EAEOngoinCount :
                        type == 'completed' ? EAECompleteCount : 0,
            "categoryId": [],
            "subCategoryId": [],
            "authorId": "",
            "sort": "asc"
        };
        var EAE = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.EAELIST_COURSE_TAB,
            formData
        );
        if (EAE.success == true) {
            config.Constant.showLoader.hideLoader()
            type == 'all' && EAEApiCount == 0 ? setEAEAll(EAE.data) :
                type == 'all' && EAEApiCount != 0 ?
                    EAE?.data?.map((data) => {
                        setEAEAll(EAEAll => [...EAEAll, data])
                    }) : type == 'purchased' && EAEAppliedCount == 0 ?
                        setEAEApplices(EAE.data) :
                        type == 'purchased' && EAEAppliedCount != 0 ?
                            EAE?.data?.map((data) => {
                                setEAEApplices(EAEApplied => [...EAEApplied, data])
                            }) : type == 'ongoing' && EAEOngoinCount == 0 ?
                                setEAEOngoing(EAE.data) :
                                type == 'ongoing' && EAEOngoinCount != 0 ?
                                    EAE?.data?.map((data) => {
                                        setEAEOngoing(EAEOngoin => [...EAEOngoin, data])
                                    }) : type == 'completed' && EAECompleteCount == 0 ?
                                        setEAEComplete(EAE.data) :
                                        type == 'completed' && EAECompleteCount != 0 ?
                                            EAE?.data?.map((data) => {
                                                setEAEComplete(EAEComplete => [...EAEComplete, data])
                                            }) : null

        } else {
            config.Constant.showLoader.hideLoader()
        }
    };

    const Item = ({ item, index }) => {
        return (
            <Pressable onPress={() => setEAEIndex(index)}>
                <View style={[styles.allcateItemView,
                {
                    backgroundColor: EAEIndex == index ?
                        config.Constant.COLOR_DARK_GREY : config.Constant.COLOR_WHITE,
                    borderColor: EAEIndex == index ? config.Constant.COLOR_DARK_GREY : 'rgba(20, 26, 26, 0.15)',
                    borderWidth: EAEIndex == index ? 0 : 1
                }]}>
                    <Text style={[styles.allcateItemText,
                    {
                        color: EAEIndex == index ? config.Constant.COLOR_WHITE :
                            config.Constant.COLOR_DARK_GREY
                    }]}>{item.name}</Text>
                </View>
            </Pressable>
        )
    }

    const SearchApi = async (key, item, data, subdata, subtitle, subindex, id, subId) => {
        setTimeout(() => {
            [setSearch(''), setCheckMicColor(false),
            setSearchModal(false),
            props.navigation.navigate('SalesScreen', {
                SearchKeyResponse: item,
                DataTitle: data,
                SubData: subdata,
                subtitle: subtitle,
                subindex: subindex,
                searchModaid: id,
                searchSubId: subId,
            })]
        }, 300);
    }

    return (
        <SafeAreaView style={styles.Contact}>
            <View style={styles.Contact}>
                <View style={[styles.LinearSty,
                styles.semiView]}>
                    <Pressable onPress={() =>
                        props.navigation.goBack()}
                        style={styles.backImgBtn}>
                        <Image style={styles.backImg}
                            source={images.BackIcon} resizeMode={'cover'} />
                    </Pressable>
                    <Text style={styles.titleText}>
                        {config.I18N.t('Home_My_Courses')}</Text>
                </View>
                <View style={styles.mainTextView}>
                    <Courses_Screen_List
                        ListHeaderComponent={(
                            <View>
                                <View style={styles.semiSearchView}>
                                    <Search_Call PressSearch={() => setSearchModal(true)} props={props}
                                        search={search} checkMicColor={checkMicColor}
                                        PressOnMic={() => [voice.start('en-US'),
                                        setCheckMicColor(true), setSearch('')]}
                                        _onSpeechResults={(e) => [setCheckMicColor(false),
                                        setSearch(e.value[0]),
                                        SearchApi('', e.value[0], '', [], '', '', '', "")]}
                                        _onSpeechEnd={() => setCheckMicColor(false)}
                                    />
                                </View>
                                <View style={styles.EAEListsAndBtnView}>
                                    <FlatList
                                        showsHorizontalScrollIndicator={false}
                                        data={EAEStaticList}
                                        horizontal
                                        renderItem={(item, index) => Item(item, index)}
                                        keyExtractor={(item, index) => index.toString()}
                                    />
                                    <Pressable onPress={() => setCategoriesModal(true)}
                                     style={styles.filterBtn}>
                                    {redDotForFilter ? <View style={styles.redDotView} /> : null}
                                        <ArrowUpDownSvg />
                                    </Pressable>
                                    <Pressable onPress={() => setCategoriesModal(true)}
                                        style={[styles.filterBtn, { marginLeft: scale(15) }]}>
                                        {redDotForFilter ? <View style={styles.redDotView} /> : null}
                                        <FilterSvg />
                                    </Pressable>
                                </View>
                                <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    data={CategoriesStaticList}
                                    horizontal
                                    style={styles.categoriesFlat}
                                    renderItem={({ item, index }) => {
                                        return (<View><Pressable style={[styles.categoriesBtn, {
                                            borderColor: cateIndex == index ?
                                                config.Constant.COLOR_DARK_GREY : "transparent"
                                        }]}
                                            onPress={() => setCateIndex(index)}>
                                            <Text style={[styles.categoriesText, {
                                                fontFamily:
                                                    cateIndex == index ? config.Constant.Font_Semi_Bold :
                                                        config.Constant.Font_Medium,
                                                opacity: cateIndex == index ? 1 : 0.4,
                                                fontWeight: cateIndex == index ? "600" : 'normal',
                                            }]}>{item.name}</Text>
                                        </Pressable>
                                            <View style={styles.line} /></View>)
                                    }}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </View>
                        )}
                        Arr={EAEIndex == 0 && cateIndex == 0 ? EAEAll :
                            EAEIndex == 0 && cateIndex == 1 ? EAEApplied :
                                EAEIndex == 0 && cateIndex == 2 ? EAEOngoin :
                                    EAEIndex == 0 && cateIndex == 3 ? EAEComplete :
                                        EAEIndex != 0 && cateIndex == 0 ? PSCAll :
                                            EAEIndex != 0 && cateIndex == 1 ? PSCApplied :
                                                EAEIndex != 0 && cateIndex == 2 ? PSCOngoin :
                                                    EAEIndex != 0 && cateIndex == 3 ? PSCComplete : []}
                        props={props}
                        marginHorizontal={scale(15)}
                        price={EAEIndex == 0 ? '' : '₹ 15000'}
                        HandlePress={(item, index) =>
                            EAEIndex == 0 ? props.navigation.navigate('CoursesDetailScreen', {
                                EAETrue: true,
                                EAEid: item._id,
                                IsSave: item?.isSaved
                            }) : props.navigation.navigate('CoursesDetailScreen', {
                                EAETrue: false,
                                PSCid: item._id,
                                IsSave: item?.is_saved
                            })}
                        colorAuthor={config.Constant.COLOR_BLUE}
                        ListEmptyComponent={(
                            <View style={styles.emptyListView}>
                                <Text style={styles.emptyListText}>
                                    {config.I18N.t('No_data_available')}
                                </Text>
                            </View>
                        )}
                        onEndReached={async () => {
                            EAEIndex == 0 && cateIndex == 0 ? [setEAEApiCount(EAEApiCount + 1),
                            await EAEApi('all')] :
                                EAEIndex == 0 && cateIndex == 1 ? [setEAEApplicesCount(EAEAppliedCount + 1),
                                await EAEApi('purchased')] :
                                    EAEIndex == 0 && cateIndex == 2 ? [setEAEOngoingCount(EAEOngoinCount + 1),
                                    await EAEApi('ongoing')] :
                                        EAEIndex == 0 && cateIndex == 3 ? [setEAECompleteCount(EAECompleteCount + 1),
                                        await EAEApi('completed')] :
                                            EAEIndex != 0 && cateIndex == 0 ? [setPSCApiCount(PSCApiCount + 20),
                                            await PSCApi('all')] :
                                                EAEIndex != 0 && cateIndex == 1 ? [setPSCApplicesCount(PSCAppliedCount + 20),
                                                await PSCApi('purchased')] :
                                                    EAEIndex != 0 && cateIndex == 2 ? [setPSCOngoingCount(PSCOngoinCount + 20),
                                                    await PSCApi('ongoing')] :
                                                        EAEIndex != 0 && cateIndex == 3 ? [setPSCCompleteCount(PSCCompleteCount + 20),
                                                        await PSCApi('completed')] : []
                        }}
                        onEndReachedThreshold={0.5}
                        ClickOnSave={async (item, data) => !data ?
                            await SaveAndUnsaveHandle.AddToSave(item._id, EAEIndex == 0 ? "2" : "1") :
                            await SaveAndUnsaveHandle.DeleteSave(item._id, EAEIndex == 0 ? "2" : "1")
                        }
                    />
                </View>
            </View>

            {searchModal ? <Search_Modal props={props} Back={() => setSearchModal(false)}
                FullClose={(Value) => setSearchModal(!Value)} checkMicColor={checkMicColor}
                PressMic={() => [voice.start('en-US'),
                setCheckMicColor(true)]}
                PSCTrue={EAEIndex == 0 ? true : false}
                isMyCourse={true}
                searchText={search} /> : null}

            {categoriesModal ? <All_Subcate_Modal Arr={CategoriesStaticList}
                Close={() => setCategoriesModal(false)}
                onSelect={(item, index) => setTimeout(() => {
                    setRedDotForFilter(true),
                    setCategoriesModal(false)
                }, 500)}
            /> : null}
        </SafeAreaView>
    )
};

//---- Connect to props functions and values -----//
function mapStateToProps({ youtubeData, homeData }) {
    return { youtubeData, homeData };
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MyCourses)
