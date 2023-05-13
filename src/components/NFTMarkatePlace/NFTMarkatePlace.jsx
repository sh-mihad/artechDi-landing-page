import appImage from "../../assets/bg-Phone mockup 2.png"
import appImage2 from "../../assets/bg-Phone mockup 2 (2).png"
import tabImage from "../../assets/bg-Tablet Mockup 1.png"
const NFTMarkatePlace = () => {
    return (
        <section className="bgGradientSecendory relative lg:p-20 p-5">
            <div className="block lg:flex   text-white font-Montserrat">
                <small className="uppercase text-center mt-5 lg:hidden block">NFT rights Marketplace</small>
                <h5 className="text-3xl my-2 text-center lg:hidden block">Are you a Creator?</h5>
                <img src={appImage} alt="" className="relative hidden lg:block lg:bottom-20" />
                <img src={appImage2} alt="" className="relative lg:hidden block lg:bottom-20" />
                <div className="lg:mx-16 mx-auto">
                    <small className="uppercase lg:block hidden">NFT rights Marketplace</small>
                    <h5 className="text-3xl my-2 lg:block hidden">Are you a Creator?</h5>
                    <p className="text-sm font-light font-sen mb-4 text-center lg:text-start">Now sell Pre NFT rights and monetise your existing content for Web3 applications</p>
                    <div className="text-center lg:text-start">
                        <button className="px-7 py-3 mb-5 lg:mb-0  text-white text-lg bg-[#52C1B9] rounded-full">Checkout</button>
                    </div>
                </div>
            </div>

            <div className="flex items-center flex-col-reverse lg:flex-row  my-10  text-white font-Montserrat">
                <div className="lg:mx-16 mx-auto">
                    <small className="uppercase lg:block hidden">NFT rights Marketplace</small>
                    <h5 className="text-3xl my-2 lg:block hidden">Are you a WEB3 Pro?</h5>
                    <p className="text-sm font-light font-sen mb-4 text-center lg:text-start">Access best content for building stronger Web3 assets and package them with our advanced NFT Utilities</p>
                    <div className="text-center lg:text-start">
                        <button className="px-7 py-3 mb-5 lg:mb-0  text-white text-lg bg-[#52C1B9] rounded-full">Checkout</button>
                    </div>
                </div>
                <div className="w-full">
                    <small className="uppercase text-center mt-5 lg:hidden block">NFT rights Marketplace</small>
                    <h5 className="text-3xl my-2 text-center lg:hidden block">Are you a WEB3 Pro?</h5>
                    <img src={tabImage} alt="" className="" />
                </div>
            </div>

            <div className="text-white font-Montserrat text-center">
                <p className="uppercase "> <small>Homegrown Marketplace</small></p>
                <h5 className="text-3xl my-2 ">Explore an NFT Marketplace unlike any other</h5>
                <p className=" font-sans  mb-4">Our homegrown NFT marketplace allows creators and pre NFT rights holders to create and sell officially licensed NFTs</p>
                <button className="px-7 py-3 mb-5 lg:mb-0 text-white text-lg bg-gray-700 rounded-full">Comming Soon</button>
            </div>
        </section>
    );
};

export default NFTMarkatePlace;