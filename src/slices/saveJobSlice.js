import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

const initialState = {
  saveJob: localStorage.getItem("saveJob")
    ? JSON.parse(localStorage.getItem("saveJob"))
    : [],
    totalJobs: localStorage.getItem("totalJobs")
    ? JSON.parse(localStorage.getItem("totalJobs"))
    : 0,
}

const saveJobSlice = createSlice({
  name: "saveJob",
  initialState,
  reducers: {
    addToSavedJob: (state, action) => {
      const job = action.payload
      const index = state.saveJob.findIndex((item) => item._id === job._id)

      if (index >= 0) {
        // If the course is already in the cart, do not modify the quantity
        toast.error("Job already saved")
        return
      }
      // If the course is not in the cart, add it to the cart
      state.saveJob.push(job)
      // Update the total quantity 
      state.totalJobs++
      // Update to localstorage
      localStorage.setItem("saveJob", JSON.stringify(state.saveJob))
      localStorage.setItem("totalJobs", JSON.stringify(state.totalJobs))
      // show toast
      toast.success("Job saved successfully")
    },
    removeFromSavedJob: (state, action) => {
      const jobId = action.payload
      const index = state.saveJob.findIndex((item) => item._id === jobId)

      if (index >= 0) {
        // If the course is found in the cart, remove it
        state.totalJobs--
        state.saveJob.splice(index, 1)
        // Update to localstorage
        localStorage.setItem("saveJob", JSON.stringify(state.saveJob))
        localStorage.setItem("totalJobs", JSON.stringify(state.totalJobs))
        // show toast
        toast.success("Job unsaved successfully")
      }
    },
    resetSavedJob: (state) => {
      state.saveJob = []
      state.totalJobs = 0
      // Update to localstorage
      localStorage.removeItem("saveJob")
      localStorage.removeItem("totalJobs")
    },
  },
})

export const { addToSavedJob, removeFromSavedJob, resetSavedJob } = saveJobSlice.actions

export default saveJobSlice.reducer