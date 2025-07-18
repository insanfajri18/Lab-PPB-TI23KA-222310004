import React, { Component } from 'react';
import {View, StyleSheet, Image, Text, SafeAreaView} from 'react-native';

class Soal3 extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={styles.container}>
                    <Image 
                        source={require('../assets/LOGO_IBIK.png')}
                        style={{ width:83, height:80, backgroundColor: 'purple'}}/>
                </View>
                <Text style={styles.textLoad}>Loading...</Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
    },
    textLoad: {
        color: 'black',
        backgroundColor: 'purple',
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 70,
    }
});

export default Soal3;