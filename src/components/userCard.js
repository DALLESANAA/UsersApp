import React from 'react';
import { View, Text, StyleSheet, Dimensions,Button } from 'react-native';


const userCard = ({ info, navigation }) => {
    const { login, id } = info;

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.infoStyle}>
                    <Text style={styles.idStyle}>Id :{id}</Text>
                    <Text style={styles.loginStyle}>Name : {login}</Text>

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
        backgroundColor: '#F2F6FF',
        height: 120,
        borderRadius: radius,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 3,
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
    followersStyle: {
        fontWeight: '600',
    }
});

export default userCard;
