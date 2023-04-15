import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    isSending: false,
    error: false,
  },

  reducers: {
    signupStart: state => {
      state.isSending = true;
    },
    signupSuccess: (state, action) => {
      state.isSending = false;
      state.currentUser = action.payload;
    },
    signupFailure: state => {
      state.isSending = false;
      state.error = true;
    },

    loginStart: state => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: state => {
      state.isFetching = false;
      state.error = true;
    },
  },
  extraReducers: () => {},
});

export const userReducer = userSlice.reducer;
export const {
  signupStart,
  signupSuccess,
  signupFailure,
  loginStart,
  loginFailure,
  loginSuccess,
  reset,
} = userSlice.actions;
