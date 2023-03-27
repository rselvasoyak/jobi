import JobLists from "./JobLists";
import JobFilterForm from "./JobListsPage/JobFilterForm";
import SecondaryNav from "./JobListsView/SecondaryNav";
import SecondaryHeader from "./SecondaryHeader";

const JobListsPage = () => {
    return(
        <>
            <SecondaryNav />
            <SecondaryHeader />
            <div className="wrapper">
                <JobFilterForm />
                <JobLists />
            </div>
        </>
    )
}

export default JobListsPage;