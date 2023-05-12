import { FaGoogle } from "react-icons/fa";
const Subscribe = () => {
    return (
        <div className="mx-5 lg:mx-16">
            <h5 className="font-Montserrat text-lg font-semibold text-blue-400">Know about the launch before everyone else</h5>
            <div className="w-full block lg:flex my-6 items-center gap-10">
                <div className="w-full lg:w-6/12">
                    <input type="text" placeholder="Entry lavel here" className="bg-transparent border border-blue-400 rounded-full input input-bordered w-full" />
                </div>
                <div className="w-full lg:w-6/12 flex items-center my-4">
                    <div className="bgGradient rounded-full w-2/4 text-center">
                        <button className=" font-Montserrat font-semibold text-white py-3">Sign Up</button>
                    </div>
                    <div className="hidden lg:block h-7 bg-white w-[2px] ml-9"></div>
                    <div className="flex gap-2 ml-3">
                            <div className="flex flex-col items-center justify-center h-12 w-12 rounded-full  bgGradient text-white"><FaGoogle/></div>
                            <div className="flex flex-col items-center justify-center h-12 w-12 rounded-full  bgGradient text-white"><FaGoogle/></div>
                            <div className="flex flex-col items-center justify-center h-12 w-12 rounded-full  bgGradient text-white"><FaGoogle/></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;