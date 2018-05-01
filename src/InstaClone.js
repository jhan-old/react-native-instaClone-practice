import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { MainFeed, Login, Camera, Profile } from './components/screens';
import { SwitchNavigator, TabNavigator } from 'react-navigation';


const Tabs = TabNavigator({
    feed: MainFeed,
    camera: Camera,
    profile: Profile
});

const MainStack = SwitchNavigator({
    login: Login,
    main: Tabs
});

class InstaClone extends Component {
    render() {
        return <MainStack />;
    }
}

export default InstaClone;