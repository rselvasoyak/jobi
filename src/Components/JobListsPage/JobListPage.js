import FirebaseDatabase from "../FirebaseDatabase";
import JobLists from "../JobListsPage/JobLists";
import JobFilterForm from "./JobFilterForm";
import SecondaryNav from "../Nav/SecondaryNav";
import SecondaryHeader from "../HeaderOptions/SecondaryHeader";


const JobListsPage = () => {
    return(
        <>
            <SecondaryNav />
            <SecondaryHeader />
            <FirebaseDatabase>
                {({jobs}) => (           
                    <div className="wrapper">
                        <JobFilterForm jobs={jobs}/>   
                        <JobLists jobs= {jobs}/>
                    </div>
                )}
            </FirebaseDatabase>
        </>
    )
}

export default JobListsPage;