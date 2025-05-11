import { BrowserRouter, HashRouter, Router, Routes , Route} from "react-router-dom"
import NavBar from "./assets/components/NavBar"
import Footer from "./assets/components/Footer"
import Home from "./assets/components/Home"
import Register from "./assets/components/Register"
import Login from "./assets/components/Login"
import Profile from "./assets/components/Profile"
import ProductList from "./assets/components/ProductList"
import About from "./assets/components/About"
function App() {

  return (
    <div>
      <HashRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/product/:id?/:search?" element={<About/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  )
}

export default App
