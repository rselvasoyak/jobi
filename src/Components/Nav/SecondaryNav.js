import logo from "../../partials/assets/mvpAssets/Logo.png";
import shape from "../../partials/assets/mvpAssets/Shape.png";
// import {useLocation} from "react-router-dom";

const SecondaryNav = () => {
    // const location = useLocation();
    // const bgColor = location.pathname === "/error" ? "#fff" : "#254135";

    return (
        <>
           {/*  {   
                location.pathname === "/error" ? */} 
                    <nav className="secondNavigation" /* style ={{backgroundColor: bgColor}} */>
                            <div className="secNavLeft">
                                <div className="navLeftContent">
                                    <div className="logo">
                                        <img src={logo} alt=" jobi logo with lime green and light green cirles"></img>
                                    </div>
                                    <div className="categButton">
                                        <button className="category">
                                            Category
                                        </button>
                                    </div>
                                </div>
                                <ul className="secondNav">
                                    <li><a href="/">home</a></li>
                                    <li><a href="/">job</a></li>
                                    <li><a href="/"> explore </a></li>
                                    <li><a href="/">contact</a></li>
                                    <li><a href="/"> pages </a></li>
                                </ul>
                            </div>{/* secNAvLeft ending */}
                            <div className="designIcon">
                                <img src={shape} alt=" a complimentary drawing design"></img>
                            </div>
                            <div className="jobLinks">
                                <div className="postLogin">
                                    <a href="/" className="post"> post job</a>
                                    <button className="login"> login </button>
                                </div>
                                <div>
                                    <a href="/" className="primaryLink">hire top talents</a>
                                </div>
                            </div>{/* job links end */}
                        </nav>
                  {/*   ) : null
                } */}
        </>
    )
}

export default SecondaryNav;