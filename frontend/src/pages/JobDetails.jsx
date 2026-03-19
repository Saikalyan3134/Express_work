import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import API from "../services/api"

function JobDetails(){

const { id } = useParams()

const [job,setJob] = useState({})
const [proposals,setProposals] = useState([])

useEffect(()=>{

const fetchData = async ()=>{

const jobRes = await API.get(`/jobs/${id}`)
setJob(jobRes.data)

const propRes = await API.get(`/proposals/job/${id}`)
setProposals(propRes.data)

}

fetchData()

},[id])

const handleHire = async (proposalId)=>{

await API.put(`/proposals/hire/${proposalId}`)
alert("Freelancer hired 🎉")

}

return(

<div className="container mt-4">

<h3>{job.title}</h3>
<p>{job.description}</p>

<h4 className="mt-4">Applicants</h4>

{proposals.map(p=>(

<div className="job-card mb-3" key={p._id}>

<h5>{p.freelancer?.name}</h5>
<p>{p.coverLetter}</p>

<button 
className="btn btn-success"
onClick={()=>handleHire(p._id)}
>
Hire
</button>

</div>

))}

</div>

)

}

export default JobDetails