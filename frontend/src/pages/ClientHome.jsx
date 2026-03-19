import { useEffect, useState } from "react"
import API from "../services/api"

function ClientHome(){

const [jobs,setJobs] = useState([])

useEffect(()=>{

const fetchJobs = async ()=>{
try{
const res = await API.get("/jobs/my")
setJobs(res.data)
}catch(err){
console.log(err)
}
}

fetchJobs()

},[])

return(

<div className="client-container">

{/* HERO */}
<div className="client-hero">

<div>
<h2 className="welcome-text">Welcome Back 👋</h2>
<p className="sub-text">Manage your projects and hire top talent</p>
</div>

<button className="post-job-btn">
+ Post New Job
</button>

</div>

{/* STATS */}
<div className="stats-grid">

<div className="stat-box">
<h5>$2,500</h5>
<p>Total Spent</p>
</div>

<div className="stat-box">
<h5>{jobs.length}</h5>
<p>Active Jobs</p>
</div>

<div className="stat-box">
<h5>14</h5>
<p>New Proposals</p>
</div>

</div>

{/* SEARCH */}
<div className="talent-search">
<input placeholder="Search freelancers (React, AI, UI/UX...)" />
</div>

{/* JOB SECTION */}
<h4 className="section-title">Your Active Jobs</h4>

<div className="job-grid">

{jobs.map((job)=>(

<div className="client-job-card" key={job._id}>

<h5>{job.title}</h5>

<p className="job-desc">
{job.description?.slice(0,100)}...
</p>

<div className="job-footer">

<span className="budget">
${job.budget}
</span>

<span className="proposal-count">
12 Proposals
</span>

</div>

</div>

))}

</div>

</div>

)

}

export default ClientHome