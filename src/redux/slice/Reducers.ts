import { combineReducers } from '@reduxjs/toolkit'
import { counterSlice } from './CounterSlice'
import { postsSlice } from './PostSlice'

export interface RootState {
    counter: ReturnType<typeof counterSlice.reducer>
    posts: ReturnType<typeof postsSlice.reducer>
}

export const rootReducer = combineReducers({
    counter: counterSlice.reducer,
    posts: postsSlice.reducer,
})
