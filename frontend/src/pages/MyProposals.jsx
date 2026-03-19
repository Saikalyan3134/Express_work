import { useEffect, useState } from "react"
import API from "../services/api"

function MyProposals(){

const [proposals, setProposals] = useState([])

useEffect(() => {

const fetchProposals = async () => {
const res = await API.get("/proposals/my")
setProposals(res.data)
}

fetchProposals()

}, [])

return (

<div className="container mt-4">

<h3 className="section-title mb-3">My Proposals</h3>

{proposals.map((p) => (

<div className="job-card mb-3" key={p._id}>

<h5>{p.job?.title}</h5>

<p>{p.coverLetter}</p>

<span className="badge bg-success">
${p.bid}
</span>

</div>

))}

</div>

)

}

export default MyProposals