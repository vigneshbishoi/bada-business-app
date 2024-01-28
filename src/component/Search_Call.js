import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Pressable, Text, TextInput } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../config';
import images from '../config/Images'
import { Search, Recording } from '../assets/svg/index'
import voice from '@react-native-voice/voice'

const Search_Call = ({ PressSearch, props, PressOnMic, search, checkMicColor, Back, searchText,
    PressMic, _onSpeechResults, _onSpeechEnd }) => {

    useEffect(async () => {

        function onSpeechResults(e) {
            _onSpeechResults(e)
        }

        async function onSpeechEnd(e) {
            _onSpeechEnd()
        }

        voice.onSpeechResults = onSpeechResults;
        voice.onSpeechEnd = onSpeechEnd;
        return (voice.destroy().then(voice.removeAllListeners).catch(e => {
            console.log("UNABLE TO DESTROY");
            console.log(e.error)
        }))
    }, [])

    return (
        <View style={styles.mainView}>
            <Pressable onPress={PressSearch}
                style={styles.mainBtn}>
                <Image style={styles.searchImg}
                    source={images.Search} resizeMode={'cover'} />
                <Text style={[styles.textSty,
                { opacity: search == '' ? 0.6 : 1 }]}>{search == '' ?
                    config.I18N.t('Search_Call_Search_for_courses') :
                    search}</Text>
            </Pressable>

            <Pressable onPress={PressOnMic} style={styles.recordBtn}>
                <Image style={[styles.record, {
                    tintColor: checkMicColor ? config.Constant.COLOR_RED
                        : config.Constant.COLOR_DRAWER_LIGHT
                }]}
                    source={images.Recording} resizeMode={'cover'} />
            </Pressable>

            {/* <View style={styles.semiView}>
<Pressable onPress={Back} style={styles.backImgBtn}>
    <Image style={styles.backImg}
        source={images.BackIcon} resizeMode={'cover'} />
</Pressable>
<TextInput
    style={[styles.textInputSty,
    {
        opacity: 1
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
{search != '' ?
    <Pressable onPress={() => setSearch('')} style={styles.recodeBtn}>
        <Image style={styles.closeImg}
            source={images.CloseIcon} resizeMode={'cover'} />
    </Pressable> :
    <Pressable onPress={PressMic} style={styles.recodeBtn}>
        <Image style={[styles.recodeImg, {
            tintColor: checkMicColor ? config.Constant.COLOR_RED
                : config.Constant.COLOR_DRAWER_LIGHT
        }]}
            source={images.Recording} resizeMode={'cover'} />
    </Pressable>}
</View> */}
        </View >


    )
};

const styles = StyleSheet.create({
    mainView: {
        marginHorizontal: scale(15),
        height: scale(36),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: scale(5),
        backgroundColor: config.Constant.COLOR_LIGHT_BLACK_DRAWER
    },
    searchImg: {
        width: scale(15),
        height: scale(15),
        marginLeft: scale(15),
        tintColor: config.Constant.COLOR_DRAWER_DARK
    },
    textSty: {
        fontSize: config.Constant.Font_Size_12,
        color: config.Constant.COLOR_DARK_GREY,
        letterSpacing: 0.03,
        opacity: 0.6,
        fontFamily: config.Constant.Font_Regular,
        flex: 1, marginLeft: scale(10), marginTop: scale(10),
        marginBottom: scale(7),
        fontWeight: 'normal'
    },
    record: {
        width: scale(10.5),
        height: scale(15),
        tintColor: config.Constant.COLOR_DRAWER_LIGHT
    },
    recordBtn: {
        paddingHorizontal: scale(15),
        paddingVertical: scale(6),
    },
    mainBtn: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center", flex: 1
    },
    semiView: {
        height: scale(36),
        marginTop: scale(15),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: scale(5),
        backgroundColor: config.Constant.COLOR_WHITE
    },
    backImgBtn: {
        marginLeft: scale(5),
        width: scale(35),
        justifyContent: "center",
        height: scale(36)
    },
    backImg: {
        width: scale(12),
        height: scale(12), marginLeft: scale(10),
        tintColor: config.Constant.COLOR_DARK_GREY
    },
    textInputSty: {
        flex: 1, fontSize: config.Constant.Font_Size_12,
        fontFamily: config.Constant.Font_Regular,
        margin: 0, padding: 0,
        fontWeight: "normal",
        letterSpacing: 0.33,
        color: config.Constant.COLOR_DARK_GREY
    },
    recodeBtn: {
        marginRight: scale(5),
        width: scale(35),
        justifyContent: "center",
        height: scale(36),
        alignItems: "flex-end"
    },
    recodeImg: {
        width: scale(10.2),
        height: scale(15.1),
        marginRight: scale(10),
        tintColor: config.Constant.COLOR_DRAWER_LIGHT
    },
    closeImg: {
        width: scale(10),
        height: scale(10),
        marginRight: scale(10),
        tintColor: config.Constant.COLOR_DRAWER_LIGHT
    },
});

export default Search_Call

