import SecondaryHeader from "../HeaderOptions/SecondaryHeader";
import SecondaryNav from "../Nav/SecondaryNav";
import JobDetails from "./JobDetails";

const SingleJobPage = () => {
    return(
        <> 
        <header>
            <SecondaryNav />
            <SecondaryHeader />
        </header>
        <main>
            <JobDetails />
        </main>
        </>
    )
}

export default SingleJobPage;