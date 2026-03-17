import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import API from "../services/api"
import { AuthContext } from "../context/AuthContext"

function Login() {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const { setUser, setToken } = useContext(AuthContext)

const navigate = useNavigate()

const handleLogin = async (e) => {

e.preventDefault()

try {

const res = await API.post("/auth/login", { email, password })

// STORE
localStorage.setItem("token", res.data.token)
localStorage.setItem("user", JSON.stringify(res.data.user))

// UPDATE GLOBAL STATE
setUser(res.data.user)
setToken(res.data.token)

// REDIRECT
navigate("/")

} catch (err) {

alert("Login failed")

}

}

return (

<div className="auth-container">

<div className="auth-card">

<h3 className="auth-title">Login</h3>

<form onSubmit={handleLogin}>

<input
className="form-control mb-3"
placeholder="Email"
onChange={(e) => setEmail(e.target.value)}
/>

<input
type="password"
className="form-control mb-3"
placeholder="Password"
onChange={(e) => setPassword(e.target.value)}
/>

<button className="btn btn-neon w-100">
Login
</button>

</form>

</div>

</div>

)

}

export default Login