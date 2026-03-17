import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"

function Navbar() {

    const navigate = useNavigate()

    const { user, token, setUser, setToken } = useContext(AuthContext)

    const [open, setOpen] = useState(false)

    const logout = () => {

        localStorage.removeItem("token")
        localStorage.removeItem("user")

        setUser(null)
        setToken(null)

        navigate("/login")

    }

    return (

        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">

            <div className="container">

                {/* LOGO */}
                <Link className="navbar-brand brand-logo" to="/">
                    <span className="brand-express">Express</span>
                    <span className="brand-work">Work</span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navMenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navMenu">

                    <ul className="navbar-nav me-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>

                        {/* NOT LOGGED IN */}
                        {!token && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/hire">Hire Freelancer</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/jobs">Find Work</Link>
                                </li>
                            </>
                        )}

                        {/* FREELANCER */}
                        {token && user?.role === "freelancer" && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/jobs">Find Work</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/proposals">My Proposals</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/my-jobs">My Jobs</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/messages">Messages</Link>
                                </li>
                            </>
                        )}

                        {/* CLIENT */}
                        {token && user?.role === "client" && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/hire">Hire Freelancer</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/post-job">Post Job</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/my-jobs">My Jobs</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/messages">Messages</Link>
                                </li>
                            </>
                        )}

                    </ul>

                    {/* RIGHT SIDE */}

                    <div style={{ position: "relative" }}>

                        {!token ? (

                            <>
                                <Link to="/login" className="btn btn-neon navbar-btn">
                                    Login
                                </Link>

                                <Link to="/register" className="btn btn-neon navbar-btn ms-3">
                                    Register
                                </Link>
                            </>

                        ) : (

                            <>  
                            
                                {/* PROFILE ICON */}
                                <div
                                    className="profile-icon"
                                    onClick={() => setOpen(!open)}
                                >
                                    <i className="bi bi-person-fill"></i>
                                </div>

                                {/* DROPDOWN */}
                                {open && (
                                    <div
                                        className="dropdown-menu-dark-custom"
                                        style={{
                                            position: "absolute",
                                            right: 0,
                                            top: "50px"
                                        }}
                                    >

                                        <span className="dropdown-username">
                                            {user?.name}
                                        </span>

                                        <div
                                            className="dropdown-item-custom"
                                            onClick={() => {
                                                setOpen(false)
                                                navigate("/profile")
                                            }}
                                        >
                                            My Profile
                                        </div>

                                        <div
                                            className="dropdown-item-custom"
                                            onClick={() => {
                                                setOpen(false)
                                                navigate("/settings")
                                            }}
                                        >
                                            Settings
                                        </div>
                                        <div
                                            className="dropdown-item-custom"
                                            onClick={logout}
                                        >
                                            Logout
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar