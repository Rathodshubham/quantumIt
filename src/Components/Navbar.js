import { Link } from '@mui/material';
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <div className="nav">
                <div>
                    <a className="brand" to="/" >We are open 24/7 | </a>
                    <a className="brand" to="/" > ishubhamrathod@gmail.com</a>
                </div>
                <div id="socialIcons">
                    <a href="#" className="fa fa-facebook"></a>
                    <a href="#" className="fa fa-google"></a>
                    <a href="#" className="fa fa-linkedin"></a>
                    <a href="#" className="fa fa-youtube"></a>
                    <a href="#" className="fa fa-instagram"></a>
                    <a href="#" className="fa fa-twitter"></a>
                </div>

            </div>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    
                        <div>
                            <a className="navbar-brand" to="/">Bisnes</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" to="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" to="/">About </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" to="/">Project</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" to="/"></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" to="/">Services </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" to="/">Contact</a>
                                </li>
                            </ul>
                      
                    </div>
                </nav>

            </div>
        </div>

    );
}

export default Navbar;