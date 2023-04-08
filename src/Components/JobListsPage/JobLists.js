// import google from "../../partials/assets/mvpAssets/Logo-1.png"
import bookmark from "../../partials/assets/mvpAssets/Bookmark-1.png"
import {Link} from "react-router-dom";

const JobLists = ({jobs}) => {

    const arrayLength = () => {
        console.log(jobs);
        return jobs.length.toString();
    }
    
    return(
        <section className="jobLists"> 
            <div className="topTopRow"> 
            {
                <p>
                   All <span>{arrayLength()}</span> jobs found 
                </p>
            }
            </div>
            <div className="listsContainer">
                {jobs.map ((job)=> {
                    // console.log(job); 
                    const { logo, key, contractType, title, location, employer} = job;
                    return(
                        <Link to="/singleJobPage" className="job" key={key}>
                                {/* <div className="job" key={key}> */}
                                    <div className="topListRow">
                                        <div className="logoCont" aria-label="Google logo">
                                            <img src={logo} alt={`${employer} logo`}></img>
                                        </div>
                                        <div>
                                            <button aria-label="Bookmark this job">
                                                <img src={bookmark} alt="bookmarking icon" aria-label="Bookmark your job"></img>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="listContent">
                                        <div>
                                            <p className="jobType">{contractType}</p>
                                            <p className="jobTitle"> {title}</p>
                                            <p className="salary"> $300-$450 <span className="freq"> /Week</span></p>
                                        </div>
                                    </div>
                                    <div className="bottomListRow">
                                        <p>{location.country},{location.city}</p>
                                        <div>
                                            <a href="/" className="apply" aria-label="Apply for this job"> apply</a>
                                        </div>
                                    </div> {/* bottom list ending */}
                                {/* </div> {/* /* job ending */ } 
                        </Link>
                    );
                })}
            </div>  {/* list container ending */}
    </section>
    )
}

export default JobLists;