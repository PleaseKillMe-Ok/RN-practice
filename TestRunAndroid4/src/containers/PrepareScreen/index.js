import React from 'react';
import { View, Text } from 'react-native';

/*
  预热页
*/
function PrepareScreen () {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>首页组件动态加载过程中需要做的事情</Text>
        </View>
    )
}

export default PrepareScreen;