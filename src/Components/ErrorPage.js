import slider from "../partials/assets/mvpAssets/Arrow 3.png"
// import SecondaryHeader from "./HeaderOptions/SecondaryHeader";
import SecondaryNav from "./Nav/SecondaryNav";
import errorPage from "../partials/assets/error.png";

const ErrorPage = () => {
    return (
        <>
            <SecondaryNav />
            <section className="errorPage">
                <div className="wrapper">
                    <div className="errorImg">
                        <img src={errorPage} alt="404 not Found"></img>
                    </div>
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
        </>
    )
}

export default ErrorPage;