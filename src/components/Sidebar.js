import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <>
            <div id="menu">
                <div className="pure-menu">


                    <ul className="pure-menu-list">
                        <li className="pure-menu-item"><a href="#home" className="pure-menu-link">twitter</a></li>
                        <li className="pure-menu-item"><a href="#about" className="pure-menu-link">github</a></li>

                        <li className="pure-menu-item menu-item-divided pure-menu-selected">
                            <a href="#" className="pure-menu-link">Linkedin</a>
                        </li>

                        <li className="pure-menu-item"><a href="#contact" className="pure-menu-link">email</a></li>
                        <Link to="/notes">
                            Notes
                        </Link>
                        <br></br>
                        <Link to="/">
                            Home
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    )
}