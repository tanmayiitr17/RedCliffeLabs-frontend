import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: null,
        userOrders: [],
    },
    reducers: {
        adduserInfo: (state, action) => {
            state.userInfo = action.payload;
        },
        addUserOrders: (state, action) => {
            state.userOrders.push(action.payload);
        },
    }
})

export const { addUserInfo, addUserOrders } = userSlice.actions;
export default userSlice.reducer;