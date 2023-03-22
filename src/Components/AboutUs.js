import whyUsImg from "../partials/assets/mvpAssets/Left.png"
import up from "../partials/assets/mvpAssets/upArrow.png"
import down from "../partials/assets/mvpAssets/downArrow.png"

const AboutUs = () => {
    return(
       <section className="whyUs">
        <div className="wrapper">
            <div className="whyUsImgCont">
                <img src={whyUsImg} alt=""></img>
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
                            <button className="accordionButton">
                                <img src={up}alt=""></img>
                                <img src={down}alt=""></img>
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
                            <button className="accordionButton">
                                <img src={up}alt=""></img>
                                <img src={down}alt=""></img>
                            </button>
                        </div>
                        <p className="reasonText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet risus id nunc porta, vitae venenatis sapien interdum. Phasellus dignissim laoreet suscipit. 
                        </p>
                    </div>
                    <div className="reason">
                        <div className="topRow">
                            <p className="reasonTitle">
                                protected payments, every time
                            </p>
                            <button className="accordionButton">
                                <img src={up}alt=""></img>
                                <img src={down}alt=""></img>
                            </button>
                        </div>
                        <p className="reasonText">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet risus id nunc porta, vitae venenatis sapien interdum. Phasellus dignissim laoreet suscipit. 
                        </p>
                    </div>
                </div>
                <div className="learnMore"> 
                 <a className="secondaryLink" href=" "> learn more</a>
                </div>
            </div>
        </div>
       </section>
    )
}

export default AboutUs;