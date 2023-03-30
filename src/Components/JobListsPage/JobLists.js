import google from "../../partials/assets/mvpAssets/Logo-1.png"

const JobLists = ({jobs}) => {
    return(
        <section className="jobLists"> 
            <div className="topTopRow"> 
                <p>
                   All <span>7,096</span> jobs found 
                </p>
            </div>
            <div className="listsContainer">
                {jobs.map ((job)=> {
                    // console.log(job); 
                    const { key, contractType, title, location} = job;
                    return(
                        <div className="job" key={key}>
                            <div className="topListRow">
                                <div className="logoCont">
                                    <img src={google} alt=""></img>
                                </div>
                                <div>
                                    <button>
                                        Bookmark
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
                                    <a href=" " className="apply"> apply</a>
                                </div>
                            </div> 
                        </div> 
                    );
                })}
            </div>  
    </section>
    )
}

export default JobLists;