import rightHandImage from "../../assets/image 3.png"
import leftHandImage from "../../assets/image4.png"
const Discover = () => {
    return (
        <div className="w-9/12 mx-auto flex lg:flex-row flex-col items-center -mt-32 rounded-3xl text-[#07070f] font-Montserrat  bg-white">
            <div className=" text-center lg:text-start pt-10 pb-20 lg:p-16 lg:w-2/4 w-full">
                <h2 className="text-xl lg:text-3xl font-semibold ">Discover and sell your own NFTs </h2>
                <h6 className="font-sans my-5">Join fandora and support outstanding global talent across multiple domains. </h6>
                <button className="px-7 py-3 mb-5 lg:mb-0 text-white text-lg bg-gray-700 rounded-full bgGradientButton">JOIN FANDORA</button>
            </div>

            <div className="flex relative mx-4 lg:mr-10 gap-7">
                <div className="w-1/2 relative -mb-10 lg:-mb-28 content-end ">
                    <img src={leftHandImage} alt="" className="" />
                </div>
                <div className="w-1/2 relative -mt-20 lg:-mt-28 content-start ">
                    <img src={rightHandImage} alt="" className=" "/>
                </div>

            </div>


        </div>
    );
};

export default Discover;