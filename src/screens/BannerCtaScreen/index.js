import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Pressable, Image, ScrollView } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { scale } from 'react-native-size-matters';
import config from '../../config';
import images from '../../config/Images';
import styles from './styles';

export default function BannerCtaScreen(props) {
    const [Content, setContent] = useState('');
    const [TitleTxt, setTitleTxt] = useState('');

    useEffect(() => {
        !!props.route.params?.title ? setTitleTxt(props.route.params?.title) : null
        !!props.route.params?.data ? setContent(props.route.params?.data) : null
    }, []);

    const Header = () => {
        return (
            <View style={[styles.LinearSty]}>
                <Pressable
                    onPress={() => props.navigation.goBack()}
                    style={styles.backImgBtn}>
                    <Image
                        style={styles.backImg}
                        source={images.BackIcon}
                        resizeMode={'cover'}
                    />
                </Pressable>
                <Text style={styles.cartTxt}>{TitleTxt}</Text>
                <Ripple style={styles.btnView}></Ripple>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {Header()}
            <View style={styles.innerView}>
                <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
                    {!!Content.cta_image && <Image style={styles.imageViewStyle} source={{ uri: Content.cta_image }} />}
                    {!!Content.cta_description && 
                        <Text style={styles.descTextStyle}>{Content.cta_description}</Text>
                    }
                </ScrollView>
            </View>
        </View>
    );
}
