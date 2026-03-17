import { Link } from "react-router-dom"

function Footer() {

return (

<footer className="footer-dark">

<div className="container">

<div className="row">

{/* BRAND */}
<div className="col-md-4 mb-4">

<h4 className="footer-logo">
<span className="brand-express">Express</span>
<span className="brand-work">Work</span>
</h4>

<p className="footer-desc">
Build, hire, and scale with top global talent.
</p>

</div>

{/* COMPANY */}
<div className="col-md-2 mb-4">
<h6 className="footer-title">Company</h6>
<ul>
<li><Link to="/">About</Link></li>
<li><Link to="/">Careers</Link></li>
<li><Link to="/">Contact</Link></li>
</ul>
</div>

{/* CLIENT */}
<div className="col-md-2 mb-4">
<h6 className="footer-title">Clients</h6>
<ul>
<li><Link to="/hire">Hire Talent</Link></li>
<li><Link to="/post-job">Post Job</Link></li>
</ul>
</div>

{/* FREELANCER */}
<div className="col-md-2 mb-4">
<h6 className="footer-title">Freelancers</h6>
<ul>
<li><Link to="/jobs">Find Work</Link></li>
<li><Link to="/proposals">My Proposals</Link></li>
</ul>
</div>

{/* SOCIAL */}
<div className="col-md-2 mb-4">
<h6 className="footer-title">Connect</h6>

<div className="footer-icons">
<i className="bi bi-facebook"></i>
<i className="bi bi-twitter"></i>
<i className="bi bi-linkedin"></i>
</div>

</div>

</div>

{/* BOTTOM */}
<div className="footer-bottom">

<p>
© {new Date().getFullYear()} ExpressWork • Built for the future of work
</p>

</div>

</div>

</footer>

)

}

export default Footer