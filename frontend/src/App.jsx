import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useContext } from "react"

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import FreelancerHome from "./pages/FreelancerHome"

import { AuthContext } from "./context/AuthContext" // ✅ IMPORT

function App() {

const { user } = useContext(AuthContext) // ✅ GET USER

return (

<BrowserRouter>

<Navbar />

<Routes>

<Route
path="/"
element={
user?.role === "freelancer"
? <FreelancerHome />
: <Home />
}
/>

<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />

</Routes>

<Footer />

</BrowserRouter>

)
}

export default App