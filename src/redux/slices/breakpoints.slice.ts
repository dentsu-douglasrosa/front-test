import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BreakpointsState {
    isMobile: boolean
}

const initialState: BreakpointsState = {
    isMobile: false,
};

const breakpointsSlice = createSlice({
    name: 'breakpoints',
    initialState,
    reducers: {
        setIsMobile: (state, action: PayloadAction<boolean>) => {
            state.isMobile = action.payload;
        },
    },
});

export const {
    setIsMobile,
} = breakpointsSlice.actions;

export default breakpointsSlice.reducer;
