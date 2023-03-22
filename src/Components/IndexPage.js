// Components
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
            </main>
        </>
    );
}

export default IndexPage; 