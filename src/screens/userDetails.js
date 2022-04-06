import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, Button } from 'react-native';

const UserDetails = ({ navigation }) => {
    return (
        <View >
            <Text>User Details Screen</Text>
            <Button title="Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Retour" onPress={() => navigation.goBack()} />
        </View>
    );
};

export default UserDetails;