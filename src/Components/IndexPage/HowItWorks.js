import play from "../../partials/assets/mvpAssets/Video Play Button.png";
import icon1 from "../../partials/assets/icon1.png";
import icon2 from "../../partials/assets/icon2.png";
import icon3 from "../../partials/assets/icon3.png";


const HowItWorks = () => {
    return(
        <section className="howItWorks">
            <div className="wrapper">
                <div className="topCont">
                    <div className="topLeftCont" aria-label="an individual working on their laptop">
                        <img src="" alt="an individual working on their laptop"></img>
                    </div>
                    <div className="topRightCont">
                        <div className="playIcon">
                            <img src={play} alt=""></img>
                        </div>
                        <div className="simpleTitle">
                            <h2>Let's get started</h2>
                            <h2> It's <span>simple.</span></h2>
                        </div>
                        <p>Get access to our top 1% talent as well as a complete set of hybrid workforce management tools.</p>
                    </div>
                </div>
                <div className="bottomCont">
                    <div className="info">
                        <div className="numberIcon">
                            <img src={icon1} alt="icon indicating number 1" ></img>
                        </div>
                        <div className="whySimple">
                            <p> It takes 2 minutes to open an account. </p>
                            <a className="explore" href="/" > open account </a>
                        </div>
                    </div>
                    <div className="info">
                        <div className="numberIcon">
                            <img src={icon2} alt="icon indicating number 2" ></img>
                        </div>
                        <div className="whySimple">
                            <p> Find talents or search your desir work. </p>
                            <a className="explore" href="/" > apply to job or hire </a>
                        </div>
                    </div>
                    <div className="info">
                        <div className="numberIcon">
                            <img src={icon3} alt="icon indicating number 3" ></img>
                        </div>
                        <div className="whySimple">
                            <p> Get work done quickly with jobi gateway </p>
                            <a className="explore" href="/" > payment method </a>
                        </div>
                    </div> {/* info container ending */}
                </div>{/* bottom container ending  */}
            </div> {/* wrapper ending */}
        </section>
    )
}

export default HowItWorks;