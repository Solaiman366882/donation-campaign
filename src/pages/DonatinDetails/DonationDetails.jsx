// import { useEffect } from "react";
import './DonationDetails.css'
import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {

    const params =useParams();

    const donations = useLoaderData();
    const selectedDonation = donations?.find(donation => donation.id === parseInt(params.id));

    // useEffect(() => {
    //     const selectedDonation = donations?.find(donation => donation.id === parseInt(params.id));

    // },[params.id,donation]);

    const{title,img,text_button_bg,price,description} = selectedDonation || {}

    const buttonBackgroundColor = {
        backgroundColor:text_button_bg
    }

    return (
        <div className="w-full min-h-[80vh] flex items-center justify-center pt-10">
            <div className="donation-details-card">
                <div className="donation-img">
                    <img src={img} alt="" />
                    <div className="price-area">
                        <button style={buttonBackgroundColor} className="donation-btn">Donate ${price}</button>
                    </div>
                </div>
                <div className="donation-body">
                    <h2 className="title">{title}</h2>
                    <p className="description">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;