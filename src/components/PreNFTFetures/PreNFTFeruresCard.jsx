import vrImage from "../../assets/nft-car1.png"
const PreNFTFeruresCard = () => {
    return (
        <div className="bg-white  rounded-[30px] shadow-xl text-center font-Montserrat">
        <img src={vrImage} className=" mt-8  mx-auto rounded-[30px]" alt="" />

        <div className="my-8">
            <h3 className="text-2xl font-bold">Pre-NFT Rights</h3>
            <p className="mt-4 text-sm font-extralight w-10/12 mx-auto font-sans">NFT rights enable your audience to build content around you and pay you as well as share royalties.
            </p>
        </div>
    </div>
    );
};

export default PreNFTFeruresCard;