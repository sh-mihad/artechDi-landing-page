import SimplicityJargonCard from "./SimplicityJargonCard";
import medalJargon from "../../assets/jargon-Medal.png";
import likeJargon from "../../assets/jargon-Like.png";
import tokenJargon from "../../assets/jargon-Token.png";
import walletJargon from "../../assets/Jargon-Wallet.png";
import shoppingJargon from "../../assets/jargon-Shopping bag.png";

const cardData = [
    {
        id:1,
        title : "Pre-NFT Rights",
        des :"NFT rights enable your audience to build content around you and pay you as well as share royalties.",
        img:medalJargon,
    },
    {
        id:2,
        title : "Talent Tokens",
        des :"Talent Token are tied to creator’s growth. Creators can reward supporters that want to join on their journey.",
        img:tokenJargon,
        
    },
    {
        id:3,
        title : "Tokenised Crowdfunding",
        des :"Tokenised crowdfunding allows creators to raise capital to improve the quality of their content.",
        img:walletJargon,
    },
    {
        id:4,
        title : "Talent Content Platform",
        des :"A platform that allows creators to create and have direct control of audience revenues.",
        img:likeJargon,
    },
    {
        id:5,
        title : "NFT Marketplace",
        des :"Native NFT marketplace that allows creators and pre-NFT right holders to create and sell licensed NFTs.",
        img:shoppingJargon,
    },
]

const SimplicityJargon = () => {
    return (
        <div className="mx-5 my-36 lg:my-28  ">
            <h1 className="text-white text-center font-BebasNeue text-6xl lg:text-9xl bigTitle">{"Simplicity  >>> Jargon"}</h1>
            <p className="text-white text-lg lg:text-3xl text-center my-2 ">We take care of everything so the artists can focus on what they do best. Create art.
            </p>

            <div className="my-32 mx-10 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:w-9/12 lg:mx-auto">
                {
                    cardData.map(cData=><SimplicityJargonCard key={cData.id} cData={cData} />)
                }
            </div>
        </div>
    );
};

export default SimplicityJargon;