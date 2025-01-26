import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filter.slice';
import postsReducer from './slices/posts.slice';
import breakpointsReducer from './slices/breakpoints.slice';

const store = configureStore({
    reducer: {
        filter: filterReducer,
        posts: postsReducer,
        breakpoints: breakpointsReducer,
    },
});

export default store;
