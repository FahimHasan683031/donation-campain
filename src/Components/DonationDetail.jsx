import { useParams } from "react-router-dom";
import useGetDonation from "../Hook/useGetDonation";
import { saveData } from "../Utility/Utitity";

const DonationDetail = () => {
    const donations = useGetDonation()
    const {id} = useParams()
    const donation = donations?.find(item => item.id == id)
    const {price,description,title,donation_page_button_bg,image}= donation || {}
    return (
        <div className="my-3 ">
            <div className="relative overflow-hidden">
            <img className="h-[70vh] rounded-md w-full" src={image} alt="" />
            <div className="absolute bottom-0 rounded-b-md p-6 bg-[#00000088] w-full">
            <button onClick={()=> saveData(id)} className={`px-3  z-50 py-2 rounded-sm text-white text-base font-medium ${donation_page_button_bg}`}>Donate ${price}</button>
            </div>
            </div>
           
            
            <h1 className="text-2xl my-7 font-bold">{title}</h1>
            <p className="text-base font-normal text-gray-600 mb-16">{description}</p>
        </div>
    );
};

export default DonationDetail;