import { Link } from "react-router-dom";

import img from '../../assets/img/nodonate.jpg'

const NoDonation = () => {
    return (
        <div className='min-h-[80vh] w-full flex justify-center items-center'>
            <div className="text-center">
                <img className=" h-48 object-cover w-full" src={img} alt="" />
                <h2 className="text-2xl md:text-5xl font-bold py-10 text-gray-400">No Donation has made yet.</h2>
                <Link to={"/"}>
                    <button className="bg-[#009444] px-10 py-5 rounded-lg text-xl font-semibold text-white">Want to Donate</button>
                </Link>
            </div>
        </div>
    );
};

export default NoDonation;