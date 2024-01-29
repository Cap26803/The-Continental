import Navbar from "./Navbar"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Rooms from "./pages/Rooms"
import Diwali from "./pages/Diwali"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />}/>
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/Diwali" element={<Diwali />} />
        </Routes>
      </div>
    </>
  )
}

export default App