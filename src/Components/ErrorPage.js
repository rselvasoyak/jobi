import slider from "../partials/assets/mvpAssets/Arrow 3.png"

const ErrorPage = () => {
    return (
        <section className="errorPage">
            <div className="wrapper">
                <div className="errorImg"></div>
                <div className="errorContent">
                    <h1>
                        <span className="error">
                            404
                        </span>
                        Page Not Found
                    </h1>
                    <p>Publishing industries for previewing layouts & visual mockups used.</p>
                    <button className="goBack">
                        <p className="goBack">go back</p>
                        <div>
                            <img src={slider} alt="arrow pointing towards right"></img>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage;