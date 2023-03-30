import { useLocation } from "react-router-dom";
import bigDrawing from "../../partials/assets/mvpAssets/Bg Shape.png"

const SecondaryHeader = () => {
    const location = useLocation();
    console.log(location);
    return (
        <>
        <header className="secondHeader">
            <h1>Job Listing</h1>
            <p>We delivered blazing fast & striking work solution</p>
            {
                location.pathname === "/jobLists" ? (
                    <div className="formCont">
                        <form>
                            <div className="searchInput">
                                <p>What are you looking for? </p>

                                <label></label>
                                <input
                                placeholder="UX Design"
                                ></input>
                            </div>

                            <div className="searchOptions">
                                <p> Category </p>
                                <select>
                                    <option>Web Design</option>
                                    <option>US Design</option>
                                    <option>Accounting</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </form>
                        <button className="search">
                            search
                        </button>
                    </div>
                ) : null
            }
            <div className="designMiniIcon">
                <img src={bigDrawing} alt=""></img>
            </div>
        </header>
        </>
    )
}

export default SecondaryHeader;