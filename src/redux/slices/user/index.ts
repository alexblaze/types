// userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserDetails {
  jwt: string | null;
  status: boolean;
}

const initialState: UserDetails = {
  jwt: null,
  status: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserDetails>) => {
      const { jwt, status } = action.payload;
      state.jwt = jwt;
      state.status = status;
    },
  },
});

export const { setUser } = userSlice.actions;
export const selectUser = (state: { user: UserDetails }) => state.user;

export default userSlice.reducer;
