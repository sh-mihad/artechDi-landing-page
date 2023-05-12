import SimplicityJargonCard from "./SimplicityJargonCard";

const SimplicityJargon = () => {
    return (
        <div className="mx-5 my-28  ">
            <h1 className="text-white text-center font-BebasNeue text-5xl lg:text-9xl bigTitle">{"Simplicity >>> Jargon"}</h1>
            <p className="text-white text-3xl text-center my-2">We take care of everything so the artists can focus on what they do best. Create art.
            </p>

            <div className="my-32 grid grid-cols-3 gap-10 lg:w-9/12 mx-auto">
                <SimplicityJargonCard/>
                <SimplicityJargonCard/>
                <SimplicityJargonCard/>
                <SimplicityJargonCard/>
                <SimplicityJargonCard/>
            </div>
        </div>
    );
};

export default SimplicityJargon;