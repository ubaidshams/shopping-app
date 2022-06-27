import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    currentUser:{}
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        createCurrentUser: (state, action) => {
            state.currentUser=action.payload
        }
    }
})

export default userSlice.reducer;
export let {createCurrentUser}=userSlice.actions