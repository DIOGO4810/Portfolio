import { Link } from "react-router-dom";
import '../CSS/navbar.css'


function Navbar() {
    return(
    <div className="nav">
        <nav className="nav-links">
            <Link to = "/"> Home</Link>
            <Link to="/skills"> Skills</Link>
            <Link to="/projects"> Projects</Link>
            
        </nav>
        
        

    </div>
    );



}export default Navbar;