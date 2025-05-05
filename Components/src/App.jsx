import { BrowserRouter, HashRouter, Router, Routes } from "react-router-dom"
import NavBar from "./assets/components/NavBar"
import Footer from "./assets/components/Footer"
import Home from "./assets/components/Home"
import Register from "./assets/components/Register"
function App() {

  return (
    <div>
      <HashRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
      </HashRouter>
      <Footer/>
    </div>
  )
}

export default App
