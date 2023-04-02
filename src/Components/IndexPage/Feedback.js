import secondLogo from "../../partials/assets/mvpAssets/Icon-8.png"
import prevButton from "../../partials/assets/mvpAssets/Slider Btn Prev.png"
import nextButton from "../../partials/assets/mvpAssets/Slider Button Next.png"
import vector from "../../partials/assets/mvpAssets/Vector 720.png"



const Feedback = () => {
    return (
        <section className="feedback">'
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
                        tabindex="0"
                        aria-label="Previous button"
                        >
                            <img src={prevButton} alt="button to go left on on changing content" ></img>
                        </button>
                        <blockquote>❝Very easy to set-up. I had no experience with hosting before signing up with HostGator but they've made everyhting seem simple.❞</blockquote>
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
                <div className="clientImgs">
                    <div className="client">
                        <img src="" alt="Headshot of client who gave feedback"></img>
                    </div>
                    <div className="client">
                        <img src="" alt="Headshot of client who gave feedback"></img>
                    </div>
                    <div className="client">
                        <img src="" alt="Headshot of client who gave feedback"></img>
                    </div>
                    <div className="client">
                        <img src="" alt="Headshot of client who gave feedback"></img>
                    </div>
                    <div className="client">
                        <img src="" alt="Headshot of client who gave feedback"></img>
                    </div>{/* client ending */}
                </div> {/* client Imgs ending */}
            </div> {/* wrapper ending */}
        </section>
    )
}

export default Feedback;