import {NavLink, Link} from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context'
import { useHistory } from 'react-router-dom'


const Navbar = () => {
    
    let history = useHistory()
    const { auth:{role, authenticate}, setAuth } = useContext(AuthContext)

    const logout = () => {
        setAuth({authenticate: false, role: ''})
        history.push('/')
        localStorage.clear()
    }

    return(
        <div className="navbar navbar-dark navbar-expand-sm bg-dark">
            <div className="container">
                <Link className="navbar-brand" to={"/"}>UmidSoft</Link>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar">
                    <i className="navbar-toggler-icon"></i>
                </button>
                <div className="navbar-collapse collapse" id="navbar">
                    <ul className="navbar-nav ml-auto">
                        {
                            authenticate ? 
                                (
                                    role === "Admin" ? (
                                        <>
                                            <li className="nav-item">
                                                <NavLink to="/dashboard" exact className="nav-link">
                                                    Dashboard
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink onClick={logout} to="/" exact activeClassName={null} className="nav-link">
                                                    Logout
                                                </NavLink>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li className="nav-item">
                                                <NavLink to="/private" exact className="nav-link">
                                                    Private
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink activeClassName="" onClick={logout} to="/" exact  className="nav-link">
                                                    Logout
                                                </NavLink>
                                            </li>
                                        </>
                                    )
                                ) : (
                                    <>
                                        <li className="nav-item">
                                            <NavLink to="/login" exact className="nav-link">
                                                Login
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/register" exact  className="nav-link">
                                                Sign Up
                                            </NavLink>
                                        </li>
                                    </>
                                )
                        }
                        
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;