import image1 from '../../assets/image 1.png';
import image2 from '../../assets/Image 2.png';
import image3 from '../../assets/image 3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';
const PreNFTContent = () => {
    return (
        <div className="lg:flex gap-6 items-center  lg:mx-16 px-8 lg:px-14 py-5 lg:py-2  rounded-3xl text-[#07070f] font-Montserrat mx-5 bgGradient mt-28 max-h-[550px]  ">
            <div className="w-full lg:w-5/12 text-center lg:text-start">
                <h2 className="text-xl lg:text-3xl font-semibold">Pre-NFT Content and Rights Marketplace </h2>
                <h6 className="font-semibold text-lg lg:text-xl my-5">A first of its kind platform that  discovers and supports global talent across multiple domains, now live! </h6>
                <button className="px-7 py-3 mb-5 lg:mb-0 text-white text-lg bg-gray-700 rounded-full">Checkout</button>
            </div>

            <div className="lg:flex  lg:w-7/12 relative mt-20 lg:mt-0 lg:ml-16">
                <img src={image2} className='absolute  -left-4 lg:-top-0 -top-16 w-8/12 h-full lg:h-fit lg:w-fit' alt="" />
                <img src={image3} className='relative z-0 lg:-top-0 -top-14 scale-105 lg:scale-100 -right-2 lg:-right-80 ' alt="" />

                <img src={image4} className='absolute lg:left-10 left-4 lg:-top-4 lg:scale-100 scale-110 w-8/12 h-full lg:w-fit lg:h-fit bottom-16' alt="" />
                <img src={image1} className='absolute lg:right-10 right-8 -top-16 lg:-top-4 lg:scale-100 scale-110 w-8/12 h-full lg:h-fit lg:w-fit' alt="" />
                <img src={image5} className='absolute  lg:left-32 left-5 lg:-top-10 -top-16 lg:scale-100 scale-110 w-10/12 lg:w-fit h-full lg:h-fit' alt="" />
            </div>
        </div>
    );
};

export default PreNFTContent;