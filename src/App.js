import { useEffect } from "react"
import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { Route, Routes, useNavigate } from "react-router-dom"

 import { ACCOUNT_TYPE } from "./utils/constants"

 //components
 import Home from "./pages/Home"
function App() {

  return (
    <div className="flex min-h-screen w-screen flex-col">
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
</div>
  );
}

export default App;
