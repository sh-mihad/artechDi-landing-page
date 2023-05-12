import goldImage from "../../assets/jargon-Medal.png"
const SimplicityJargonCard = () => {
    return (
        <div className="bg-[#222125] my-8 px-8 relative rounded-2xl text-white text-center font-Montserrat">
            <img src={goldImage} className="relative -top-20  mx-auto" alt="" />

            <div className=" -mt-10 mb-10">
                <h3 className="text-2xl font-bold">Pre-NFT Rights</h3>
                <p className="mt-4 text-sm font-extralight w-10/12 mx-auto font-sans">NFT rights enable your audience to build content around you and pay you as well as share royalties.
                </p>
            </div>
        </div>
    );
};

export default SimplicityJargonCard;