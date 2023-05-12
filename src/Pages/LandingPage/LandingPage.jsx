import Hero from "../../components/Hero/Hero";
import PreNFTContent from "../../components/PreNFT/PreNFTContent";
import PRENFTFetures from "../../components/PreNFTFetures/PRENFTFetures";
import SimplicityJargon from "../../components/SimplicityJargon/SimplicityJargon";
import Subscribe from "../../components/Subscribe/Subscribe";

const LandingPage = () => {
    return (
        <>
            <Hero />
            <section className="py-16 subBg"> 
            <Subscribe />
            <PreNFTContent/>
            <SimplicityJargon/>
            <PRENFTFetures/>
            </section>
           
        </>
    );
};

export default LandingPage;