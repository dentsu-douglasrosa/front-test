import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filter.slice';
import postsReducer from './slices/posts.slice';

const store = configureStore({
    reducer: {
        filter: filterReducer,
        posts: postsReducer,
    },
});

export default store;
