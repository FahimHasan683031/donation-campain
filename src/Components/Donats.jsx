import useGetDonation from "../Hook/useGetDonation";
import DonationCard from "./DonationCard";

const Donations = () => {
    const donations = useGetDonation()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16 justify-items-center">
            {
                donations?.map(donation=><DonationCard key={donation.id} donation={donation}></DonationCard>)
            }
        </div>
    );
};

export default Donations;