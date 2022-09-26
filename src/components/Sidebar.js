import { Link } from "react-router-dom";
import './css/Sidebar.css'
import gaju from './img/gaju.jpg'
export default function Sidebar() {
    return (
        <div id="menu">
            <nav className="nav-bar">
                <div className="pro-pic-div">
                    <Link to="/">
                        <img className="profile-pic" src={gaju} alt="gaju.jpg" />
                    </Link>
                </div>
                <ul>
                    <li className="home-icon">
                        <Link to="/">
                            <i class='fas fa-home'></i>
                        </Link>
                    </li>
                    <div className="social-icon">
                        <li>
                            <a
                                href={"https://twitter.com/gajendrsinghdwr"}
                                rel={"noopener noreferrer"}
                                target={"_blank"}
                            > <i className="fa fa-brands fa-twitter"></i></a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/gajendrasingh-d-49597b23a"
                                rel={"noopener noreferrer"}
                                target={"_blank"}
                            > <i className="fa fa-brands fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/GajendrasinghDawar?tab=repositories"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><i className="fa fa-brands fa-github"></i>
                            </a>
                        </li>
                        <li><a href="mailto:gajendrasinghdawar@gmail.com" target="_blank"
                            rel="noopener noreferrer">
                            <i className="fas fa-regular fa-envelope"></i>
                        </a></li>
                        <div className="notes-div">
                            <li>
                                <Link to="#">
                                    <div className="icon-size-max">
                                        <i class='fas fa-file-alt'></i>
                                        <span className="tooltiptext"> Resume</span>
                                    </div>

                                </Link>
                            </li>
                            <li>
                                <Link to="/notes">
                                    <div className="icon-size-max">
                                        <i className="fa fa-solid fa-clipboard Onme" cl></i>
                                        <span className="tooltiptext">Notes</span>
                                    </div>
                                </Link>
                            </li>
                        </div>
                    </div>

                </ul>

            </nav>
        </div>
    )
}