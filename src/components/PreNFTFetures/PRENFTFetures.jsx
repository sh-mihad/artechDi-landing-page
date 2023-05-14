import PreNFTFeruresCard from "./PreNFTFeruresCard";
import img1 from "../../assets/nft-car1.png";
import img2 from "../../assets/nft-2.png";
import img3 from "../../assets/nft-3.png";
import img4 from "../../assets/nft-4.png";
import img5 from "../../assets/nft-5.png";

const cardData = [
    {
        id:1,
        title : "Future Talent NFT",
        des :"Pre-buy rights to your social media content.",
        img:img1,
    },
    {
        id:2,
        title : "Product Placement NFT",
        des :"Pre-buy rights to your product mentions.",
        img:img2,
        
    },
    {
        id:3,
        title : "Online Interaction NFT",
        des :"Pre-buy rights to specific time periods for exclusive interactions.",
        img:img3,
    },
    {
        id:4,
        title : "Digital Art NFT",
        des :"Pre-buy rights to create digital art featuring you",
        img:img4,
    },
    {
        id:5,
        title : "Gaming NFT",
        des :"Pre-buy rights to incorporate your digital avatar in a game or product",
        img:img5,
    },
]

const PRENFTFetures = () => {
    return (
        <div className="py-24 px-5 lg:px-16 bg-[#EFEDF5] rounded-t-[100px]">
            <div className="w-full lg:w-11/12 mx-auto">
                <h1 className=" text-center font-BebasNeue text-5xl lg:text-9xl text-gray-900">Welcome to the Future <span className="bigTitle">Pre NFT Rights</span></h1>
                <p className="text-lg  lg:text-2xl text-center w-full lg:w-11/12 mx-auto my-4">Imagine a real life auction, but everything is an NFT. <br />
                    Fandora is the first platform that enables creators to auction or sell their NFT rights to their audience. These pre NFT rights enable your audience to build content around you, pay you, and also share royalties. With Fandora, creators can do <br /> all this easily - without all the tech-speak.
                </p>
                <p className="text-3xl text-center my-10 text-blue-500 font-Montserrat  ">These are the different types of NFT rights you can sell</p>

            </div>
            <div className="my-20 mx-10   grid grid-cols-1 lg:grid-cols-3 gap-10 lg:w-9/12 lg:mx-auto">
               {
                cardData?.map(cData=><PreNFTFeruresCard key={cData.id} cData={cData}/>)
               }
            </div>
        </div>
    );
};

export default PRENFTFetures;