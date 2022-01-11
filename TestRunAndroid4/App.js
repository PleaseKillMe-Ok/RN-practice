/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { lazy, Suspense, useState, useLayoutEffect } from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
} from 'react-native';
import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';

import Config from './src/config/DebugConfig';
import { NavigationContainer } from '@react-navigation/native';
// 需先安装yarn add react-native-screens react-native-safe-area-context依赖包
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer';

// 导入组件
const HomeScreen = lazy(() => import('~/src/containers/HomeScreen'));
const Nested1 = lazy(() => import('~/src/containers/Nested/Nested1'));
const Nested2 = lazy(() => import('~/src/containers/Nested/Nested2'));

const PrepareScreen = lazy(() => import('~/src/containers/PrepareScreen'));


// 配置Reactron插件
if (Config.useReactotron) {
  import ('~/src/config/ReactotronConfig').then(() => console.log('Reactron Configure'))
}

// 创建顶部导航栏
const Stack = createNativeStackNavigator();
// 创建底部导航栏
const Tab = createBottomTabNavigator();
// 创建抽屉式导航栏
// const Drawer = createDrawerNavigator();

// 嵌套导航组件
function Nesteds () {
  return (
    <Tab.Navigator>
      <Tab.Screen name="nested1666" component={Nested1}></Tab.Screen>
      <Tab.Screen name="nested2666" component={Nested2}></Tab.Screen>
    </Tab.Navigator>
  )
}


// 图片组件
function Test() {
  return (
    <Image
      style={{ width: 50, height: 50}}
      source={require('~/static/leftcircle.png')}></Image>
  )
}

function Test2 ({ navigation, route }) {

  const [count, setCount] = useState(0);

  // 在dom渲染前调用, 可阻塞渲染过程
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" style={{ color: "#fff"}}/>
      )
    })
  }, [navigation]);

  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>id: {route.params?.id} </Text>
          <Text>name: {route.params?.name} </Text>
          <Text>不断将screen推入导航栈</Text>
          <Button title='进入Test2' onPress={() => {
            navigation.push('Test2');
          }}></Button>
          <Button title='返回到上一层screen' onPress={() => {
            navigation.goBack();
          }}></Button>
          <Button title="返回到顶层screen" onPress={() => {
            navigation.popToTop();
          }}></Button>
          <Button title="更新title" onPress={() => {
            navigation.setOptions({title: 'nb'})
          }}></Button>
          <Button title="进入嵌套页" onPress={() => {
            navigation.navigate('Nested', { screen: 'nested2666'});
          }}></Button>
          <Text>数值为:{count}</Text>
      </View>
  )
}


const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <NavigationContainer>
      {/* 处理懒加载的组件, 在组件渲染过程中执行fallback对应的组件 */}
      <Suspense fallback={<Test />}>
        <Stack.Navigator 
          initialRouteName='Home'
          screenOptions={{
            headerShown: false,  // 不显示头部信息, 指定为false后, 其他header设置无效
            title: 'test2',      
            headerStyle: {
              backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: '首页'}}/>
            <Stack.Screen name="Prepare" component={PrepareScreen} options={{ title: '预热页'}}/>

            <Stack.Screen 
              name="Test2" 
              component={Test2}
              options={{ 
                headerTitle: (props) => <Test {...props} />,
                headerRight: (props) => (
                  <Button
                    title="按钮"
                    color="#fff">
                  </Button>
                )
              }}
              />
              {/* 嵌套 */}
              <Stack.Screen name="Nested" component={Nesteds} options={{headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
      </Suspense>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
