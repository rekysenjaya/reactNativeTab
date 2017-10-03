import React from 'react';
import {
    Animated,
    Platform,
    StatusBar,
    TouchableOpacity,
    Text,
    View,
    Slider,
    Image,
    StyleSheet,
    ScrollView,
    Dimensions,
    TextInput
} from "react-native";
import TabNavigator from 'react-native-tab-navigator';
import { Icon, Card, Button } from 'react-native-elements';

import Home from '../pages/home';

export default class Tab extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'home',
            pageLast: 'home'
        }
    }

    onBack() {
        this.setState({ page: this.state.pageLast })
    }

    render() {

        return (
            <TabNavigator>
                <TabNavigator.Item
                    color="black"
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    renderIcon={() => <Icon name='home' color="#efefef" />}
                    renderSelectedIcon={() => <Icon name='home' color="#000000" />}
                    badgeText="1"
                    onPress={() => {
                        this.setState({ pageLast: this.state.selectedTab })
                        this.setState({ selectedTab: 'home' })
                    }}>
                    {<Home/>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'maps'}
                    title="maps"
                    renderIcon={() => <Icon name='map' color="#efefef" />}
                    renderSelectedIcon={() => <Icon name='map' color="#000000" />}
                    badgeText="1"
                    onPress={() => {
                        this.setState({ pageLast: this.state.selectedTab })
                        this.setState({ selectedTab: 'maps' })
                    }}>
                    {<View><Text>Maps</Text></View>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'share'}
                    title="Share"
                    renderIcon={() => <Icon name='add-location' color="#efefef" />}
                    renderSelectedIcon={() => <Icon name='add-location' color="#000000" />}
                    onPress={() => {
                        this.setState({ pageLast: this.state.selectedTab })
                        this.setState({ selectedTab: 'share' })
                    }}>
                    {<View><Text>Location</Text></View>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="Profile"
                    renderIcon={() => <Icon name='person' color="#efefef" />}
                    renderSelectedIcon={() => <Icon name='person' color="#000000" />}
                    onPress={() => {
                        this.setState({ pageLast: this.state.selectedTab })
                        this.setState({ selectedTab: 'profile' })
                    }}>
                    {<View><Text>Profile</Text></View>}
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}

