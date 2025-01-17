import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from 'src/types/posts.type';

interface PostState {
    posts: Post[];
}

const initialState: PostState = {
    posts: [],
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload;
        },
        resetPosts: (state) => {
            state.posts = [];
        },
    },
});

export const {
    setPosts,
    resetPosts,
} = postsSlice.actions;

export default postsSlice.reducer;
