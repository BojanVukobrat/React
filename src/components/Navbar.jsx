import { Link } from "react-router-dom";
import Select from "./Select";

const Navbar = ({ sortByGenre, sortByLength, numberOfMovies }) => {
    return ( 
        <div className="navbar">
            <Link to={'/'}><button className="btn">Main page</button></Link>
            {/* <Link to={'/schedule'}><button className="btn">Schedule {numberOfMovies}</button></Link> */}
            {/* <Select sortByGenre={sortByGenre} sortByLength={sortByLength}/> */}
        </div>
     );
}
 
export default Navbar;