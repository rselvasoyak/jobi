import logo1 from "../../partials/assets/mvpAssets/Logo 1.png"
import logo2 from "../../partials/assets/mvpAssets/Logo 2.png"
import logo3 from "../../partials/assets/mvpAssets/Logo 3.png"

const IndexHeader = () => {

    return (
        <>
        <header>
                <nav className="indexSecondNav">
                    <ul>
                        <li><a href=" "> design & creative </a></li>
                        <li><a href=" ">it & development</a> </li>
                        <li><a href=" "> trend </a></li>
                        <li><a href=" "> web & mobile dev</a></li>
                        <li><a href=" "> writing </a></li>
                        <li> <a href=" "> music &audio</a></li>
                        <li><a href=" "> video & animation</a></li>
                        <select
                        className="searchOption"
                        id="searchOption" name="searchOption">
                            <option value="more">more</option>
                        </select>
                    </ul>
                </nav>
                <section className="headerContent">
                    <div className="wrapper">
                        <div className="indexHeaderText">
                            <p className="headerP">#1 online marketplace</p>
                            <h1> Find the talents for any job. </h1>
                            <p> Unlock your potential with quality job & earn from world leading brands & co. </p>
                            <a className="secondaryLink" href=" "> Post a job </a>
                            <div className="trustedBy">
                                <p> Trusted by: </p>
                                <div className="trustedCompanies">
                                    <img src={ logo1 } alt=""></img>
                                    <img src={ logo2 } alt=""></img>
                                    <img src={ logo3 } alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div className="headerImg">
                            <img src="http://placekitten.com/g/200/300" alt=""></img>
                        </div>
                    </div> {/* wrapper ending */}
                </section> {/* header content ending */}
        </header>
        </>
    )
}

export default IndexHeader;