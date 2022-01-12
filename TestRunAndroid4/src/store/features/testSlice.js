import { createSlice } from '@reduxjs/toolkit'

// 不同的状态"分片"管理
export const testSlice = createSlice({
    name: 'test', // 用于独立每一个slice
    initialState: { // 默认值, 初始化state
        value: 0
    },
    // 定义状态处理函数
    reducers: {
        incremented: state => {
            state.value += 1;
        },
        decremented: state => {
            state.value -= 1;
        }
    }
});

// 解构赋值, 暴露处理函数
export const { incremented, decremented } = testSlice.actions;
// 暴露reducer, 用于创建store
export default testSlice.reducer;