import leadingImg from "../../partials/assets/mvpAssets/Right.png"

const LeadingBrands = () => {
    return (
        <section className="leadingBrand" aria-label="leading brands information container">
            <div className="wrapper">
                <div className="content">
                    <h2>
                        Collaboration
                        <span>with leading</span>
                        Brands.
                    </h2>
                    <p>
                        We collaborate with a number of top tier companies on imagining the future of work, have a look.
                    </p>
                    <div className="learnMore">
                        <a className="secondaryLink learnMore" href=" " aria-label="Learn more about our collaborations with leading brands"> learn more</a>
                    </div>
                </div>
                <figure className="leadingBrandImg">
                    <img src={leadingImg} alt="Design with company logo and an ad stating they collaborate with 100+ leading brands" aria-describedby="leadingBrandImgCaption"></img>
                    <figcaption className="sr-only" id="leadingBrandImgCaption">Design with company logo and an ad stating they collaborate with 100+ leading brands</figcaption>
                </figure>
            </div>
        </section>
    )
}

export default LeadingBrands;