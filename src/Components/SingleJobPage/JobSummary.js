

const JobSummary = () => {
    return(
        <aside className="jobSummary" aria-label="Job Summary">
            <div className="wrapper">
                <div className="companyTitle">
                    <div className="companyImg">
                        <img src="" alt="Company Logo"></img>
                    </div>
                    <a className="secondaryLink" href="/" title="Visit Company Website"> Visit Website </a>
                </div>
                <div className="mainDetails">
                    <div className="jobMainInfo">
                        <div className="mainInfo">
                            <div className="info">
                                <p className="heading">Salary</p>
                                <p className="jobSpecs">50k</p>
                            </div>
                            <div className="info">
                                <p className="heading">Location</p>
                                <p className="jobSpecs"> Barcelna</p>
                            </div>
                            <div className="info">
                                <p className="heading"> test</p>
                                <p className="jobSpecs">test</p>
                            </div>
                        </div>
                        <div className="mainInfo">
                            <div className="info">
                                <p className="heading">Salary</p>
                                <p className="jobSpecs">50k</p>
                            </div>
                            <div className="info">
                                <p className="heading">Location</p>
                                <p className="jobSpecs"> Barcelna</p>
                            </div>
                            <div className="info">
                                <p className="heading"> test</p>
                                <p className="jobSpecs">test</p>
                            </div>
                        </div>
                    </div>
                    <div className="keywords">
                        <ul>
                            <li> design</li>
                            <li> product design</li>
                            <li> brands</li>
                            <li> application</li>
                            <li> ui ux</li>
                        </ul>
                    </div>
                    <a href="/" className="primaryLink">Apply Now</a>
                </div>{/* main details ending */}
           </div>{/* wrapper ending */}
        </aside>
    )
}

export default JobSummary;