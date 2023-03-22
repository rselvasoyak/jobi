import left from "../partials/assets/mvpAssets/Left Arrow.png";
import right from "../partials/assets/mvpAssets/Right Arrow.png";


const TrendingServices = () => {
    return (
        <section className="trendingServ">
            <div className="wrapper">
                <div className="serviceTopRow">
                    <h2> trending services </h2>
                    <div className="carouselButtons">
                        <button className="left"> 
                            <img src={ left }alt="left button arrow"></img>
                        </button>
                        <button className="right"> 
                            <img src={ right }alt="right button arrow"></img>
                        </button>
                    </div>
                </div>
                <div className="serviceLinks">
                    <div className="service">
                        <div className="serviceImgCont">
                            {/* <img></img> */}
                        </div>
                        <p><span> wordPress </span> development.</p>
                    </div>
                    <div className="service">
                        <div className="serviceImgCont">
                            {/* <img></img> */}
                        </div>
                        <p><span> audio & </span> video editing.</p>
                    </div>
                    <div className="service">
                        <div className="serviceImgCont">
                            {/* <img></img> */}
                        </div>
                        <p><span> product & </span> branding design</p>
                    </div>
                    <div className="service">
                        <div className="serviceImgCont">
                            {/* <img></img> */}
                        </div>
                        <p> <span> admin & </span> customer support </p>
                    </div>
                </div> {/* service links ending */}
            </div> {/* wrapper ending */}
        </section>
    )
}

export default TrendingServices;