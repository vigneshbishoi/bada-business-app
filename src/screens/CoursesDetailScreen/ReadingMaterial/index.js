import React, { useState, useEffect } from 'react';
import { View, Image, Pressable, Text, Modal, Dimensions, SafeAreaView, ScrollView, } from 'react-native';
import { scale } from 'react-native-size-matters';
import config from '../../../config';
import images from '../../../config/Images'
import styles from './style'
import { WebView } from 'react-native-webview'
import PDFView from 'react-native-view-pdf';

const ReadingMaterial = ({ props, Close, Data, Title }) => {

    const resources = {
        file: Platform.OS === 'ios' ? 'downloadedDocument.pdf' : '/sdcard/Download/downloadedDocument.pdf',
        url: Data,
        base64: 'JVBERi0xLjMKJcfs...',
    };

    const resourceType = 'url';

    return (
        <Modal transparent={true} visible={true}
            statusBarTranslucent={false}>
            <SafeAreaView style={styles.Contact}>
                <ScrollView style={styles.Contact}
                    showsVerticalScrollIndicator={false}>
                    <View style={styles.Contact}>
                        <View style={[styles.LinearSty,
                        styles.semiView]}>
                            <Pressable onPress={Close}
                                style={styles.backImgBtn}>
                                <Image style={styles.backImg}
                                    source={images.BackIcon} resizeMode={'cover'} />
                            </Pressable>
                            <Text style={styles.titleText}>
                                {Title}</Text>
                        </View>
                        <View style={styles.mainTextView}>
                            {/* Some Controls to change PDF resource */}
                            <PDFView
                                // fadeInDuration={250.0}
                                style={{

                                    height: Dimensions.get('screen').height - scale(140),
                                    width: Dimensions.get('screen').width
                                }}
                                resource={resources[resourceType]}
                                resourceType={resourceType}
                                onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
                                onError={(error) => console.log('Cannot render PDF', error)}
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Modal>

    )
};

export default ReadingMaterial
