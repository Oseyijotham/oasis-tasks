import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  updateAvatar,
  getUser,
} from './operations';

const initialState = {
  user: { firstname: null, lastname: null, email:null, phone:null, avatarURL:null, groups:null },
  token: null,
  isLoggedIn: false,
  isRegistered: false,
  isRefreshing: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        //state.token = action.payload.token;
        state.isRegistered = true;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload.avatarURL;
        //state.token = action.payload.token;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        //state.isRegistered = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = {
          firstname: null,
          lastname: null,
          email: null,
          phone: null,
          avatarURL: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.isRegistered = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
      });
  },
});

export const authReducer = authSlice.reducer;
