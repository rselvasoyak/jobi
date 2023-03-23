import facebook from "../partials/assets/mvpAssets/Facebook.png"
import insta from "../partials/assets/mvpAssets/instagram.png"
import pinterest from "../partials/assets/mvpAssets/pinterest.png"
import TopFooter from "./TopFooter"

const Footer = () => {
    return (
        <footer>
            <TopFooter />
            <div className="wrapper">
                <div className="footerLinks">
                    <a href=" ">privacy & terms.</a>
                    <a href=" ">contact us</a>
                </div>
                <p>Copyright @ 2022 jobi inc.</p>
                <div className="socialMedia">
                    <div className="media">
                        <img src={facebook} alt="facebook logo"></img>
                    </div>
                    <div className="media">
                        <img src={insta} alt=""></img>
                    </div>
                    <div className="media">
                        <img src={pinterest} alt=""></img>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;