import logo1 from "../../partials/assets/mvpAssets/Logo 1.png"
import logo2 from "../../partials/assets/mvpAssets/Logo 2.png"
import logo3 from "../../partials/assets/mvpAssets/Logo 3.png"
import person1 from "../../partials/assets/person1.jpg"

import {Link} from "react-router-dom";

const IndexHeader = () => {

    return (
        <>
            <nav className="indexSecondNav">
                <ul>
                    <li><Link to="/error"> design & creative </Link></li>
                    <li><Link to="/error">it & development</Link> </li>
                    <li><Link to="/error"> trend </Link></li>
                    <li><Link to="/error"> web & mobile dev</Link></li>
                    <li><Link to="/error"> writing </Link></li>
                    <li> <Link to="/error"> music &audio</Link></li>
                    <li><Link to="/error"> video & animation</Link></li>
                    <select
                    className="searchOption"
                    id="searchOption" name="searchOption">
                        <option value="more">more</option>
                    </select>
                </ul>
            </nav>
            <section className="headerContent">
                <div className="wrapper">
                    <div className="indexHeaderText">
                        <Link to="/jobLists">
                            <h4 className="headerP">#1 online marketplace</h4>
                            <h1> Find the talents for any job. </h1>
                        </Link> 
                        <p> Unlock your potential with quality job & earn from world leading brands & co. </p>
                        <div>
                            <a className="secondaryLink" href=" "> Post a job </a>  
                        </div>
                        <div className="trustedBy">
                            <p> Trusted by: </p>
                            <div className="trustedCompanies">
                                <img src={ logo1 } alt=""></img>
                                <img src={ logo2 } alt=""></img>
                                <img src={ logo3 } alt=""></img>
                            </div>{/* trusted companies end */}
                        </div>{/* trustedBy container end  */}
                    </div>{/* index header tet end */}
                    <div className="headerImg">
                        <img src={person1} alt="a woman working on her laptop"></img>
                    </div>
                </div> {/* wrapper ending */}
            </section> {/* header content ending */}
        </>
    )
}

export default IndexHeader;