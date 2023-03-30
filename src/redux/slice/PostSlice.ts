import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface Post {
    id: number
    title: string
    body: string
}

interface PostsState {
    data: Post[]
    loading: boolean
    error: string | null
}

const initialState: PostsState = {
    data: [],
    loading: false,
    error: null,
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
    )
    return response.data
})

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || null
            })
    },
})
