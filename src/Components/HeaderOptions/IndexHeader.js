const IndexHeader = () => {
    return (
        <>
        <header>
            <div className="wrapper">
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
                    <div className="indexHeaderContent"></div>
                    <div className="headerImg">
                        <img src="" alt=""></img>
                    </div>
                </section>
            </div>
        </header>
        </>
    )
}

export default IndexHeader;