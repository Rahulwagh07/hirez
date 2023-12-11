import { useEffect } from "react"
import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { Route, Routes, useNavigate } from "react-router-dom"

 import { ACCOUNT_TYPE } from "./utils/constants"

 //components
import Navbar from "./components/common/Navbar"
import OpenRoute from "./components/core/Auth/OpenRoute"
 


//Pages
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import VerifyEmail from "./pages/VerifyEmail"
import UpdatePassword from "./pages/UpdatePassword"
import ForgotPassword from "./pages/ForgotPassword"


function App() {

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
    </Routes>
</div>
  );
}

export default App;
