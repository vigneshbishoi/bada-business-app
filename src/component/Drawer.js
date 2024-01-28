import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../config';
import { LiveSessionsSvg, LanguageSvg, TermsCondition, TermsConditions } from '../assets/svg/index'

const CustomDrawer = ({ props, pressctach, catchshow, pressabout, aboutshow, }) => {

    return (
        <ScrollView style={styles.MainView} showsVerticalScrollIndicator={false}>
            <View style={styles.MainView}>
                <View style={styles.HederInDrawer}>
                    <Image
                        style={styles.profilelogo}
                        source={config.Images.emptyProfileLogo}
                        resizeMode={'cover'}
                    />
                    <View style={styles.semiHederview}>
                        <View style={styles.viewRow}>
                            <Text style={styles.userNameText}>Hi </Text>
                            <Text style={[styles.userNameText,
                            { fontFamily: config.Constant.Font_Semi_Bold }]}>
                                Amol!</Text>
                        </View>
                        <Pressable><Text style={styles.editText}>
                            {config.I18N.t('drawerEditProfile')}
                        </Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.borderView} />
                <View style={styles.viewlast}>
                    <View style={styles.viewRowWithJus}>
                        <Image
                            style={styles.staticImages}
                            source={config.Images.Gin}
                            resizeMode={'cover'}
                        />
                        <Text style={styles.staticText}>
                            {config.I18N.t('drawer_Alladin_Ka_Chirag')}
                        </Text>
                        <Pressable style={styles.ExclusiveBTN}>
                            <Text style={styles.ExclusiveText}>
                                {config.I18N.t('drawer_Exclusive')}
                            </Text></Pressable>
                    </View>
                    <Pressable onPress={() => [props.navigation.closeDrawer(),
                    props.navigation.navigate('DownloadCoursesScreen')]}
                        style={styles.viewRowWithJusMT20}>
                        <Image
                            style={styles.staticImages}
                            source={config.Images.Download}
                            resizeMode={'cover'}
                        />
                        <Text style={styles.staticText}>
                            {config.I18N.t('drawer_Downloaded_Courses')}</Text>
                    </Pressable>
                    <Pressable onPress={pressctach} >
                        <View style={styles.viewRowWithJusMV20}>
                            <Image
                                style={styles.staticImages}
                                source={config.Images.heart}
                                resizeMode={'cover'}
                            />
                            <Text style={[styles.staticText,
                            {
                                fontFamily: catchshow ? config.Constant.Font_Bold
                                    : config.Constant.Font_Regular
                            }]}>
                                {config.I18N.t('drawer_Free_Learning')}</Text>
                            {catchshow ?
                                <Image
                                    style={styles.smallImg}
                                    source={config.Images.up_arrow}
                                    resizeMode={'cover'}
                                /> :
                                <Image
                                    style={styles.smallImg}
                                    source={config.Images.down_arrow}
                                    resizeMode={'cover'}
                                />}
                        </View>
                    </Pressable>
                    {catchshow ? <View style={styles.catchview}>
                        <Pressable onPress={() => [props.navigation.closeDrawer(),
                            props.navigation.navigate('YouTubeScreen')
                        ]}
                            style={styles.M_top}>
                            <Text style={[styles.staticText, {
                                opacity: 0.8
                            }]}>
                                {config.I18N.t('drawer_YouTube')}</Text>
                        </Pressable>
                        <View style={styles.insideViewLine} />
                        <Pressable onPress={() => [props.navigation.closeDrawer(),
                        props.navigation.navigate('ArticlesScreen')]}
                            style={styles.M_top}>
                            <Text style={[styles.staticText, {
                                opacity: 0.8
                            }]}>
                                {config.I18N.t('drawer_Articles')}</Text>
                        </Pressable>
                        {/* <Pressable 
                        onPress={()=>{
                            props.navigation.navigate('LiveSession') 
                        }}
                        style={styles.M_top}>
                            <Text style={styles.staticText}>
                                {config.I18N.t('drawer_Gallery')}</Text>
                        </Pressable> */}
                    </View> : null}
                    <Pressable onPress={() => {
                        props.navigation.navigate('LiveSession')
                    }} style={styles.liveSeccionsView}>
                        <Image
                            style={styles.staticImages}
                            source={config.Images.LiveSessions}
                            resizeMode={'cover'}
                        />
                        {/* <LiveSessionsSvg /> */}
                        <Text style={styles.staticText}>
                            {config.I18N.t('drawer_Live_Sessions')}</Text>
                    </Pressable>
                    <View style={styles.borderView} />
                    <View style={styles.viewRowWithJusMT20}>
                        <Image
                            style={styles.staticImages}
                            source={config.Images.Money}
                            resizeMode={'cover'}
                        />
                        <Text style={styles.staticText}>
                            {config.I18N.t('drawer_Subscription')}</Text>
                    </View>
                    <Pressable

                        onPress={pressabout}>
                        <View style={styles.viewRowWithJusMV20}>
                            <Image
                                style={styles.staticImages}
                                source={config.Images.About}
                                resizeMode={'cover'}
                            />
                            <Text style={[styles.staticText, {
                                fontFamily: aboutshow ?
                                    config.Constant.Font_Bold : config.Constant.Font_Regular
                            }]}>{config.I18N.t('drawer_About_Bada_Business')}</Text>
                            {aboutshow ?
                                <Image
                                    style={styles.smallImg}
                                    source={config.Images.up_arrow}
                                    resizeMode={'cover'}
                                /> :
                                <Image
                                    style={styles.smallImg}
                                    source={config.Images.down_arrow}
                                    resizeMode={'cover'}
                                />}
                        </View>
                    </Pressable>
                    {aboutshow ? <View style={styles.catchview}>
                        <Pressable onPress={() => {
                            props.navigation.push('WebViewText', { type: 3 })
                        }} style={styles.M_top}>
                            <Text style={[styles.staticText, {
                                opacity: 0.8
                            }]}>
                                {config.I18N.t('drawer_Bada_Business')}</Text>
                        </Pressable>
                        <View style={styles.insideViewLine} />
                        <Pressable style={styles.M_top} onPress={() => props.navigation.push('WebViewText', { type: 4 })}>
                            <Text style={[styles.staticText, {
                                opacity: 0.8
                            }]}>
                                {config.I18N.t('drawer_Dr_Vivek_Bindra')}</Text>
                        </Pressable>
                        <View style={styles.insideViewLine} />
                        <Pressable onPress={() => [props.navigation.closeDrawer(),
                        props.navigation.navigate('SpeakersScreen')]}
                            style={styles.M_top}>
                            <Text style={[styles.staticText, {
                                opacity: 0.8
                            }]}>
                                {config.I18N.t('drawer_Guest_Speakers')}</Text>
                        </Pressable>
                        <View style={styles.insideViewLine} />
                        <Pressable onPress={() => [props.navigation.closeDrawer(),
                        props.navigation.navigate('GalleryScreen')]}
                            style={styles.M_top}>
                            <Text style={[styles.staticText, {
                                opacity: 0.8
                            }]}>
                                {config.I18N.t('drawer_Gallery')}</Text>
                        </Pressable>
                    </View> : null}
                    <View style={styles.borderView} />
                    <View style={styles.viewRowWithJusMT20}>
                        <Image
                            style={styles.staticImages}
                            source={config.Images.Language}
                            resizeMode={'cover'}
                        />
                        <Text style={styles.staticText}>
                            {config.I18N.t('drawer_language')}</Text>
                    </View>
                    <View style={styles.viewRowWithJusMT20}>
                        <Image
                            style={styles.staticImages}
                            source={config.Images.Right_Tick}
                            resizeMode={'cover'}
                        />
                        <Text style={styles.staticText}>
                            {config.I18N.t('drawer_How_to_Use')}</Text>
                    </View>
                    <View style={styles.viewRowWithJusMT20}>
                        <Image
                            style={styles.staticImages}
                            source={config.Images.Help}
                            resizeMode={'cover'}
                        />
                        <Text style={styles.staticText}>
                            {config.I18N.t('drawer_Help')}</Text>
                    </View>
                    <View style={[styles.viewRowWithJusMT20, {
                        marginBottom: scale(25)
                    }]}>
                        <Image
                            style={styles.staticImages}
                            source={config.Images.Star}
                            resizeMode={'cover'}
                        />
                        <Text style={styles.staticText}>
                            {config.I18N.t('drawer_Rate_The_App')}</Text>
                    </View>
                    <View style={styles.termsConditionView}>
                        <Pressable onPress={() => props.navigation.push('WebViewText', { type: 2 })}
                            style={styles.termsConditionView}>
                            <Image
                                style={styles.termsConditionImg}
                                source={config.Images.TermsConditions}
                                resizeMode={'cover'}
                            />
                            <Text style={styles.termsConditionText}>
                                {config.I18N.t('Profile_Term_Con')}</Text>
                        </Pressable>
                        <Pressable onPress={() => props.navigation.push('WebViewText', { type: 1 })}
                            style={[styles.termsConditionView, {
                                justifyContent: 'flex-end',
                                marginRight: scale(5)
                            }]}>
                            <Image
                                style={styles.termsConditionImg}
                                source={config.Images.TermsConditions}
                                resizeMode={'cover'}
                            />
                            <Text style={styles.termsConditionText}>
                                {config.I18N.t('Profile_Privacy_Policy')}</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    MainView: {
        flex: 1, backgroundColor: config.Constant.COLOR_WHITE
    },
    HederInDrawer: {
        height: scale(80),
        paddingVertical: scale(20),
        paddingHorizontal: scale(15),
        flexDirection: "row"
    },
    profilelogo: {
        width: scale(40),
        height: scale(40),
    },
    userNameText: {
        fontFamily: config.Constant.Font_LIGHT,
        color: config.Constant.COLOR_DARK_BLACK,
        fontSize: scale(20),
        letterSpacing: 0.38,
        fontWeight: "500",
    },
    editText: {
        fontFamily: config.Constant.Font_Regular,
        color: config.Constant.COLOR_DARK_BLUE,
        fontSize: scale(10),
        letterSpacing: 0.5,
        marginTop: scale(-5)
    },
    semiHederview: { marginLeft: scale(10), flex: 1 },
    viewRow: { flexDirection: "row" },
    viewRowWithJus: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
    },
    viewRowWithJusMT20: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        marginTop: scale(20)
    },
    viewRowWithJusMV20: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        marginVertical: scale(20)
    },
    staticImages: {
        width: scale(30),
        height: scale(30),
    },
    staticText: {
        fontFamily: config.Constant.Font_Regular,
        color: config.Constant.COLOR_DARK_BLACK,
        fontSize: scale(12),
        marginHorizontal: scale(8),
        fontWeight: "normal",
        letterSpacing: 0.33,
    },
    ExclusiveText: {
        fontFamily: config.Constant.Font_Regular,
        color: config.Constant.COLOR_WHITE,
        fontSize: scale(10),
        letterSpacing: 0.05,
        fontWeight: "normal",
        letterSpacing: 0.33,
    },
    ExclusiveBTN: {
        paddingHorizontal: scale(7),
        paddingVertical: scale(5),
        borderRadius: scale(5),
        backgroundColor: config.Constant.COLOR_PRIMARY,
        // flex:1
    },
    smallImg: {
        width: scale(10),
        height: scale(5),
    },
    viewlast: {
        paddingVertical: scale(20),
        paddingHorizontal: scale(15),
    },
    catchview: {
        width: '100%',
        backgroundColor: config.Constant.COLOR_LIGHT_BLACK_DRAWER,
        paddingLeft: scale(30),
        paddingRight: scale(20),
        paddingVertical: scale(7),
        marginBottom: scale(20),
        marginTop: scale(-10)
    },
    M_top: { paddingVertical: scale(7) },
    liveSeccionsView: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        marginBottom: scale(20)
    },
    termsConditionView: { flex: 1, flexDirection: 'row' },
    termsConditionImg: { width: scale(9), height: scale(12) },
    termsConditionText: {
        fontFamily: config.Constant.Font_Regular,
        color: config.Constant.COLOR_DARK_BLACK,
        fontSize: scale(9),
        marginHorizontal: scale(4),
        fontWeight: "normal",
        letterSpacing: 0.24,
    },
    borderView: {
        width: '100%',
        backgroundColor: config.Constant.COLOR_DARK_GREY,
        opacity: 0.1,
        height: 1,
        alignSelf: 'center',
    },
    insideViewLine: {
        // backgroundColor: '#ececec',
        backgroundColor: config.Constant.COLOR_DARK_GREY,
        opacity: 0.08,
        height: 1,
        marginVertical: scale(5),
        marginLeft: scale(-10)
    },
});

export default CustomDrawer