import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';


const iconColor = '#6c5ce7';
const userCard = ({ info }) => {
    const { login, id } = info;

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.infoStyle}>
                    <Text style={styles.loginStyle}>{login}</Text>
                    <Text style={styles.idStyle}>{id}</Text>

                </View>
            </View>
        </View>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
    container: {
        width: deviceWidth - 20,
        alignItems: 'center',
        marginTop: 25,
    },
    cardContainer: {
        width: deviceWidth - offset,
        backgroundColor: '#D3D3D3',
        height: 200,
        borderRadius: radius,

        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
    },
    imageStyle: {
        height: 130,
        width: deviceWidth - offset,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        opacity: 0.9,
        alignContent: 'center',
        alignSelf: 'center',
    },
    loginStyle: {
        fontSize: 20,
        fontWeight: '800',
    },
    idStyle: {
        fontWeight: '200',
    },
    infoStyle: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
});

export default userCard;
