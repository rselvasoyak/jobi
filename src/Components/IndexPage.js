// Components
import AboutUs from "./AboutUs";
import BusinessSolution from "./BusinessSolution";
import Feedback from "./Feedback";
import IndexHeader from "./HeaderOptions/IndexHeader";
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
            </main>
        </>
    );
}

export default IndexPage; 