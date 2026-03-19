const express = require("express")
const router = express.Router()
const Proposal = require("../models/Proposal")
const authMiddleware = require("../middleware/auth")

// CREATE PROPOSAL
router.post("/:jobId", authMiddleware, async (req, res) => {

try {

const { coverLetter, bid } = req.body

const proposal = new Proposal({
job: req.params.jobId,
freelancer: req.user.id,
coverLetter,
bid
})

await proposal.save()

res.json({ message: "Proposal submitted" })

} catch (err) {
res.status(500).json({ error: err.message })
}

})

// GET MY PROPOSALS
router.get("/my", authMiddleware, async (req, res) => {

try {

const proposals = await Proposal.find({ freelancer: req.user.id })
.populate("job")

res.json(proposals)

} catch (err) {
res.status(500).json({ error: err.message })
}

})

module.exports = router