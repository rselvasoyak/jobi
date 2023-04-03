import whyUsImg from "../../partials/assets/mvpAssets/Left.png"
import up from "../../partials/assets/mvpAssets/upArrow.png"
import down from "../../partials/assets/mvpAssets/downArrow.png"

const AboutUs = () => {
    return(
       <section className="whyUs" aria-label="Why Choose Us">
        <div className="wrapper">
            <div className="whyUsImgCont">
                <img src={whyUsImg} alt="Content displaying different applicant and job search elements from the site"></img>
            </div>
            <div className="whyUsContent">
                <div className="headerInfo">
                    <h4>Why choose us?</h4>
                    <h2> World of talent at your fingertips</h2>
                </div>
                <div className="accordionInfo">
                    <div className="reason">
                        <div className="topRow">
                            <p className="reasonTitle">
                                seamless search
                            </p>
                            <button className="accordionButton" aria-expanded="true" aria-controls="reason1Text">
                                {/* <img src={up}alt="Arrow pointing up"></img> */}
                                <img src={down}alt="Arrow pointing down"></img>
                            </button>
                        </div>
                       <p className="reasonText"> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet risus id nunc porta, vitae venenatis sapien interdum. Phasellus dignissim laoreet suscipit. 
                       </p>
                    </div>
                    <div className="reason">
                        <div className="topRow">
                            <p className="reasonTitle">
                                hire top talents
                            </p>
                            <button className="accordionButton" aria-expanded="false" aria-controls="reason1Text">
                                <img src={up}alt="Arrow pointing up"></img>
                                {/* <img src={down}alt="Arrow pointing down"></img> */}
                            </button>
                        </div>
                        {/* <p className="reasonText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet risus id nunc porta, vitae venenatis sapien interdum. Phasellus dignissim laoreet suscipit. 
                        </p> */}
                    </div>
                    <div className="reason">
                        <div className="topRow">
                            <p className="reasonTitle">
                                protected payments, every time
                            </p>
                            <button className="accordionButton" aria-expanded="false" aria-controls="reason1Text">
                                <img src={up}alt="Arrow pointing up"></img>
                                {/* <img src={down}alt="Arrow pointing down"></img> */}
                            </button>
                        </div>
                        {/* <p className="reasonText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet risus id nunc porta, vitae venenatis sapien interdum. Phasellus dignissim laoreet suscipit. 
                        </p> */}
                    </div>
                </div>
                <div className="learnMore"> 
                 <a className="secondaryLink" href=" "> learn more</a>
                </div>{/* learn more ending */}
            </div> {/* why choose us content ending  */}
        </div> {/* wrapper ending */}
       </section>
    )
}

export default AboutUs;
