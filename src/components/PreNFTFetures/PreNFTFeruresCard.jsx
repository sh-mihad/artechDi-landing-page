
// eslint-disable-next-line react/prop-types
const PreNFTFeruresCard = ({ cData }) => {
    // eslint-disable-next-line react/prop-types
    const { title, des, img } = cData
    return (
        <div className="bg-white  rounded-[30px] shadow-xl text-center font-Montserrat">
            <img src={img} className=" mt-8  mx-auto rounded-[30px]" alt="" />

            <div className="my-8">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-4 text-sm font-extralight w-10/12 mx-auto font-sans">{des}</p>
            </div>
        </div>
    );
};

export default PreNFTFeruresCard;