import { BrowserRouter, HashRouter } from "react-router-dom"
import NavBar from "./assets/components/NavBar"
import Footer from "./assets/components/Footer"
function App() {

  return (
    <div>
      <HashRouter>
      <NavBar/>
      </HashRouter>
      <Footer/>
    </div>
  )
}

export default App
