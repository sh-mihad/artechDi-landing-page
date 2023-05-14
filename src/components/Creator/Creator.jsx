import { FaEye } from "react-icons/fa";
import avatar from "../../assets/Vector.png";
import messiImage from "../../assets/messi.png"
import { AiOutlineHeart } from "react-icons/ai";
import Accounrdiano from "../Accordiano/Accounrdiano";
import QuestionForm from "../QuestionForm/QuestionForm";
import { BsClock, BsFillShareFill } from "react-icons/bs";
import { RiFullscreenExitFill } from "react-icons/ri";
const Creator = () => {
    return (
        <section className='my-16 flex lg:flex-row flex-col py-3 gap-14'>
            {/* left side content */}
            <div className="w-5/12">
                <div className="cardOutline text-white w-[500px] h-[500px] shadow-md ">
                    <div>
                        <div className="flex justify-between">
                            <div>
                                <p className="pl-5 pt-3 font-Montserrat flex items-center gap-2 sha"><img src={avatar} alt="" /><small>Avataars</small></p>
                            </div>
                            <div className="flex items-center gap-10 pr-4">
                                <div className="flex gap-2 items-center">
                                    <FaEye />
                                    <p>266</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <AiOutlineHeart />
                                    <p>1.2k</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="w-11/12 h-5/6 mx-auto mt-8 mb-4 bg-black py-28 rounded-lg">
                        <img src={messiImage} alt="" />
                        <div className="mt-10 mx-6 flex items-center justify-between text-2xl">
                            <AiOutlineHeart />
                            <RiFullscreenExitFill />
                        </div>
                    </div>
                </div>

                <div className="my-10 ">
                    <Accounrdiano title="Description" />
                    <Accounrdiano title="Rights Available" />
                    <Accounrdiano title="Utilities Offered" />
                    <QuestionForm />
                </div>
            </div>

            {/* right side conent */}
            <div className="w-8/12 ">
                <div className="font-Montserrat flex items-center justify-between">
                    <h1 className="text-xl text-white">Owned by <span className="text-cyan-300 ">PSG</span></h1>
                    <div className="flex items-center gap-3">
                        <button className="text-cyan-300 border border-cyan-300 px-5 py-2 rounded-lg">Mark as Favourite</button>
                        <BsFillShareFill className="text-cyan-300 text-xl" />
                    </div>
                </div>


                <div className="cardOutlin2 my-10 text-white w-full h-[500px]">
                    <div className="mx-10">
                        <div >
                            <p className="pl-5 pt-3 font-Montserrat flex items-center gap-2 sha"><small>Auction Price</small></p>
                        </div>
                        <div className="mt-24 flex items-center gap-4 font-Montserrat text-white text-2xl">
                            <BsClock />
                            <p>Sale ends 25 December 2022 at 1:57 am GMT+5:30</p>
                        </div>
                        <div className="mt-8">
                            <p>Current Price</p>
                            <h4 className="text-3xl font-Montserrat my4">15.89 ETH</h4>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    );
};

export default Creator;