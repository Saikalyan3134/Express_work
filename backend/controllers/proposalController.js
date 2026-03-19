const Proposal = require("../models/Proposal")
const Job = require("../models/Job")

exports.createProposal = async (req, res) => {
  try {
    const { jobId, coverLetter, bid } = req.body
    const proposal = await Proposal.create({
      job: jobId,
      freelancer: req.user._id,
      coverLetter,
      bid
    })
    res.json(proposal)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.getMyProposals = async (req, res) => {
  try {
    const proposals = await Proposal.find({ freelancer: req.user._id })
      .populate("job", "title budget")
    res.json(proposals)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}