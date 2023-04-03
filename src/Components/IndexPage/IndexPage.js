// Components
import AboutUs from "./AboutUs";
import BusinessSolution from "./BusinessSolution";
import Feedback from "./Feedback";
import IndexHeader from "../HeaderOptions/IndexHeader";
import LeadingBrands from "./LeadingBrands";
import Marketplace from "./Marketplace";
import TopSkills from "./TopSkills";
import TrendingServices from "./TrendingServices";
import Nav from '../Nav/Nav';
import HowItWorks from "./HowItWorks";


const IndexPage =() => {
    return(
        <>
            <header>
                <Nav />
                <IndexHeader />
            </header>
            <main>
                <TrendingServices />
                <Marketplace />
                <AboutUs />
                <BusinessSolution />
                <HowItWorks />
                <Feedback />
                <LeadingBrands />
                <TopSkills />
            </main>
        </>
    );
}

export default IndexPage; 