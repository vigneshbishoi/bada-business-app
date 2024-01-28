import React, { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Header, Search_Call, Add_To_Cart, SaveAndUnsaveHandle } from '../../component/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    setBanner,
    setCategoriesPsc6,
    setCategoriesPsc,
    setCategoriesEae,
    setRecommendedCourses,
    setCoutinueYourCourses,
    setKeywordSearch,
    setSaveGetList,
    setSaveCarts
} from '../../Redux/actions/homeData'

function ChatScreen(props) {

    useEffect(() => {

    }, []);

    return (
        <View style={styles.container}>
            <Header PressDrawer={() => props.navigation.openDrawer()} CartCount={props?.homeData?.savecarts}/>
        </View>
    );
}
//---- Connect to props functions and values -----//
function mapStateToProps({ userData, homeData }) {
    return { userData, homeData };
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({
        setBanner,
        setCategoriesPsc6,
        setCategoriesPsc,
        setCategoriesEae,
        setRecommendedCourses,
        setCoutinueYourCourses,
        setKeywordSearch,
        setSaveGetList,
        setSaveCarts
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen)