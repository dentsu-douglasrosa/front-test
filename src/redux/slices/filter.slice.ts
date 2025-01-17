import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
    categoryIds: string[];
    authorIds: string[];
    searchQuery: string;
}

const initialState: FilterState = {
    categoryIds: [],
    authorIds: [],
    searchQuery: '',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryIds: (state, action: PayloadAction<string[]>) => {
            state.categoryIds = action.payload;
        },
        setAuthorIds: (state, action: PayloadAction<string[]>) => {
            state.authorIds = action.payload;
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
        resetFilters: (state) => {
            state.categoryIds = [];
            state.authorIds = [];
            state.searchQuery = '';
        },
    },
});

export const {
    setCategoryIds,
    setAuthorIds,
    setSearchQuery,
    resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
