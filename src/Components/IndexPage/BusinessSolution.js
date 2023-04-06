import business from "../../partials/assets/businessSolution.jpg";

const BusinessSolution = () => {
    return (
        <section className="businessSolution" aria-label="Business Solutions">
            <div className="wrapper">
                <div className="businessContent" aria-label="business solution content">
                    <div className="businessText">
                        <div className="topContent">
                            <h4> business solution </h4>
                            <h2> Get quick <span>Solution For Your</span> <span className="emphasize">Business</span></h2>
                            <p>
                               A full suite of hybrid workforce management tools are yours to use, as well as access to our top 1% of talent. 
                            </p>
                        </div>
                        <div className="bottomInfo">
                            <div className="stats" aria-label="stats information">
                                <div className="stat" aria-label="Worldwide Clients">
                                    <p className="statTitle"> 30 k+</p>
                                    <p>Worldwide Client</p>
                                </div>
                                <div className="stat" aria-label="Top Talents">
                                    <p className="statTitle"> 3% </p>
                                    <p>Top Talents</p>
                                </div>
                                <div className="stat" aria-label="Dollar Payout">
                                    <p className="statTitle"> 7mil</p>
                                    <p>Doller Payout</p>
                                </div>
                            </div>{/* stats ending */}
                        </div>{/* bottom nav ending */}
                    </div>{/* business content ending */}
                    <div>
                        <a className="exploreJobi" href=" "> explore jobi business</a>
                    </div>
                </div>{/* business content ending */}
                <div className="businessImg">
                    <img src={business} alt="a man working on his laptop"></img>
                </div>
            </div>{/* wrapper ending */}
        </section>
    )
}

export default BusinessSolution;