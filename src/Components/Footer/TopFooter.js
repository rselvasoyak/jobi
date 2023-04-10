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
    <>
        { location.pathname === "/*" ? null : (
            <section className="topFooter" style={{ backgroundColor: bgColor }}>
                <div className="wrapper">
                    <div className="footerHeader">
                        <div className="footerContent">
                            <h3>Most complete job portal.</h3>
                            <p>Signup and start find your job or talents.</p>
                        </div>
                        <div className="footerTopLinks"> 
                            <Link to="/jobLists" className={`${lookLinkStyle}`} aria-label="View Job Lists Page"> Looking for Job?</Link>
                            <a className={`${postJobStyle}`} href=" " aria-label="Post a Job"> Post a job</a>
                        </div>
                    </div>
                    <div className="footerNav">
                        <div className="brandVisual">
                            <div className="logo" >
                                <img src= {logo} alt="Jobi company logo with 2 green and while circles overlapping"></img>
                            </div>
                            <div className="shadowBox">
                                <img src={drawing} alt="dotted design element"></img>
                            </div>
                        </div>
                        <div className="footerNavs">
                            <div className="footerNavList">
                                <h5>products</h5>
                                <ul>
                                    <li>
                                        <a href="/" aria-label="Take the Tour">
                                            Take the tour
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" aria-label="Live Chat">
                                            Live chat 
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" aria-label="Self-Service">
                                            Self-Service
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" aria-label="Mobile">
                                            Mobile
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" aria-label=" Collaboration">
                                            Collaboration
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" aria-label="Reviews">
                                            Reviews
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footerNavList">
                                <h5>links</h5>
                                <ul>
                                    <li>
                                        <a href="/" aria-label="Pricing">
                                            Pricing
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" aria-label="About us">
                                            About us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" aria-label="Careers">
                                            Careers
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" aria-label="Blog">
                                            Blog
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footerNavList">
                                <h5>legal</h5>
                                <ul>
                                    <li>
                                        <a href="/" aria-label="Terms of Use ">
                                            Terms of Use 
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" aria-label="Terms & Conditions">
                                            Terms & Conditions
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" aria-label="Privacy">
                                            Privacy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" aria-label="Cookie Policy">
                                            Cookie Policy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footerForm">
                            <div>
                                <h5>newsletter</h5>
                                <p>Join & get important new regularly</p>
                            </div>
                            <div className="formInputBundle">
                                <form>
                                    <label htmlFor="newsletter-email"></label>
                                    <div className="inputRow" style={{ backgroundColor:signupBackground }}>
                                        <input
                                        style={{ backgroundColor:signupBackground }}
                                        aria-label="Enter your email address to subscribe to our newsletter"
                                        placeholder=" Enter your email"
                                        id="newsletter-email"
                                        >
                                        </input>
                                        <button className="send"
                                        aria-label="Subscribe to newsletter">
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
        )}
    </>
 )   
}

export default TopFooter;