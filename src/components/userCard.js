import React from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { Button } from 'react-native-web';



const userCard = ({ info }) => {
    const { login, id, url } = info;

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.infoStyle}>
                    <Text style={styles.loginStyle}>{login}</Text>
                    <Text style={styles.idStyle}>Id : {id}</Text>
                    <Text style={styles.urlStyle}>Url : {url}</Text>
                    <Pressable style={styles.buttonSubmit} >
                        <Text style={styles.urlStyle}>More Info</Text>
                    </Pressable>
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
        height: 150,
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
    loginStyle: {
        fontSize: 20,
        fontWeight: '800',
        textAlign: 'center',
    },
    idStyle: {
        fontWeight: '200',
        textAlign: 'center',
    },
    infoStyle: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
    buttonSubmit: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 3,
        paddingHorizontal: 12,
        borderRadius: 4,
        margin: 30,
        elevation: 3,
        backgroundColor: 'white',
    },
    urlStyle: {
        color: 'black',
        textAlign: 'center',
    }

});

export default userCard;
