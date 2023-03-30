import logo from "../../partials/assets/mvpAssets/Logo-3.png";
import drawing from "../../partials/assets/mvpAssets/drawing1.png";
import { Link, useLocation } from "react-router-dom";
// import { $lightGreen, $whiteFont } from "../../../partials/abstract/_variables.scss";

const TopFooter = () => {
    const location = useLocation();
    const bgColor = location.pathname === "/" ? "#e9f2ef": "#fff";
    const lookLinkStyle = location.pathname === "/" ? "lookLink" : "secondLookLink";
    const postJobStyle = location.pathname === "/" ? "postLink" : "secondPostLink";
    const signupBackground = location.pathname === "/" ? "inherit" : "#F5F5F5";
    
 return(
    <section className="topFooter" style={{ backgroundColor: bgColor }}>
        <div className="wrapper">
            <div className="footerHeader">
                <div className="footerContent">
                    <h3>Most complete job portal.</h3>
                    <p>Signup and start find your job or talents.</p>
                </div>
                <div className="footerTopLinks"> 
                    <Link to="/jobLists" className={`${lookLinkStyle}`}> Looking for Job?</Link>
                    <a className={`${postJobStyle}`} href=" "> Post a job</a>
                </div>
            </div>
            <div className="footerNav">
                <div className="brandVisual">
                    <div className="logo" >
                        <img src= {logo} alt="Jobi company logo with 2 green and while circles overlapping"></img>
                    </div>
                    <div className="shadowBox">
                        <img src={drawing} alt=""></img>
                    </div>
                </div>
                <div className="footerNavList">
                    <h5>products</h5>
                    <ul>
                        <li>
                            <a href=" ">
                                Take the tour
                            </a>
                        </li>
                        <li>
                            <a href=" ">
                                Live chat 
                            </a>
                        </li>
                        <li>
                            <a href=" ">
                                Self-Service
                            </a>
                        </li>
                        <li>
                            <a href=" ">
                                Mobile
                            </a>
                        </li>
                        <li>
                            <a href=" ">
                                Collaboration
                            </a>
                        </li>
                        <li>
                            <a href=" ">
                                Reviews
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footerNavList">
                    <h5>links</h5>
                    <ul>
                        <li>
                            <a href=" ">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href=" ">
                                About us
                            </a>
                        </li>
                        <li>
                            <a href=" ">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a href=" ">
                                Blog
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footerNavList">
                    <h5>legal</h5>
                    <ul>
                        <li>
                            <a href=" ">
                                Terms of Use 
                            </a>
                        </li>
                        <li>
                            <a href=" ">
                                Terms & Conditions
                            </a>
                        </li>
                        <li>
                            <a href=" ">
                                Privacy
                            </a>
                        </li>
                        <li>
                            <a href=" ">
                                Cookie Policy
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footerForm">
                    <h5>newsletter</h5>
                    <p>Join & get important new regularly</p>
                    <div className="formInputBundle">
                        <form>
                            <label></label>
                            <div className="inputRow" style={{ backgroundColor:signupBackground }}>
                                <input
                                style={{ backgroundColor:signupBackground }}
                                    placeholder=" Enter your email"
                                >
                                </input>
                                <button className="send">
                                    Send
                                </button>
                            </div>
                        </form>
                        <p className="formText"> We only send interesting and relevant emails</p>
                    </div> {/* form input bundle ending */}
                </div> {/* footer form ending */}
            </div> {/* footer nav ending */}
        </div> {/* wrapper ending */}
    </section>
 )   
}

export default TopFooter;