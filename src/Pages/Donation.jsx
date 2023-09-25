import { useEffect, useState } from "react";
import useGetDonation from "../Hook/useGetDonation";
import { getLsData } from "../Utility/Utitity";
import SelectedDonationCard from "../Components/SelectedDonationCard";

const Donation = () => {
    const [selectDonation, setSelectDonation] = useState([])
    const [showDonation, setShowDonation] = useState(4)
    const [isbtnhidden, setisbtnhidden] = useState(false)
    const btnHandle = () => {
        setShowDonation(selectDonation?.length)
        setisbtnhidden(true)
    }

    const donations = useGetDonation()
    useEffect(() => {
        const lsdonatesId = getLsData()
        const lsDonations = lsdonatesId?.map(id => donations?.find(donation => donation.id == id))
        setSelectDonation(lsDonations)
    }, [donations])

    return (
        <div className="my-7 max-w-screen-xl mx-auto px-7 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 ">
                {
                    selectDonation?.slice(0, showDonation).map((donation, inId) => <SelectedDonationCard key={inId} donation={donation}></SelectedDonationCard>)

                }
            </div>
           
                {
                    selectDonation?.length > 4 && <div className={`text-center ${isbtnhidden &&'hidden'}`}>
                        <button onClick={() => btnHandle()} className=" px-4 py-1 rounded-md my-5 text-lg font-medium text-white bg-green-700">See All</button>
                    </div>
                }
            




        </div>
    );
};

export default Donation;