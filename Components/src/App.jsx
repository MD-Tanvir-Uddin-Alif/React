import { BrowserRouter, HashRouter, Router, Routes , Route} from "react-router-dom"
import NavBar from "./assets/components/NavBar"
import Footer from "./assets/components/Footer"
import Home from "./assets/components/Home"
import Register from "./assets/components/Register"
import Login from "./assets/components/Login"
function App() {

  return (
    <div>
      <HashRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  )
}

export default App
