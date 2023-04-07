import secondLogo from "../../partials/assets/mvpAssets/Icon-8.png"
import prevButton from "../../partials/assets/mvpAssets/Slider Btn Prev.png"
import nextButton from "../../partials/assets/mvpAssets/Slider Button Next.png"
import vector from "../../partials/assets/mvpAssets/Vector 720.png"
import headshot1 from "../../partials/assets/headshot1.jpg";
import headshot2 from "../../partials/assets/headshot2.jpg";
import headshot3 from "../../partials/assets/headshot3.jpg";
import headshot4 from "../../partials/assets/headshot4.jpg";
import headshot5 from "../../partials/assets/headshot5.jpg";




const Feedback = () => {
    return (
        <section className="feedback" aria-label="feedback section">
            <div className="wrapper">
                <div className="feedbackHeader">
                    <div className="feedbackLogo">
                        <img src={secondLogo} alt="Jobi company logo"
                        aria-label="Jobi logo"></img>
                    </div>
                    <h2> Check what these clients have to say.</h2>
                </div>
                <div className="quote">
                    <div className="quoteAndButtons">
                        <button className="carouselBtn"
                        aria-label="Previous button"
                        >
                            <img src={prevButton} alt="button to go left on on changing content" ></img>
                        </button>
                        <blockquote>❝ Very easy to set-up. I had no experience with hosting before signing up with HostGator but they've made everyhting seem simple. ❞</blockquote>
                        <button className="carouselBtn" tabindex="0"
                        aria-label="Next button"
                        >
                            <img src={nextButton} alt="button to go right on on changing content"
                            ></img>
                        </button>
                    </div>
                    <p className="quoteBy"> 
                        <div>
                            <img src={vector} alt="vector line"></img>
                        </div>
                        <span className="quoteByFrom">Rashed ks.</span>
                        Italy
                    </p>
                </div> {/* quote ending */}
                <ul className="clientImgs">
                    <li className="client">
                        <img src={headshot1} alt="Headshot of client who gave feedback"></img>
                    </li>
                    <li className="client">
                        <img src={headshot2} alt="Headshot of client who gave feedback"></img>
                    </li>
                    <li className="client">
                        <img src={headshot3} alt="Headshot of client who gave feedback"></img>
                    </li>
                    <li className="client">
                        <img src={headshot4}alt="Headshot of client who gave feedback"></img>
                    </li>
                    <li className="client">
                        <img src={headshot5} alt="Headshot of client who gave feedback"></img>
                    </li>{/* client ending */}
                </ul> {/* client Imgs ending */}
            </div> {/* wrapper ending */}
        </section>
    )
}

export default Feedback;