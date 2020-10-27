import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TAuthState = {
  status: number,
  message: string
}

const initialState: TAuthState = {
  status: 0,
  message: ""
}

const sliceAuthAndReg = createSlice({
  name: 'AUTHORIZATION',
  initialState,
  reducers: {
    SET(state, { payload }: PayloadAction<TAuthState>) {
      state = payload;
    }
  },
})

export const { SET } = sliceAuthAndReg.actions;
export default sliceAuthAndReg.reducer;