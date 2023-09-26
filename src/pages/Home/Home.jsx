import { useLoaderData } from "react-router-dom";
import HomeCard from "../../components/HomeCard/HomeCard";
import Banner from "../../components/Banner/Banner";
import { useEffect, useState } from "react";


const Home = () => {

    const donations = useLoaderData();
    const [searchValue,setSearchValue] = useState('');
    const [searchMatched,setSearchMatched] = useState(false)
    const [displayDonation,setDisplayDonation] = useState([]);
    const [isSearched,setIsSearched] = useState(false);

    useEffect(() => {
        const filteredDonation = donations.filter(donationItem => donationItem.category.toLowerCase() === searchValue);
        setDisplayDonation(filteredDonation);
        
        if(searchValue=='health' || searchValue=='education' || searchValue =='food' || searchValue=='clothing'){
            setSearchMatched(true)
        }else{
            setSearchMatched(false)
        }
        
    },[isSearched,donations,searchValue])


    const handleSearch = (e) => {
        e.preventDefault()
        const search = e.target.search.value;
        console.log('form handled',search);
        setSearchValue(search.toLowerCase());
        setIsSearched(true)
    }



    return (
        <div>
            <Banner handleSearch={handleSearch}></Banner>
            {/* All Donation Card will here */}
            <div>
                {
                    /***
                     * if any one search any thing it will activate is first ternary(isSearched)
                     * and second ternary (searchMatched) will render category wise donation card if search matched with category,if not then will give a message
                    */
                   isSearched ? searchMatched ?
                        <section className="w-full py-20 grid grid-cols-3 gap-5">
                            {
                                displayDonation?.map(donation => <HomeCard key={donation.id} donation={donation}></HomeCard>) 
                            }
                        </section>
                        : <p className="text-2xl md:text-5xl text-center py-10 text-gray-400 font-bold">There is no such category</p>
                    : 
                    <section className="w-full py-20 grid grid-cols-4 gap-5">
                        {
                            donations.map(donation => <HomeCard key={donation.id} donation={donation}></HomeCard>)
                        }
                    </section>
                }
            </div>
            <section className=" text-center">
                {
                    isSearched ? <button onClick={() => setIsSearched(!isSearched)} className="bg-[#009444] mb-10 px-7 py-3 rounded-lg text-base font-semibold text-white">Show All Category</button> :''
                }
            </section>

        </div>
    );
};

export default Home;