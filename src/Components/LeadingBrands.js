import leadingImg from "../partials/assets/mvpAssets/Right.png"

const LeadingBrands = () => {
    return (
        <section className="leadingBrand">
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
                    <a className="secondaryLink learnMore" href=" "> learn more</a>
                </div>
                <div className="leadingBrandImg">
                    <img src={leadingImg} alt=""></img>
                </div>
            </div>
        </section>
    )
}

export default LeadingBrands;