import { configureStore } from '@reduxjs/toolkit'
import testSlice from './features/testSlice'

// 创建store容器对象
const store = configureStore({
    reducer: {
        test: testSlice
    }
})

export default store;