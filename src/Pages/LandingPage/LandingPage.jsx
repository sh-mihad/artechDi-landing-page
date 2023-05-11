import Hero from "../../components/Hero/Hero";
import Subscribe from "../../components/Subscribe/Subscribe";

const LandingPage = () => {
    return (
        <>
            <Hero />
            <section className="px-4 lg:px-16 py-16 subBg"> 
            <Subscribe />
            </section>
        </>
    );
};

export default LandingPage;