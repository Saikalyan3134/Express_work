import { useEffect, useState } from "react"
import API from "../services/api"

function Hire(){

const [freelancers,setFreelancers] = useState([])

useEffect(()=>{

const fetchFreelancers = async ()=>{
const res = await API.get("/users/freelancers")
setFreelancers(res.data)
}

fetchFreelancers()

},[])

return(

<div className="container mt-4">

<h3>Hire Freelancers</h3>

<div className="row">

{freelancers.map(f=>(

<div className="col-md-4 mb-4" key={f._id}>

<div className="job-card">

<h5>{f.name}</h5>
<p>{f.skills || "No skills"}</p>

<button className="btn btn-neon">
View Profile
</button>

</div>

</div>

))}

</div>

</div>

)

}

export default Hire