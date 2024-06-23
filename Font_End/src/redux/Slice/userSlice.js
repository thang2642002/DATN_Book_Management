import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  access_token: "",
  address: "",
  phone: "",
  avatar: "",
  id: "",
  isAdmin: false,
  refreshToken: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const {
        username = "",
        email = "",
        access_token = "",
        address = "",
        phone = "",
        avatar = "",
        id = "",
        role = "",
        refreshToken = "",
      } = action.payload;
      state.username = username ? username : state.username;
      state.email = email ? email : state.email;
      state.address = address ? address : state.address;
      state.phone = phone ? phone : state.phone;
      state.avatar = avatar ? avatar : state.avatar;
      state.id = id ? id : state.id;
      state.access_token = access_token ? access_token : state.access_token;
      state.role = role ? role : state.role;
      state.refreshToken = refreshToken ? refreshToken : state.refreshToken;
      console.log("acctions:", action);
    },
    resetUser: (state) => {
      state.username = "";
      state.email = "";
      state.address = "";
      state.phone = "";
      state.avatar = "";
      state.id = "";
      state.access_token = "";
      state.role = "";
      state.refreshToken = "";
    },
  },
});

export const { updateUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
