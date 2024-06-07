import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  access_token: "",
  address: "",
  phone: "",
  avatar: "",
  _id: "",
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
        _id = "",
        isAdmin,
        refreshToken = "",
      } = action.payload;
      state.username = username ? username : state.username;
      state.email = email ? email : state.email;
      state.address = address ? address : state.address;
      state.phone = phone ? phone : state.phone;
      state.avatar = avatar ? avatar : state.avatar;
      state.id = _id ? _id : state.id;
      state.access_token = access_token ? access_token : state.access_token;
      state.isAdmin = isAdmin ? isAdmin : state.isAdmin;
      state.refreshToken = refreshToken ? refreshToken : state.refreshToken;
      console.log("acctions:", action);
    },
    resert: (state) => {
      state.username = "";
      state.email = "";
      state.address = "";
      state.phone = "";
      state.avatar = "";
      state.id = "";
      state.access_token = "";
      state.isAdmin = "";
      state.refreshToken = "";
    },
  },
});

export const { updateUser, resert } = userSlice.actions;
export default userSlice.reducer;
