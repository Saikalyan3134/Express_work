import {useState} from "react"
import API from "../services/api"

function Register(){

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [role,setRole] = useState("freelancer")

const handleSubmit = async(e)=>{

e.preventDefault()

await API.post("/auth/register",{
name,
email,
password,
role
})

alert("Registered")

}

return(

<div className="auth-container">

<div className="auth-card">

<h3 className="auth-title">Create Account</h3>

<form onSubmit={handleSubmit} redirect="/login">

<input
className="form-control mb-3"
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
className="form-control mb-3"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
className="form-control mb-3"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<select
className="form-control mb-3"
onChange={(e)=>setRole(e.target.value)}
>

<option value="freelancer">Freelancer</option>
<option value="client">Client</option>

</select>

<button className="btn btn-neon w-100">
Register
</button>

</form>

</div>

</div>

)

}

export default Register