import { BrowserRouter, HashRouter } from "react-router-dom"
import NavBar from "./assets/components/NavBar"
function App() {

  return (
    <div>
      <HashRouter>
      <NavBar/>
      </HashRouter>
    </div>
  )
}

export default App
