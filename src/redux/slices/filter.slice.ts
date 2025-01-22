import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type SortTypes } from 'src/types/filters.type';

interface FilterState {
    categoryIds: string[];
    authorIds: string[];
    searchQuery: string;
    sortType: SortTypes;
}

const initialState: FilterState = {
    categoryIds: [],
    authorIds: [],
    searchQuery: '',
    sortType: "newest",
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
        setSortType: (state, action: PayloadAction<SortTypes>) => {
            state.sortType = action.payload;
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
    setSortType,
    resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
