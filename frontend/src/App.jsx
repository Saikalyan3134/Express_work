import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useContext } from "react"

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import FreelancerHome from "./pages/FreelancerHome"
import ClientHome from "./pages/ClientHome"
import MyProposals from "./pages/MyProposals"

import Hire from "./pages/Hire"
import PostJob from "./pages/PostJob"
import MyJobs from "./pages/MyJobs"
import JobDetails from "./pages/JobDetails"

import { AuthContext } from "./context/AuthContext" // ✅ IMPORT

function App() {

const { user } = useContext(AuthContext) // ✅ GET USER

return (

<BrowserRouter>

<Navbar />

<Routes>

<Route path="/" element={
!user ? <Home /> :
user.role === "freelancer" ? <FreelancerHome /> :
<ClientHome />
} 
/>
<Route path="/proposals" element={<MyProposals />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/hire" element={<Hire />} />
<Route path="/post-job" element={<PostJob />} />
<Route path="/my-jobs" element={<MyJobs />} />
<Route path="/job/:id" element={<JobDetails />} />

</Routes>

<Footer />

</BrowserRouter>

)
}

export default App