import { FaFacebook, FaTwitter, FaCopy } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";


const JobDetails = ({jobs}) => {

    const [chosenJob, setChosenJob] = useState({
        date:"",
        overview: "",
        description: "",
        benefits: [],
        requiredSkills: [],
        responsibilities: [],
        title: "",
        twitter: "",
        facebook: ""
    });

    console.log(jobs);
    const { employer } = useParams();
    const company = employer.replace(':', '');
    console.log({employer});

    useEffect(() => {
        const singleJob = jobs.find((job) => job.employer === company);
        if (singleJob) {
            setChosenJob(singleJob);
        }
    }, [company, jobs]);


    const { date, overview, description, benefits, requiredSkills, responsibilities,  title, twitter, facebook } = chosenJob;

    return(
        <section  className="jobDetails" aria-label="Job Details" >
            <div className="wrapper">
                <div className="singleJobTitle">
                    <p> {date} by <span>{company}</span></p>
                    <h3>{title}</h3>
                    <div className="companyLinks">
                        <div className=" link media">
                            <a href={{facebook}} title="Facebook Link"> 
                            <FaFacebook /> Facebook </a>
                        </div>
                        <div className=" link media">
                            <a href={twitter} title="Twitter Link"> <FaTwitter /> Twitter </a>
                        </div>
                        <button className="link copy" aria-label="Copy" type="copy">
                            <FaCopy /> Copy
                        </button>
                    </div>
                </div>
                <div className="detail overview">
                    <h4>Overview:</h4>
                    <p> {overview} .<span><a href="/">Learn more here</a></span> Please indicate which location(s) you are interested. </p>
                </div>
                <div className=" detail jobDescription">
                    <h4>Job Description:</h4>
                    <p id="overview" className="sr-only">This is an overview of the interested job.</p>
                    <p aria-describedby="overview"> As a <span></span> {description}</p>
                </div>
                <div className=" detail responsabilities">
                    <h4>Responsabilities:</h4>
                    <p id="resp" className="sr-only">These are the job responsibilities for the position of a software developer.</p>
                    <ul aria-describedby="resp">
                        {responsibilities.map((responsability) => {
                            
                            return(
                                <li className="singleResp" >{responsability}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className=" detail requiredSkills">
                    <h4>Required Skills:</h4>
                    <p id="skills" className="sr-only">These are the required skills for this job.</p>
                    <ul aria-describedby="skills" aria-label="required skills">
                         {requiredSkills.map((skill)=> {
                                return(                                    
                                    <li className="skill">{skill}</li>
                                )
                        })}
                    </ul>
                </div>
                <div className=" detail benefits">
                    <h4>Benefits:</h4>
                    <p id="benefit" className="sr-only">These are the benefits provided for this job.</p>
                    <ul aria-describedby="resp">
                         {benefits.map((benefit)=> {
                            return(                                
                                <li className="benefit">{benefit}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default JobDetails;