import IndexHeader from "./HeaderOptions/IndexHeader";
import TrendingServices from "./TrendingServices";

const IndexPage =() => {
    return(
        <>
            <header>
                <IndexHeader />
            </header>
            <main>
                <TrendingServices />
            </main>
        </>
    );
}

export default IndexPage; 