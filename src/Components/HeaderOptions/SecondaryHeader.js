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
                                <label htmlFor="searchInput">What are you looking for? </label>
                                <input
                                id="searchInput"
                                placeholder="UX Design"
                                aria-describedby="searchInputDescription"
                                ></input>
                                <span id="searchInputDescription" className="sr-only">Enter a keyword to search for job listings</span>
                            </div>

                            <div className="searchOptions">
                                <label htmlFor="categorySelect">Category</label>
                                <select id="categorySelect" aria-describedby="categoryDescription">
                                    <option value="webDesign" label="Web Design">Web Design</option>
                                    <option value="uxDesign" label="UX Design">US Design</option>
                                    <option value="accounting" label="Accounting">Accounting</option>
                                    <option value="other" label="Other">Other</option>
                                </select>
                                <span id="categoryDescription" className="sr-only">Please select a category from the options listed.</span>
                            </div>
                        </form>
                        <button className="search" aria-label="Search for jobs">
                            search
                        </button>
                    </div>
                ) : null
            }
            <div className="designMiniIcon">
                <img src={bigDrawing} alt="Decorative drawing"></img>
            </div>
        </header>
        </>
    )
}

export default SecondaryHeader;