
// eslint-disable-next-line react/prop-types
const SimplicityJargonCard = ({ cData }) => {
    // eslint-disable-next-line react/prop-types
    const { title, des, img } = cData
    return (
        <div className="bg-[#222125] my-8 px-8 relative rounded-2xl text-white text-center font-Montserrat">
            <img src={img} className="relative -top-20  mx-auto" alt="" />

            <div className=" -mt-10 mb-10">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-4 text-sm font-extralight w-10/12 mx-auto font-sans">{des}
                </p>
            </div>
        </div>
    );
};

export default SimplicityJargonCard;