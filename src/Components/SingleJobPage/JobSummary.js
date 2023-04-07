
const JobSummary = () => {
    return(
        <aside className="jobSummary" aria-label="Job Summary">
            <div className="wrapper">
                <div className="companyTitle">
                    <div className="companyImg">
                        <img src="" alt="Company Logo"></img>
                    </div>
                    <p className="companyName">Company</p>
                    <div>
                        <a className="secondaryLink" href="/" title="Visit Company Website"> Visit Website </a>
                    </div>
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
                        <div className="mainInfo second">
                            <div className="info">
                                <p className="heading">Salary</p>
                                <p className="jobSpecs">50k</p>
                            </div>
                            <div className="info">
                                <p className="heading">Location</p>
                                <p className="jobSpecs"> Barcelna</p>
                            </div>
                            <div className="info">
                                <p className="heading"> Experience</p>
                                <p className="jobSpecs">2 years</p>
                            </div>
                        </div>
                    </div>
                    <div className="keywords">
                        <ul>
                            <li> design</li>
                            <li> product design</li>
                            <li> ui ux</li>
                            <li> brands</li>
                            <li> application</li>
                        </ul>
                    </div>
                    <a href="/" className="primaryLink applyLink">Apply Now</a>
                </div>{/* main details ending */}
           </div>{/* wrapper ending */}
        </aside>
    )
}

export default JobSummary;