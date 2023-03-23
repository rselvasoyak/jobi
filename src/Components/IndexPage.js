// Components
import AboutUs from "./AboutUs";
import BusinessSolution from "./BusinessSolution";
import Feedback from "./Feedback";
import IndexHeader from "./HeaderOptions/IndexHeader";
import LeadingBrands from "./LeadingBrands";
import Marketplace from "./Marketplace";
import TrendingServices from "./TrendingServices";

const IndexPage =() => {
    return(
        <>
            <header>
                <IndexHeader />
            </header>
            <main>
                <TrendingServices />
                <Marketplace />
                <AboutUs />
                <BusinessSolution />
                <Feedback />
                <LeadingBrands />
            </main>
        </>
    );
}

export default IndexPage; 