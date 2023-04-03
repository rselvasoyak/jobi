import logo from "../../partials/assets/mvpAssets/Logo-3.png";
import { Link} from "react-router-dom";
// import * as ReactRouterDom from 'react-router-dom';

const Nav = () => {
    // let history = ReactRouterDom.useHistory();

    // const handleSelectChange = (event) => {
    //     const selectedOption = event.target.value;
    //     if (selectedOption === 'Job Lists') {
    //         history.push('/jobLists');
    //     }
    // };
    return (
        <nav>
            <div className="navLeft">
                <div className="logo" >
                    <img src= {logo} alt="Jobi company logo with 2 green and while circles overlapping"></img>
                </div>
                <form>
                    <div className="searchBar">
                        <label for="searchInput" class="sr-only">Search</label>
                        <input 
                        className="searchInput"
                        type="search" id="searchInput" name="search" placeholder="Search Here..." aria-label="Search"></input>
                        <select
                        className="searchOption"
                        id="searchOption" name="searchOption">
                            <option value="talents">Talents</option>
                            <option value="jobs">Jobs</option>
                        </select>
                    </div>
                </form>
            </div>
            <div className="navRight">
                <div className="searchLinks">
                    <Link to="/jobLists"> find job </Link>
                    <a href="/"> find talents </a>
                    <select 
                    className="pages"
                    id="pages"
                    name="pages" 
                    aria-describedby="Available Pages in Jobi"
                    // onChange={handleSelectChange}
                    >
                        <option defaultChecked value="default" title="default">Pages</option>
                        <option value="Home" title="Home">Home</option>
                        <option value="Job Lists" title="Job Lists">Job Lists</option>
                    </select>
                </div>
                <div className="userAuthLinks">
                    <a href="/"> login </a>
                    <a className="primaryLink" href=" "> register </a>
                </div>{/* user authentication links end */}
            </div>{/* navRight ends  */}
        </nav>
    )
}

export default Nav;

// To add to Nav: 
    // Character Limit Function? 
    // Loading State once the page loads? 
    // Error Page if there is an error 