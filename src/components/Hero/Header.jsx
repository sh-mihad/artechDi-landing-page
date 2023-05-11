import {GoPrimitiveDot} from "react-icons/go";
const Header = () => {
    return (
        <div>
            <div className="w-full lg:text-start text-center lg:w-5/12 my-20">                
                <h1 className="text-white font-BebasNeue text-5xl lg:text-9xl">Calling creators of the future</h1>
                <p className="font-Montserrat text-blue-400 text-xl my-4">The World’s First Pre-NFT Rights and Content Marketplace</p>
                <button className="text-blue-400  flex items-center  border border-blue-400 rounded-full px-4 font-bold py-1"><GoPrimitiveDot/> Now Live</button>
            </div>
        </div>
    );
};

export default Header;