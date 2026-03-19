import { useState } from "react"
import API from "../services/api"
import { useNavigate } from "react-router-dom"

function PostJob(){

const [form,setForm] = useState({
title:"",
description:"",
budget:"",
skills:""
})

const [loading,setLoading] = useState(false)
const [success,setSuccess] = useState("")
const [error,setError] = useState("")

const navigate = useNavigate()

// HANDLE INPUT
const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

// SUBMIT FORM
const handleSubmit = async (e)=>{
e.preventDefault()

setLoading(true)
setSuccess("")
setError("")

const formattedData = {
...form,
budget: Number(form.budget),
skills: form.skills
.split(",")
.map(skill => skill.trim())
.filter(skill => skill !== "")
}

try{
const res = await API.post("/jobs", formattedData)
console.log(res.data)
setSuccess(res.data.message || "Job posted successfully")

// CLEAR FORM
setForm({
title:"",
description:"",
budget:"",
skills:""
})

// REDIRECT AFTER 1.5s
setTimeout(()=>{
navigate("/my-jobs")
},1500)

}catch(err){
  const msg =
    err.response?.data?.message || // backend message
    err.message ||                 // axios error
    "Something went wrong"

  setError(msg)
  console.log(err)
}
finally{
setLoading(false)
}
}

return(

<div className="postjob-container">

<div className="postjob-card">

{/* HEADER */}
<div className="postjob-header">
<i className="bi bi-briefcase-fill icon-header"></i>
<h2>Post a New Job</h2>
</div>

<p className="postjob-sub">
Create a job and hire the best freelancer
</p>

{/* SUCCESS MESSAGE */}
{success && (
<div className="alert-success-custom">
<i className="bi bi-check-circle-fill me-2"></i>
{success}
</div>
)}

{/* ERROR MESSAGE */}
{error && (
<div className="alert-error-custom">
<i className="bi bi-exclamation-triangle-fill me-2"></i>
{error}
</div>
)}

<form onSubmit={handleSubmit}>

{/* TITLE */}
<div className="input-group-custom">
<label>
<i className="bi bi-type me-2"></i>
Job Title
</label>
<input
type="text"
name="title"
value={form.title}
onChange={handleChange}
placeholder="Enter job title"
required
/>
</div>

{/* DESCRIPTION */}
<div className="input-group-custom">
<label>
<i className="bi bi-card-text me-2"></i>
Description
</label>
<textarea
name="description"
value={form.description}
onChange={handleChange}
placeholder="Describe your project..."
required
/>
</div>

{/* BUDGET */}
<div className="input-group-custom">
<label>
<i className="bi bi-currency-dollar me-2"></i>
Budget
</label>
<input
type="number"
name="budget"
value={form.budget}
onChange={handleChange}
placeholder="Enter budget"
required
/>
</div>

{/* SKILLS */}
<div className="input-group-custom">
<label>
<i className="bi bi-lightning-charge me-2"></i>
Skills Required
</label>
<input
type="text"
name="skills"
value={form.skills}
onChange={handleChange}
placeholder="e.g. React, Node.js, MongoDB"
/>

{/* SKILL PREVIEW */}
<div className="skills-preview">
{form.skills.split(",").map((s,i)=>(
s.trim() && (
<span key={i} className="skill-badge">
{s.trim()}
</span>
)
))}
</div>

</div>

{/* BUTTON */}
<button type="submit" className="btn-postjob" disabled={loading}>
{loading ? (
<>
<span className="spinner-border spinner-border-sm me-2"></span>
Posting...
</>
) : (
<>
<i className="bi bi-send-fill me-2"></i>
Post Job
</>
)}
</button>

</form>

</div>

</div>

)

}

export default PostJob