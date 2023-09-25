import { useEffect } from "react";
import swal from 'sweetalert';
import './DonationDetails.css'
import { useLoaderData, useParams } from "react-router-dom";
import { useState } from 'react';

const DonationDetails = () => {

    const params =useParams();
    const donations = useLoaderData();
    const [donation,setDonation] = useState({})

    useEffect(() => {
        const selectedDonation = donations?.find(donation => donation.id === parseInt(params.id));

        setDonation(selectedDonation)
        
    },[params.id,donations]);
    

    const{title,img,text_button_bg,price,description} = donation || {}

    const buttonBackgroundColor = {
        backgroundColor:text_button_bg
    }

    // handle donation button 
    const handleDonation = () => {

        const totalDonation = [];

        const donationCreated = JSON.parse(localStorage.getItem('totalDonation'));
        
        if(!donationCreated){
            totalDonation.push(donation);
            localStorage.setItem('totalDonation',JSON.stringify(totalDonation))
            swal({
                title: "Good job!",
                text: "Congrats! you have made your first donation",
                icon: "success",
                button: "Ok",
              });
        }else{
            const isExist = donationCreated.find((singleDonation) => singleDonation.id === donation.id)
            if(isExist){
                swal({
                    title: "Opps! Sorry",
                    text: "You have already made this donation before",
                    icon: "error",
                    button: "Ok",
                  });
                
            }
            else{
                totalDonation.push(...donationCreated,donation)
                localStorage.setItem('totalDonation',JSON.stringify(totalDonation))
                swal({
                    title: "Good job!",
                    text: "Thank you so much for your donation",
                    icon: "success",
                    button: "Ok",
                  });
            }
        }
    }

    return (
        <div className="w-full min-h-[80vh] flex items-center justify-center pt-10">
            <div className="donation-details-card">
                <div className="donation-img">
                    <img src={img} alt="" />
                    <div className="price-area">
                        <button onClick={handleDonation} style={buttonBackgroundColor} className="donation-btn">Donate ${price}</button>
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