import SecondaryHeader from "../HeaderOptions/SecondaryHeader";
import SecondaryNav from "../Nav/SecondaryNav";
import JobDetails from "./JobDetails";
import JobSummary from "./JobSummary";
import FirebaseDatabase from "../FirebaseDatabase";

const SingleJobPage = () => {
    return(
        <> 
            <header>
                <SecondaryNav />
                <SecondaryHeader />
            </header>
            <main>
                <FirebaseDatabase>
                    {({jobs}) => (           
                        <div className="wrapper">
                            <JobDetails jobs={jobs}/>   
                            <JobSummary  jobs= {jobs}/>
                        </div>
                    )}
                </FirebaseDatabase>
            </main> 
        </>
    )
}

export default SingleJobPage;