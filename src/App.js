import { useEffect } from "react"
import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { Route, Routes, useNavigate } from "react-router-dom"

 import { ACCOUNT_TYPE } from "./utils/constants"
import { getUserDetails } from "./services/operations/profileAPI"
 //components
import Navbar from "./components/common/Navbar"
import OpenRoute from "./components/core/Auth/OpenRoute"
import MyProfile from "./components/core/Dashboard/MyProfile"
import PrivateRoute from "./components/core/Auth/PrivateRoute"
import Settings from "./components/core/Dashboard/Settings"
import PostNewJob from "./components/core/Dashboard/PostNewJob"
import PostedJob from "./components/core/Dashboard/PostedJob"
 
//Pages
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import VerifyEmail from "./pages/VerifyEmail"
import UpdatePassword from "./pages/UpdatePassword"
import ForgotPassword from "./pages/ForgotPassword"
import Dashboard from "./pages/Dashboard"
import NotFoundPage from "./pages/NotFoundPage"
 

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.profile)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"))
      dispatch(getUserDetails(token, navigate))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className="flex min-h-screen w-screen flex-col">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* Open Route for non logged in user */}
      <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />

          {/* Private Route - for Only Logged in User */}
        <Route 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
               
          }
        >
          {/* Route for all users */}
          <Route path="dashboard/my-profile" element={<MyProfile/>} />
          <Route path="dashboard/Settings" element={<Settings/>} />

           {/* Route only for Creator */}
          {user?.accountType === ACCOUNT_TYPE.CREATOR && (
            <>
              <Route path="dashboard/post-newjob" element={<PostNewJob/>} />
              <Route path="dashboard/posted-job" element={<PostedJob/>} />
            </>
          )}

        </Route>
       
        <Route path="*" element={<NotFoundPage/>} />
    </Routes>
</div>
  );
}

export default App;
