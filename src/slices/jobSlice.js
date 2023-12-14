import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  job: null,
  editJob: false,
  paymentLoading: false,
}

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJob: (state, action) => {
      state.job = action.payload
    },
    setEditJob: (state, action) => {
      state.editJob = action.payload
    },
    setPaymentLoading: (state, action) => {
      state.paymentLoading = action.payload
    },
    resetCourseState: (state) => {
      state.job = null
      state.editJob = false
    },
  },
})

export const {
  setJob,
  setEditJob,
  setPaymentLoading,
  resetJobState,
} = jobSlice.actions

export default jobSlice.reducer