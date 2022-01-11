/*
    Reactotron的配置, 用于实时监听react-native的异步请求消息
*/
import Reactotron from "reactotron-react-native";

Reactotron
    .configure({name: 'intellectual music'})  // 设置连接的配置 
    .useReactNative()  // 则更加react-native构建用到的插件
    .connect() // 建立连接

