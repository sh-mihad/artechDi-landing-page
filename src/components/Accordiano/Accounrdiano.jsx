// eslint-disable-next-line react/prop-types
const Accounrdiano = ({title}) => {

    return (
        <div tabIndex={0} className="collapse my-5 collapse-arrow border border-cyan-300 font-Montserrat bg-[#101010] text-white rounded-box">
            <div className="collapse-title text-xl font-medium">
               {title}
            </div>
            <div className="collapse-content">
                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
        </div>
    );
};

export default Accounrdiano;