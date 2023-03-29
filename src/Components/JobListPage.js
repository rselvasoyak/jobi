import FirebaseDatabase from "./FirebaseDatabase";
import JobLists from "./JobLists";
import JobFilterForm from "./JobListsPage/JobFilterForm";
import SecondaryNav from "./JobListsView/SecondaryNav";
import SecondaryHeader from "./SecondaryHeader";


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