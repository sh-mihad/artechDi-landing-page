const QuestionForm = () => {
    return (
        <div className="form-control w-full  ">
            <label className="input-group">
                <input type="text" placeholder="Have a Question?" className="input w-9/12 input-bordered rounded-l-full bg-transparent border-cyan-300"  />
                <button className="bg-cyan-300 text-white rounded-xl w-3/12"><small>POST A QUERY</small></button>
            </label>
        </div>
    );
};

export default QuestionForm;