// Components
import AboutUs from "./AboutUs";
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
            </main>
        </>
    );
}

export default IndexPage; 