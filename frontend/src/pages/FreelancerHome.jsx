import { useEffect, useState } from "react"
import API from "../services/api"

function FreelancerHome() {

const [jobs, setJobs] = useState([])

useEffect(() => {

const fetchJobs = async () => {
try {
const res = await API.get("/jobs")
setJobs(res.data)
} catch (err) {
console.log(err)
}
}

fetchJobs()

}, [])

return (

<div className="container mt-4">

{/* WELCOME */}
<div className="welcome-card mb-4">

<h3>Welcome back 👋</h3>
<p>Find the best jobs tailored for your skills</p>

</div>

{/* STATS */}
<div className="row mb-4">

<div className="col-md-4">
<div className="stat-card">
<h5>12</h5>
<p>Proposals Sent</p>
</div>
</div>

<div className="col-md-4">
<div className="stat-card">
<h5>$1,200</h5>
<p>Earnings</p>
</div>
</div>

<div className="col-md-4">
<div className="stat-card">
<h5>5</h5>
<p>Active Jobs</p>
</div>
</div>

</div>

{/* JOB FEED */}
<h4 className="section-title mb-3">Recommended Jobs</h4>

<div className="row">

{jobs.slice(0,6).map((job) => (

<div className="col-md-6 mb-4" key={job._id}>

<div className="job-card">

<h5>{job.title}</h5>

<p className="job-desc">
{job.description?.slice(0,100)}...
</p>

<div className="job-meta">

<span className="badge bg-success">
${job.budget}
</span>

<button className="btn btn-sm btn-neon">
Apply
</button>

</div>

</div>

</div>

))}

</div>

{/* TIPS */}
<div className="tips-card mt-4">

<h5>💡 Tips to Get Hired Faster</h5>

<ul>
<li>Write personalized proposals</li>
<li>Highlight your best projects</li>
<li>Respond quickly to clients</li>
</ul>

</div>

</div>

)

}

export default FreelancerHome