import React from 'react';
import { StyleSheet, Text, View, Button,Image  } from 'react-native';

const UserDetails = ({ route,navigation })  => {
    const {userlogin,avatar} = route.params;
    return (
        <View >
            <Text>User Details Screen</Text>
            <Text>Login : {userlogin}</Text>
            <Text>Image :{avatar}</Text>
            <Image
             source={avatar}
             style={{ width: 200, height: 200 }}
            />
      
            <Button title="Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Retour" onPress={() => navigation.goBack()} />
        </View>
    );
};

export default UserDetails;