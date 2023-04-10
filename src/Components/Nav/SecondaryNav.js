import logo from "../../partials/assets/mvpAssets/Logo.png";
import logo2 from "../../partials/assets/mvpAssets/Logo-3.png"
import shape from "../../partials/assets/mvpAssets/Shape.png";
import {useLocation} from "react-router-dom";

const SecondaryNav = () => {
    const location = useLocation();
    const bgColor = location.pathname === "/*" ? "#fff" : "#254135";
    const fontColor = location.pathname === "/*" ? "#000" : "#fff";
    const category = location.pathname === "/*" ? "secondCategory" : "category";
    const logoType = location.pathname === "/*" ? logo2 : logo;

    return (
        <>
            <nav className="secondNavigation" style ={{backgroundColor: bgColor}}>
                    <div className="secNavLeft">
                        <div className="navLeftContent">
                            <div className="logo">
                                <img src={logoType} alt=" jobi logo with lime green and light green cirles"></img>
                            </div>
                            <div className="categButton">
                                <button className={`${category}`}>
                                    Category
                                </button>
                            </div>
                        </div>
                        <ul className="secondNav">
                            <li><a href="/" style ={{color: fontColor}}>home</a></li>
                            <li><a href="/" style ={{color: fontColor}}>job</a></li>
                            <li><a href="/" style ={{color: fontColor}}> explore </a></li>
                            <li><a href="*" style ={{color: fontColor}}>contact</a></li>
                            <li><a href="/" style ={{color: fontColor}}> pages </a></li>
                        </ul>
                    </div>{/* secNAvLeft ending */}
                    <div className="designIcon">
                        <img src={shape} alt=" a complimentary drawing design"></img>
                    </div>
                    <div className="jobLinks">
                        <div className="postLogin">
                            <a href="/" className="post" style ={{color: fontColor}}> post job</a>
                            <button className="login" style ={{color: fontColor}}> login </button>
                        </div>
                        <div>
                            <a href="/" className="primaryLink">hire top talents</a>
                        </div>
                    </div>{/* job links end */}
                </nav>
        </>
    )
}

export default SecondaryNav;