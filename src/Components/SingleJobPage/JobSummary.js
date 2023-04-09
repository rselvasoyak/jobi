import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
const JobSummary = ({jobs}) => {

    const [chosenJob, setChosenJob] = useState({
        salary: {},
        location: {},
        expertiseLevel: "",
        experienceYears: "",
        contractType: "",
        keywords:[],
        date: "",
        url:""
    });

    const { employer } = useParams();
    const company = employer.replace(':', '');
    console.log({employer});

    useEffect(() => {
        const singleJob = jobs.find((job) => job.employer === company);
        if (singleJob) {
            setChosenJob(singleJob);
        }
    }, [company, jobs]);

    // const averageSalary = () => {

    // }


    const { url, salary, experienceYears, expertiseLevel, location, contractType, date, keywords } = chosenJob;

    return(
        <aside className="jobSummary" aria-label="Job Summary">
            <div className="wrapper">
                <div className="companyTitle">
                    <div className="companyImg">
                        <img src="" alt="Company Logo"></img>
                    </div>
                    <p className="companyName">{company}</p>
                    <div>
                        <a className="secondaryLink" href={url} title="Visit Company Website"> Visit Website </a>
                    </div>
                </div>
                <div className="mainDetails">
                    <div className="jobMainInfo">
                        <div className="mainInfo">
                            <div className="info">
                                <p className="heading">Salary</p>
                                <p className="jobSpecs"></p>
                            </div>
                            <div className="info">
                                <p className="heading">Location</p>
                                <p className="jobSpecs"> {location.city}, {location.country}</p>
                            </div>
                            <div className="info">
                                <p className="heading"> Date</p>
                                <p className="jobSpecs">{date}</p>
                            </div>
                        </div>
                        <div className="mainInfo second">
                            <div className="info">
                                <p className="heading">Expertise</p>
                                <p className="jobSpecs">{expertiseLevel}</p>
                            </div>
                            <div className="info">
                                <p className="heading">Job Type</p>
                                <p className="jobSpecs">{contractType}</p>
                            </div>
                            <div className="info">
                                <p className="heading"> Experience</p>
                                <p className="jobSpecs">{experienceYears} Years</p>
                            </div>
                        </div>
                    </div>
                    <div className="keywords">
                        <ul>
                            {keywords.map((keyword)=> {
                                return(
                                    <li>{keyword}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <a href="/" className="primaryLink applyLink">Apply Now</a>
                </div>{/* main details ending */}
           </div>{/* wrapper ending */}
        </aside>
    )
}

export default JobSummary;