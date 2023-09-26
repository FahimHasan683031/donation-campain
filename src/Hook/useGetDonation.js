import { useEffect, useState } from "react";

const useGetDonation = () => {
    const [donations, setDonations]=useState()

    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=> setDonations(data))
    },[])
    return (donations)
};

export default useGetDonation;