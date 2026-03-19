import { useEffect, useState } from "react"
import API from "../services/api"

function MyJobs(){

const [jobs,setJobs] = useState([])
const [loading,setLoading] = useState(true)
const [filter,setFilter] = useState("All")

useEffect(()=>{
fetchJobs()
},[])

const fetchJobs = async ()=>{
try{
const res = await API.get("/jobs")
setJobs(res.data.jobs)
}catch(err){
console.log(err)
}finally{
setLoading(false)
}
}

// ✅ HIRE
const handleHire = async (jobId, freelancerId)=>{
try{
await API.post(`/jobs/hire/${jobId}/${freelancerId}`)
fetchJobs()
}catch(err){
console.log(err)
}
}

// ✅ REJECT
const handleReject = async (jobId, freelancerId)=>{
try{
await API.post(`/jobs/reject/${jobId}/${freelancerId}`)
fetchJobs()
}catch(err){
console.log(err)
}
}

// ✅ FILTER LOGIC
const filteredJobs = filter === "All"
? jobs
: jobs.filter(job => job.status === filter)

if(loading) return <h3 className="text-light text-center mt-5">Loading...</h3>

return(
<div className="myjobs-container">

{/* HEADER */}
<div className="myjobs-header">
<h2 className="page-title">
<i className="bi bi-briefcase-fill me-2"></i>
My Jobs
</h2>

{/* FILTER */}
<select 
className="filter-dropdown"
value={filter}
onChange={(e)=>setFilter(e.target.value)}
>
<option value="All">All Jobs</option>
<option value="Not Hired Yet">Not Hired Yet</option>
<option value="Requested">Requested</option>
<option value="In Progress">In Progress</option>
<option value="Completed">Completed</option>
</select>

</div>

{/* EMPTY */}
{filteredJobs.length === 0 && (
<p className="text-light text-center mt-4">No jobs found</p>
)}

{/* JOBS */}
{filteredJobs.map(job=>(
<div key={job._id} className="job-card">

<div className="job-header">
<h4>{job.title}</h4>

<span className={`status-badge status-${job.status.replaceAll(" ","")}`}>
{job.status}
</span>
</div>

<p className="job-desc">{job.description}</p>

<div className="job-meta">
<span><i className="bi bi-currency-dollar me-1"></i>{job.budget}</span>
</div>

{/* SKILLS */}
<div className="skills-container">
{job.skills.map((skill,i)=>(
<span key={i} className="skill-badge">{skill}</span>
))}
</div>

{/* APPLICANTS */}
{job.applicants?.length > 0 && (
<div className="applicants-section">

<h6>
<i className="bi bi-people-fill me-2"></i>
Applicants
</h6>

{job.applicants.map(app=>(
<div key={app.freelancerId} className="applicant-card">

<div>
<strong>{app.name}</strong>
<p>{app.skills.join(", ")}</p>
</div>

<div className="applicant-actions">

{app.status === "Requested" && (
<>
<button 
className="btn-hire"
onClick={()=>handleHire(job._id, app.freelancerId)}
>
<i className="bi bi-check-lg"></i>
</button>

<button 
className="btn-reject"
onClick={()=>handleReject(job._id, app.freelancerId)}
>
<i className="bi bi-x-lg"></i>
</button>
</>
)}

<span className="badge-status">{app.status}</span>

</div>

</div>
))}

</div>
)}

</div>
))}

</div>
)

}

export default MyJobs