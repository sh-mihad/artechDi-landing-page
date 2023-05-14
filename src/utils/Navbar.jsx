import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar lg:bg-none  text-white font-Montserrat">
        <div className="flex-1">
            <a className="text-2xl bigTitle font-bold">FANDORA</a>
        </div>
        <div className="flex-none gap-2">
            <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/fetures">Key Fetures</Link></li>
                    <li><a>Pre-NFT-Rights</a></li>
                    <li><a>MarketPlace</a></li>
                    <li className="bigTitle"><a>Login</a></li>
                    <li className="bgGradient rounded-full px-4"><button>Sign Up</button></li>

                </ul>
            </div>
            <div className="dropdown dropdown-end block lg:hidden">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact bg-black dropdown-content bg-none rounded-box w-52">
                <li><a>Home</a></li>
                    <li><a>Key Fetures</a></li>
                    <li><a>Pre-NFT-Rights</a></li>
                    <li><a>MarketPlace</a></li>
                    <li className="bigTitle"><a>Login</a></li>
                    <li className="bgGradient rounded-full px-4"><button>Sign Up</button></li>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default Navbar;