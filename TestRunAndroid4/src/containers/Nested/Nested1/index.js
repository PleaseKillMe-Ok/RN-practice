import React,  {useState } from 'react';
import { View, Text, Button } from 'react-native';

/*
  首页嵌套组件1
*/
function HomeNested1 ({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Nested1</Text>
        </View>
    )
}

export default HomeNested1;