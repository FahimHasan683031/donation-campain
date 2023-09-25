
import DonationCard from "./DonationCard";

const Donations = ({displayDonations}) => {
 

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-16 justify-items-center">
            {
                displayDonations?.map(donation=><DonationCard key={donation.id} donation={donation}></DonationCard>)
            }
        </div>
    );
};

export default Donations;