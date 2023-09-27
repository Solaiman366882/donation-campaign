import { Pie } from 'react-chartjs-2';
import { useEffect, useState } from 'react';

const MyChart = () => {

    const [myDonation,setMyDonation] = useState(0);

    const [totalDonation,setTotalDonation] = useState(12);

    useEffect(() => {
      const donations = JSON.parse(localStorage.getItem('totalDonation'));

      const myDonationLength = donations?.length;


      setMyDonation(myDonationLength);

      const totalDonationLength  = 12 - myDonation;
      setTotalDonation(totalDonationLength);
      
    },[myDonation,totalDonation]);

    
  const data = {
    labels: [
      'Total Donation left',
      'Your Donation',

    ],
    datasets: [{
      label: 'My First Dataset',
      data: [totalDonation,myDonation],
      backgroundColor: [
        '#FF444A',
        '#00C49F',
      ],
      hoverOffset: 8
    }]
  };


    console.log(myDonation,totalDonation);



  return (
    <div className='w-[40%] mx-auto min-h-[80vh] flex justify-center items-center'>
      <Pie data={data}></Pie>
    </div>
  );
};

export default MyChart;