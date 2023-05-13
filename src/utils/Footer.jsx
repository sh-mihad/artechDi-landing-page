import { AiFillInstagram,AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="lg:w-9/12 mx-auto mt-32 ">
            {/* footer top part */}
            <section className="flex items-center text-white  justify-between mb-10">
                <div> <a className="text-2xl bigTitle font-bold">FANDORA</a></div>
                <div className="block lg:flex items-center gap-6 font-semibold ">
                    <p><a href="">Home</a></p>
                    <p><a href="">Key fetures</a></p>
                    <p><a href="">Pre-NFT Rights</a></p>
                    <p><a href="">Markate Place</a></p>
                </div>
            </section>
            <hr />
            {/* footer bottom part */}
            <section className="mt-7">
                <div  className="block lg:flex justify-between items-center gap-6 font-semibold ">
                    <div className="flex items-center gap-3 text-2xl text-white">
                        <p><AiOutlineTwitter/></p>
                        <p><FaLinkedin/></p>
                        <p><AiFillInstagram/></p>
                        <p><FaDiscord/></p>
                        <p><FaRegEnvelope/></p>
                        <p className="font-sans font-light text-base"><small>reachus@fandora.app</small></p>
                    </div>
                    <div className="flex items-center gap-10 text-2xl text-white">
                        <p className="font-sans font-light text-base"><small>Privacy Policy</small></p>
                        <p className="font-sans font-light text-base"><small>Terms of use</small></p>
                        <p className="font-sans font-light text-base"><small>© Fandora 2022 - All rights reserved </small></p>
                    </div>
                </div>
                <div className="flex justify-between text-white my-5 items-center">
                <p className="font-sans font-light text-base"><small>Designed by @sabbir_hossen</small></p>
                <p className="font-sans font-light text-base"><small>Fandora 1364019 B.C Ltd C/o Empowered Startups 744 W Hastings St #420, Vancouver, BC V6C 1A5, Canada</small></p>
                </div>
            </section>
        </footer>
    );
};

export default Footer;