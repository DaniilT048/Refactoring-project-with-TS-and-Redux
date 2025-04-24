import { createSlice } from '@reduxjs/toolkit';

interface ThemeSlice {
    theme: 'dark' | 'light';
}

const initialState: ThemeSlice = {
    theme: 'dark',
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers:{
        toggleTheme(state){
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;