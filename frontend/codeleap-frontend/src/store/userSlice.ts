import {createSlice, type PayloadAction} from  '@reduxjs/toolkit';

const getInitialUsername = () => {
  return localStorage.getItem('codeleap_username') || "";
};

interface UserState {
  username: string;
}

const initialState: UserState = {
  username: getInitialUsername(),
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
            localStorage.setItem('codeleap_username', action.payload);
        },
        logout: (state) => {
            state.username = '';
            localStorage.removeItem('codeleap_username');
        }
    }
});

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;