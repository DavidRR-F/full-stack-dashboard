import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  screenSize: null,
  isBelowThreshold: false,
  mode: "dark",
  userId: "63701cc1f03239b7f700000e",
}

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light"
    },
    setScreenSize: (state, action) => {
      state.screenSize = action.payload
      state.isBelowThreshold = action.payload < 800
    },
  },
})

export const { setMode, setScreenSize } = globalSlice.actions

export default globalSlice.reducer
