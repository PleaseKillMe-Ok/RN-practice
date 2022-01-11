import React,  {useState } from 'react';
import { View, Text, Button } from 'react-native';

/*
  首页组件
*/
function HomeScreen ({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title="去首页" onPress={() => {
                // 每次都会将Prepare的Screen推入导航stack中
                // navigation.push('Prepare');
                // 只在stack中不存在该导航的时候才推入
                navigation.navigate('Test2', {id: 91, name: 'syz'})
            }}></Button>
        </View>
    )
}

export default HomeScreen;