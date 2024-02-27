import Signin from "./pages/Signin"
import Register from "./pages/Register"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Home" element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App
