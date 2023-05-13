import { FaDiscord } from "react-icons/fa";
import mobileToken from "../../assets/TGN_1.png"
import handToken from "../../assets/TGN_2.png"
const Token = () => {
    return (
        <section className="bg-[#1B1B1D] lg:p-20 p-5 rounded-b-[150px]  text-center lg:text-start">
            <div className="block lg:flex items-center justify-center  text-white font-Montserrat">
                <small className="uppercase lg:hidden block">Tokenised Crowdfunding</small>
                <h5 className="text-2xl my-2 text-[#538EB6] lg:hidden block">Create content.Make money for everybody.</h5>
                <img src={mobileToken} alt="" className="" />
                <div className="lg:mx-16 mx-auto">
                    <small className="uppercase hidden lg:block">Tokenised Crowdfunding</small>
                    <h5 className="text-3xl my-2 text-[#538EB6] hidden lg:block">Create content. <br />
                        Make money for everybody.</h5>
                    <p className="font-sans mb-4">With Fandora you can enable your loyal fanbase to bid for a share of the revenue from your next product or content offering to be launched over a stipulated time period. This leads to an audience base that is even more invested in you and your work, literally and figuratively.</p>
                    <button className="flex mx-auto lg:mx-0 items-center gap-4 px-7 py-3 font-sans mb-5 lg:mb-0 text-white text-lg bgGradientButton rounded-full">Join the conversation <FaDiscord/></button>
                </div>
            </div>

            <div className="flex mt-10 lg:mt-0 flex-col-reverse lg:flex-row items-center  justify-center mb-40 lg:mb-16  text-white font-Montserrat">
                <div className="lg:mx-16 mx-auto text-center lg:text-start">
                    <small className="uppercase hidden lg:block">Talent content platform</small>
                    <h5 className="text-3xl my-2 text-[#538EB6] hidden lg:block">Build your custom subscription platform</h5>
                    <p className="font-sans mb-4">Build your custom subscription platform
                        Create your own content and subscription engine and have direct control of audience revenues. Fandora gives you access to state-of-the-art No-Code content platform which enables you to raise subscriptions as well as mint NFTs</p>
                        
                        <button className="flex mx-auto lg:mx-0 items-center gap-4 px-7 py-3 font-sans mb-5 lg:mb-0 text-white text-lg bgGradientButton rounded-full">Join the conversation <FaDiscord/></button>
                        
                </div>
                
                <img src={handToken} alt="" className="" />              
                <h5 className="text-2xl my-2 text-[#538EB6]  block lg:hidden">Build your custom subscription platform</h5>
                <small className="uppercase block lg:hidden">Talent content platform</small>
                
            </div>
        </section>
    );
};

export default Token;