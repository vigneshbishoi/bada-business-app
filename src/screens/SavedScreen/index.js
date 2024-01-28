import React, { useState, useEffect } from 'react';
import { View, Text, Image, Platform, Pressable, FlatList, DeviceEventEmitter, } from 'react-native';
import { scale } from 'react-native-size-matters';
import style from './style'
import config from '../../config/index';
import { Header, Search_Call, Add_To_Cart, SaveAndUnsaveHandle } from '../../component/index'
import images from '../../config/Images'
import Save_Courses_List from './Save_Courses_List/index'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    setSaveGetList,
} from '../../Redux/actions/index'

function SavedScreen(props) {

    const [saveListApiCount, setSaveListApiCount] = useState(20);
    const [saveList, setSaveList] = useState([]);
    const [EAEClick, setEAEClick] = useState(true);
    const [EAEListcount, setEAEListCount] = useState(0);
    const [saveEAEList, setSaveEAEList] = useState([]);

    useEffect(async () => {
        EAEListFun()
        SaveApi()
        DeviceEventEmitter.addListener('UpdateSaveValue',
            () => {
                console.log('Save----------');
                setEAEListCount(0)
                setSaveEAEList([])
                EAEListFun()
                SaveApi()
            })
    }, [])

    const EAEListFun = async () => {
        EAEListcount == 0 ?
            config.Constant.showLoader.showLoader() : null
        var formData = {
            "progress": "saved",
            "page": EAEListcount,
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
            EAEListcount == 0 ?
                setSaveEAEList(EAE.data) :
                EAE.data.map((mapData) => {
                    setSaveEAEList(saveEAEList => [...saveEAEList, mapData]);
                })
            setEAEListCount(EAEListcount + 1)
        } else {
            config.Constant.showLoader.hideLoader()
            // Alert.alert('error', data.message);
        }
    };

    const SaveApi = async () => {
        // config.Constant.showLoader.showLoader();
        var formData = {
            "type": "saved",
            "categoryId": "",
            "page": 0,
            "limit": saveListApiCount
        }
        var save = await modules.APIServices.PostApiCall(
            config.ApiEndpoint.RECOMMENDED_COURSES,
            formData,
        );
        if (save.success == true) {
            config.Constant.showLoader.hideLoader()
            setSaveList(save.data?.pscCourse)
        } else {
            config.Constant.showLoader.hideLoader()
            // Alert.alert('error', data.message);
        }
    };

    return (
        <View style={style.container}>
            <Header PressDrawer={() => props.navigation.openDrawer()} CartCount={props?.homeData?.savecarts} />
            <Save_Courses_List
                ListHeaderComponent={
                    <View>
                        <View style={style.MaintitleView}>
                            <View>
                                <Text style={style.CoursesText}>
                                    {config.I18N.t('Save_Saved_Courses')}
                                </Text>
                                <Text style={[style.totalCourses, {
                                    marginTop: Platform.OS == 'android' ? scale(-3) : 0
                                }]}>
                                    {Array.isArray(saveList) && !EAEClick ?
                                        saveList?.length :
                                        Array.isArray(saveEAEList) && EAEClick ?
                                            saveEAEList?.length : 0} Courses
                            </Text>
                            </View>
                            <View style={style.filterBtnView}>
                                <Pressable style={style.filterBtn}>
                                    <Image source={images.filter} resizeMode={'cover'}
                                        style={style.filterImg} />
                                </Pressable>
                            </View>
                        </View>
                        <View style={style.eaePscBtnMainView}>
                            <Pressable onPress={() => setEAEClick(true)}>
                                <View style={[style.BtnEAE,
                                {
                                    backgroundColor: EAEClick ?
                                        config.Constant.COLOR_DARK_GREY : config.Constant.COLOR_WHITE,
                                    borderColor: EAEClick ? config.Constant.COLOR_DARK_GREY : 'rgba(20, 26, 26, 0.15)',
                                    borderWidth: EAEClick ? 0 : 1
                                }]}>
                                    <Text style={[style.EAEBtnText,
                                    {
                                        color: EAEClick ? config.Constant.COLOR_WHITE :
                                            config.Constant.COLOR_DARK_GREY
                                    }]}>{config.I18N.t('Home_EAE')}</Text>
                                </View>
                            </Pressable>
                            <Pressable onPress={() => setEAEClick(false)} >
                                <View style={[style.BtnEAE,
                                {
                                    backgroundColor: !EAEClick ?
                                        config.Constant.COLOR_DARK_GREY : config.Constant.COLOR_WHITE,
                                    borderColor: !EAEClick ? config.Constant.COLOR_DARK_GREY : 'rgba(20, 26, 26, 0.15)',
                                    borderWidth: !EAEClick ? 0 : 1
                                }]}>
                                    <Text style={[style.EAEBtnText,
                                    {
                                        color: !EAEClick ? config.Constant.COLOR_WHITE :
                                            config.Constant.COLOR_DARK_GREY
                                    }]}>{config.I18N.t('Home_PSC')}</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                }
                Arr={EAEClick ? saveEAEList : saveList}
                selectedList={(index) => { }}
                ItemBtn={(item, index) => EAEClick ? props.navigation.navigate('CoursesDetailScreen', {
                    EAETrue: true,
                    EAEid: item._id,
                }) :
                    props.navigation.navigate('CoursesDetailScreen', {
                        EAETrue: false,
                        PSCid: item._id
                    })}
                marginTop={Platform.OS == 'android' ? scale(0) : scale(5)}
                marginBottom={scale(30)}
                hiddenAddToCart={false}
                deleteViewShow={true}
                PressDelete={async (item) =>
                    await SaveAndUnsaveHandle.DeleteSave(item._id, "1")}
                onEndReached={() => {
                    EAEClick ? [
                        setEAEListCount(EAEListcount + 1),
                        EAEListFun()] :
                        [setSaveListApiCount(saveListApiCount + 20),
                        SaveApi()]
                }}
                onEndReachedThreshold={0.5} />
        </View>

    )
}

//---- Connect to props functions and values -----//
function mapStateToProps({ userData, homeData, coursesScreenData }) {
    return { userData, homeData, coursesScreenData };
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
        setSaveGetList
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SavedScreen);