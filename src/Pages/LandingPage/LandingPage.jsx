import Hero from "../../components/Hero/Hero";
import PreNFTContent from "../../components/PreNFT/PreNFTContent";
import SimplicityJargon from "../../components/SimplicityJargon/SimplicityJargon";
import Subscribe from "../../components/Subscribe/Subscribe";

const LandingPage = () => {
    return (
        <>
            <Hero />
            <section className="px-4 lg:px-16 py-16 subBg"> 
            <Subscribe />
            <PreNFTContent/>
            <SimplicityJargon/>
            </section>
           
        </>
    );
};

export default LandingPage;