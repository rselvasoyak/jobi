import { FaFacebook, FaTwitter, FaCopy } from "react-icons/fa";
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlinePaperClip } from "react-icons/ai";


const JobDetails = () => {
    return(
        <section  className="jobDetails" aria-label="Job Details">
            <div className="wrapper">
                <div className="singleJobTitle">
                    <p> 18 Jul 2022 by <span>Adobe</span></p>
                    <h3>Senior Product & Brand Design</h3>
                    <div className="companyLinks">
                        <div className=" link media">
                            <a href="https://www.facebook.com/" title="Facebook Link"> 
                            <FaFacebook /> Facebook </a>
                        </div>
                        <div className=" link media">
                            <a href="https://www.facebook.com/" title="Twitter Link"> <FaTwitter /> Twitter </a>
                        </div>
                        <button className="link copy" aria-label="Copy" type="copy">
                            <FaCopy /> Copy
                        </button>
                    </div>
                </div>
                <div className="detail overview">
                    <h4>Overview:</h4>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque deserunt, culpa tempore itaque asperiores nisi ex cum velit exercitationem alias magni vero reiciendis fuga, excepturi atque! Deserunt laborum velit aspernatur doloremque odio. Eius culpa sint enim inventore aut eveniet eos soluta quaerat magnam? Non consequatur molestias repellat minus ut? Fugiat.<span><a href="/">Learn more here</a></span> Please indicate which location(s) you are interested. </p>
                </div>
                <div className=" detail jobDescription">
                    <h4>Job Description:</h4>
                    <p id="overview" className="sr-only">This is an overview of the interested job.</p>
                    <p aria-describedby="overview"> As a <span>Product Designer</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque deserunt, culpa tempore itaque asperiores nisi ex cum velit exercitationem alias magni vero reiciendis fuga, excepturi atque! Deserunt laborum velit aspernatur doloremque odio.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque deserunt, culpa tempore itaque asperiores nisi ex cum velit exercitationem alias magni vero reiciendis fuga, excepturi atque! Deserunt laborum velit aspernatur doloremque odio. Eius culpa sint enim inventore aut eveniet eos soluta quaerat magnam? Non consequatur molestias repellat minus ut? Fugiat.</p>
                </div>
                <div className=" detail responsabilities">
                    <h4>Responsabilities:</h4>
                    <p id="resp" className="sr-only">These are the job responsibilities for the position of a software developer.</p>
                    <ul aria-describedby="resp">
                        <li className="singleResp">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque deserunt, culpa tempore itaque asperiores nisi ex cum velit exercitationem alias magni vero reiciendis fuga</li>
                        <li className="singleResp">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque deserunt, culpa tempore itaque asperiores nisi ex cum velit exercitationem alias magni vero reiciendis fuga</li>
                        <li className="singleResp">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque deserunt, culpa tempore itaque asperiores nisi ex cum velit exercitationem alias magni vero reiciendis fuga</li>
                        <li className="singleResp">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque deserunt, culpa tempore itaque asperiores nisi ex cum velit exercitationem alias magni vero reiciendis fuga</li>
                        <li className="singleResp">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque deserunt, culpa tempore itaque asperiores nisi ex cum velit exercitationem alias magni vero reiciendis fuga</li>
                        <li className="singleResp">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque deserunt, culpa tempore itaque asperiores nisi ex cum velit exercitationem alias magni vero reiciendis fuga</li>
                        <li className="singleResp">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque deserunt, culpa tempore itaque asperiores nisi ex cum velit exercitationem alias magni vero reiciendis fuga</li>
                        <li className="singleResp">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque deserunt, culpa tempore itaque asperiores nisi ex cum velit exercitationem alias magni vero reiciendis fuga</li>
                    </ul>
                </div>
                <div className=" detail requiredSkills">
                    <h4>Required Skills:</h4>
                    <p id="skills" className="sr-only">These are the required skills for this job.</p>
                    <ul aria-describedby="skills" aria-label="required skills">
                    <li className="skill">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque deserunt, culpa tempore itaque asperiores nisi ex cum velit exercitationem alias magni vero reiciendis fuga</li>
                    <li className="skill">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque deserunt, culpa tempore itaque asperiores nisi ex cum velit exercitationem alias magni vero reiciendis fuga</li>
                    <li className="skill">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque deserunt, culpa tempore itaque asperiores nisi ex cum velit exercitationem alias magni vero reiciendis fuga</li>
                    <li className="skill">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque deserunt, culpa tempore itaque asperiores nisi ex cum velit exercitationem alias magni vero reiciendis fuga</li>
                    <li className="skill">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque deserunt, culpa tempore itaque asperiores nisi ex cum velit exercitationem alias magni vero reiciendis fuga</li>
                    </ul>
                </div>
                <div className=" detail benefits">
                    <h4>Benefits:</h4>
                    <p id="benefit" className="sr-only">These are the benefits provided for this job.</p>
                    <ul aria-describedby="resp">
                        <li className="benefit">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque deserunt, culpa tempore itaque asperiores nisi ex cum velit exercitationem alias magni vero reiciendis fuga</li>
                        <li className="benefit">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque deserunt, culpa tempore itaque asperiores nisi ex cum velit exercitationem alias magni vero reiciendis fuga</li>
                        <li className="benefit">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque deserunt, culpa tempore itaque asperiores nisi ex cum velit exercitationem alias magni vero reiciendis fuga</li>
                        <li className="benefit">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque deserunt, culpa tempore itaque asperiores nisi ex cum velit exercitationem alias magni vero reiciendis fuga</li>
                        <li className="benefit">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque deserunt, culpa tempore itaque asperiores nisi ex cum velit exercitationem alias magni vero reiciendis fuga</li>
                    </ul>

                </div>
            </div>
        </section>
    )
}
export default JobDetails;