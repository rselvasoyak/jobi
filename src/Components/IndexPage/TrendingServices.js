// import left from "../partials/assets/mvpAssets/Left Arrow.png";
// import right from "../partials/assets/mvpAssets/Right Arrow.png";


const TrendingServices = () => {
    return (
        <section className="trendingServ" aria-label="Trending Services">
            <div className="wrapper">
                <div className="serviceTopRow">
                    <h2> trending services </h2>
                    {/* <div className="carouselButtons" aria-label="Carousel Navigation">
                        <button className="left" aria-label="Previous Service"> 
                            <img src={ left } alt="Left arrow button"></img>
                        </button>
                        <button className="right" aria-label="Next Service"> 
                            <img src={ right } alt="Right arrow button"></img>
                        </button>
                    </div> */}
                </div>
                <ul className="serviceLinks">
                    <li className="service">
                        <div className="serviceImgCont">
                            <a href="/"> {/* <img></img> */} </a>
                        </div>
                        <div className="serviceTitle">
                            <p><span> wordPress </span> development.</p>
                        </div>
                    </li>
                    <li className="service">
                        <div className="serviceImgCont">
                            <a href="/" aria-label="Audio and Video Editing"> {/* <img></img> */} </a>
                        </div>
                        <div className="serviceTitle">
                           <p><span> audio & </span> video editing.</p>
                        </div>
                    </li>
                    <li className="service">
                        <div className="serviceImgCont">
                            <a href="/" aria-label="Product and Branding Design"> {/* <img></img> */} </a>
                        </div>
                        <div className="serviceTitle">
                            <p><span> product & </span> branding design</p>
                        </div>
                    </li>
                    <li className="service">
                        <div className="serviceImgCont">
                            <a href=" www.google.com" aria-label="Admin and Customer Support"> {/* <img src={} alt=""></img> */} </a>
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