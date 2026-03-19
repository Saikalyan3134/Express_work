import { useState } from "react"
import API from "../services/api"

function ApplyModal({ jobId, close }) {

const [coverLetter, setCoverLetter] = useState("")
const [bid, setBid] = useState("")

const handleApply = async () => {

try {

await API.post(`/proposals/${jobId}`, {
coverLetter,
bid
})

alert("Proposal submitted 🚀")
close()

} catch (err) {
alert("Failed to apply")
}

}

return (

<div className="modal-overlay">

<div className="apply-modal">

<h4>Apply for Job</h4>

<textarea
className="form-control mb-3"
placeholder="Write your proposal..."
onChange={(e) => setCoverLetter(e.target.value)}
/>

<input
type="number"
className="form-control mb-3"
placeholder="Your bid ($)"
onChange={(e) => setBid(e.target.value)}
/>

<button className="btn btn-neon w-100" onClick={handleApply}>
Submit Proposal
</button>

<button className="btn btn-outline-light w-100 mt-2" onClick={close}>
Cancel
</button>

</div>

</div>

)

}

export default ApplyModal