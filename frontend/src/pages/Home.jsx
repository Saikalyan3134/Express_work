import { Link } from "react-router-dom"

function Home() {

return (

<div className="home-container">

{/* HERO SECTION */}
<section className="hero-wrapper">

<div className="hero-card container">

<div className="row align-items-center">

<div className="col-md-6">

<h1 className="hero-title">
Hire the experts your business needs
</h1>

<p className="hero-subtitle">
Find top freelancers for web, AI, design, and more.
</p>

{/* SEARCH */}
<div className="hero-search">
<input
type="text"
placeholder="Search for talent or jobs..."
className="form-control"
/>
</div>

{/* TAGS */}
<div className="hero-tags">
<span>Web Design</span>
<span>AI Development</span>
<span>React</span>
<span>UI/UX</span>
</div>

</div>

<div className="col-md-6 text-center">

<img
src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
className="hero-img"
alt="team"
/>

</div>

</div>

</div>

</section>

{/* SOCIAL PROOF */}
<section className="container mt-5 text-center">

<p className="trusted-text">Trusted by</p>

<div className="logo-marquee">

<span>Microsoft</span>
<span>Airbnb</span>
<span>Grammarly</span>
<span>Amazon</span>
<span>Google</span>

</div>

</section>

{/* CATEGORY GRID */}
<section className="container mt-5">

<h3 className="section-title text-center mb-4">
Explore Categories
</h3>

<div className="row">

{[
"AI Services",
"Development & IT",
"Design & Creative",
"Writing & Translation",
"Sales & Marketing",
"Admin Support",
"Finance",
"Engineering",
"Data Science",
"Customer Support"
].map((cat, i) => (

<div className="col-md-4 col-lg-3 mb-4" key={i}>

<div className="category-card-white">

<i className="bi bi-box"></i>

<h6>{cat}</h6>

</div>

</div>

))}

</div>

</section>

{/* HOW IT WORKS */}
<section className="container mt-5">

<h3 className="section-title text-center mb-5">
How It Works
</h3>

<div className="row text-center">

<div className="col-md-4">

<div className="how-card">

<img
src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
alt=""
/>

<h5>Posting jobs is always free</h5>

</div>

</div>

<div className="col-md-4">

<div className="how-card">

<img
src="https://images.unsplash.com/photo-1551434678-e076c223a692"
alt=""
/>

<h5>Get proposals and hire</h5>

</div>

</div>

<div className="col-md-4">

<div className="how-card">

<img
src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
alt=""
/>

<h5>Pay when work is done</h5>

</div>

</div>

</div>

</section>

{/* CTA */}
<section className="cta-section text-center mt-5">

<h2>Start building with top talent today</h2>

<Link to="/register" className="btn btn-neon mt-3">
Get Started
</Link>

</section>

</div>

)

}

export default Home