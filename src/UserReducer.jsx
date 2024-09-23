import { createSlice } from "@reduxjs/toolkit";
//step9
import { userList } from "./Data";

const userSlice = createSlice({
  name: "users",
  initialState: {
    //step 10
    userList,
  },
  reducers: {
    addUser: (state, action) => {
      state.userList.push(action.payload);
      console.log(state, action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const CheckupdateUser = state.userList.find((user) => user.id == id);
      if (CheckupdateUser) {
        updateUser.name = name;
        updateUser.email = email;
      }
    },
  },
});

export const { addUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
