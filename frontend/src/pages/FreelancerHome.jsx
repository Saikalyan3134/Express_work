import { useEffect, useState } from "react"
import API from "../services/api"
import ApplyModal from "../components/ApplyModal"

function FreelancerHome(){

const [jobs,setJobs] = useState([])
const [selectedJob,setSelectedJob] = useState(null)

useEffect(()=>{

const fetchJobs = async ()=>{
try{
const res = await API.get("/jobs")
setJobs(res.data)
}catch(err){
console.log(err)
}
}

fetchJobs()

},[])

return(

<div className="freelancer-container">

{/* HERO SEARCH */}
<div className="hero-search">

<input 
type="text"
placeholder="Search jobs, skills, freelancers..."
className="search-input"
/>

</div>

{/* JOB GRID */}
<h4 className="section-title">Recommended Jobs</h4>

<div className="job-grid">

{jobs.map((job)=>(

<div className="job-card" key={job._id}>

<h5 className="job-title">{job.title}</h5>

<p className="job-desc">
{job.description?.slice(0,120)}...
</p>

<div className="job-footer">

<span className="budget-tag">
${job.budget}
</span>

<button 
className="apply-btn"
onClick={()=>setSelectedJob(job._id)}
>
Apply Now
</button>

</div>

</div>

))}

</div>

{/* MODAL */}
{selectedJob && (
<ApplyModal 
jobId={selectedJob}
close={()=>setSelectedJob(null)}
/>
)}

</div>

)

}

export default FreelancerHome