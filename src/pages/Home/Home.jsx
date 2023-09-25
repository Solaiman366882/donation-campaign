import { useLoaderData } from "react-router-dom";
import HomeCard from "../../components/Header/HomeCard/HomeCard";


const Home = () => {

    const donations = useLoaderData();

    return (
        <div>
            <section className="h-[80vh] w full bg-rose-300 flex justify-center items-center">
                <p>this is Banner </p>
            </section>
            {/* All Donation Card will here */}
            <section className="w-full py-20">
                {
                    donations.map(donation => <HomeCard key={donation.id} donation={donation}></HomeCard>)
                }
            </section>
        </div>
    );
};

export default Home;