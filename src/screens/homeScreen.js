import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';

import Header from '../components/header';
import Card from '../components/userCard';


const users = [
    {
        login: "mojombo",
        id: 1,
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        url: "https://api.github.com/users/mojombo",
        html_url: "https://github.com/mojombo",
        followers_url: "https://api.github.com/users/mojombo/followers",
        following_url: "https://api.github.com/users/mojombo/following{/other_user}",
    },
    {
        login: "defunkt",
        id: 2,
        avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
        url: "https://api.github.com/users/defunkt",
        html_url: "https://github.com/defunkt",
        followers_url: "https://api.github.com/users/defunkt/followers",
        following_url: "https://api.github.com/users/defunkt/following{/other_user}",
    },
];
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Header label="Users App" />
            {/* <Card /> */}
            <StatusBar barStyle="dark-content" />

            <FlatList
                data={users}
                renderItem={({ item }) => {
                    return <Card info={item} />;
                }}
                keyExtractor={(user) => user.id.toString()}
                showsVerticalScrollIndicator={false}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6c5ce7',
        alignItems: 'center',
        // justifyContent: 'center',
    },
});
export default HomeScreen;