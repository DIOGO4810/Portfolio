import { Link } from "react-router-dom";
import '../CSS/navbar.css'


function Navbar() {
    return(
    <div className="nav">
        <nav className="nav-links">
            <Link to = "/"> Home</Link>
            <Link to = "/competencias"> Competências</Link>
        </nav>
        
        

    </div>
    );



}export default Navbar;