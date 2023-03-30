// import left from "../partials/assets/mvpAssets/Left Arrow.png";
// import right from "../partials/assets/mvpAssets/Right Arrow.png";


const TrendingServices = () => {
    return (
        <section className="trendingServ">
            <div className="wrapper">
                <div className="serviceTopRow">
                    <h2> trending services </h2>
                    {/* <div className="carouselButtons">
                        <button className="left"> 
                            <img src={ left }alt="left button arrow"></img>
                        </button>
                        <button className="right"> 
                            <img src={ right }alt="right button arrow"></img>
                        </button>
                    </div> */}
                </div>
                <ul className="serviceLinks">
                    <li className="service">
                        <div className="serviceImgCont">
                            {/* <img></img> */}
                        </div>
                        <div className="serviceTitle">
                            <p><span> wordPress </span> development.</p>
                        </div>
                    </li>
                    <li className="service">
                        <div className="serviceImgCont">
                            {/* <img></img> */}
                        </div>
                        <div className="serviceTitle">
                           <p><span> audio & </span> video editing.</p>
                        </div>
                    </li>
                    <li className="service">
                        <div className="serviceImgCont">
                            {/* <img></img> */}
                        </div>
                        <div className="serviceTitle">
                            <p><span> product & </span> branding design</p>
                        </div>
                    </li>
                    <li className="service">
                        <div className="serviceImgCont">
                            {/* <img></img> */}
                        </div>
                        <div className="serviceTitle">
                            <p><span> admin & </span> customer support </p>
                        </div>
                    </li>
                </ul> {/* serviceLinks ending */}

            </div> {/* wrapper ending */}
        </section>
    )
}

export default TrendingServices;