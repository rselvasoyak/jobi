import editing from "../../partials/assets/mvpAssets/Icon-2.png";
import tele from "../../partials/assets/mvpAssets/Icon-3.png";
import marketing from "../../partials/assets/mvpAssets/Icon-4.png";
import code from "../../partials/assets/mvpAssets/Icon-5.png";
import account from "../../partials/assets/mvpAssets/Icon-6.png";
import pen from "../../partials/assets/mvpAssets/Combined-Shape.png";
// import rightArrow from "../partials/assets/mvpAssets/Right Arrow.png";

import {Link} from "react-router-dom";

const Marketplace = () => {
    return(
        <section className="marketPlace">
            <div className="wrapper">
                <div className="marketTopRow">
                    <h3> Explore the marketplace. </h3>
                    <div>
                        <Link to ="/jobLists"className="explore" aria-label="Explore all fields"> Explore all fields </Link>
                    </div>
                </div>
                <ul className="marketLists">
                    <li className="field">
                        <div className="fieldContent">
                            <div className="icon">
                                <img src={pen} alt="pen icon" aria-label="pen icon"></img>
                            </div>
                            <h5> UX/UI Design </h5>
                            <p> 12+ Jobs </p>
                        </div>
                    </li>
                    <li className="field">
                        <div className="fieldContent">
                            <div className="icon">
                                <img src={code}alt="html tag icon" aria-label="html tag icon"></img>
                            </div>
                            <h5> Development </h5>
                            <p> 8+ Jobs </p>
                        </div>
                    </li>
                    <li className="field">
                        <div className="fieldContent">
                            <div className="icon">
                                <img src={marketing} alt="briefcase icon" aria-label="briefcase icon"></img>
                            </div>
                            <h5> Marketing </h5>
                            <p> 12+ Jobs </p>
                        </div>
                    </li>
                    <li className="field">
                        <div className="fieldContent">
                            <div className="icon">
                                <img src={tele} alt="telephone icon" aria-label="telephone icon"></img>
                            </div>
                            <h5> Telemarketing </h5>
                            <p> 3k+ Jobs </p>
                        </div>
                    </li>
                    <li className="field">
                        <div className="fieldContent">
                            <div className="icon">
                                <img src={editing} alt="icon representing editing" aria-label="icon representing editing"></img>
                            </div>
                            <h5> Editing </h5>
                            <p> 12+ Jobs </p>
                        </div>
                    </li>
                    <li className="field">
                        <div className="fieldContent">
                            <div className="icon">
                                <img src={account} alt="house icon" aria-label="house icon"></img>
                            </div>
                            <h5> Accounting </h5>
                            <p> 17+ Jobs </p>
                        </div>
                    </li>
                </ul>
            </div>{/* wrapper ending */}
        </section>
    )
}

export default Marketplace;