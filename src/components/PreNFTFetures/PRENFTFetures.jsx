import PreNFTFeruresCard from "./PreNFTFeruresCard";

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
            <div className="my-20 grid grid-cols-3 gap-10 lg:w-9/12 mx-auto">
               <PreNFTFeruresCard/>
               <PreNFTFeruresCard/>
               <PreNFTFeruresCard/>
               <PreNFTFeruresCard/>
               <PreNFTFeruresCard/>
            </div>
        </div>
    );
};

export default PRENFTFetures;