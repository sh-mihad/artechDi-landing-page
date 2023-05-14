import Discover from "../../components/Discover/Discover";
import Hero from "../../components/Hero/Hero";
import NFTMarkatePlace from "../../components/NFTMarkatePlace/NFTMarkatePlace";
import PreNFTContent from "../../components/PreNFT/PreNFTContent";
import PRENFTFetures from "../../components/PreNFTFetures/PRENFTFetures";
import SimplicityJargon from "../../components/SimplicityJargon/SimplicityJargon";
import Subscribe from "../../components/Subscribe/Subscribe";
import Token from "../../components/Token/Token";
import Footer from "../../utils/Footer";

const LandingPage = () => {
    return (
        <>
            <Hero />
            <main className="py-16 ">
                <Subscribe />
                <PreNFTContent />
                <SimplicityJargon />
                <PRENFTFetures />
                <NFTMarkatePlace />
                <Token />
                <Discover />
                <Footer />
            </main>

        </>
    );
};

export default LandingPage;