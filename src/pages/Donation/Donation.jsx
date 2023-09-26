import { useEffect, useState } from "react";
import DonationCard from "../../components/DonationCard/DonationCard";
import NoDonation from "../../components/NoDonation/NoDonation";


const Donation = () => {

    const [isShowAll,setIsShowAll] = useState(false);
    const[visibleDonation,setVisibleDonation] = useState([]);
    const [totalDonation,setTotalDonation] = useState([])
    const[noDonation,setNoDonation] = useState(false);
  

    useEffect(() => {
        const donations = JSON.parse(localStorage.getItem('totalDonation'));

        if(donations){
            setTotalDonation(donations)
            if(!isShowAll){
                const newVisibleDonation = donations.slice(0,4);
                setVisibleDonation(newVisibleDonation);
            }else{
                setVisibleDonation(donations)
            }
        }else{
            setNoDonation(true)
        }

    },[isShowAll,noDonation])
    

    return (
        // This section is only for all donation page
        <section>
            <div>
                {
                    noDonation ?
                     <NoDonation></NoDonation>
                    :
                    <div className="w-full grid grid-cols-2 gap-5">
                        {
                            visibleDonation?.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                        }
                    </div>
                }
            </div>
            <div className="text-center py-10">
                {
                    totalDonation.length>4 ? 
                    <button onClick={()=>setIsShowAll(!isShowAll)} className="bg-[#009444] px-7 py-3 rounded-lg text-base font-semibold text-white">{
                        isShowAll ? "Show Less" : "Show All"
                    }</button> 
                    : ""
                }
            </div>
        </section>
    );
};

export default Donation;