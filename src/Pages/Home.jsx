import Banner from "../Components/Banner/Banner";
import Donations from "../Components/Donats";
import { useEffect, useState } from "react";
import useGetDonation from "../Hook/useGetDonation";
import Swal from 'sweetalert2'


const Home = () => {

    const donations = useGetDonation()
    const [searchValue, setSearchValue] = useState(null)
    const [displayDonations, setDisplayDonations] = useState([])
    useEffect(() => {
        if (searchValue === null) {
            setDisplayDonations(donations)
        } else if (searchValue === "Healthcare" || searchValue === 'healthcare') {
            setDisplayDonations(donations?.filter(donate => donate.category === "Healthcare"))
        } else if (searchValue === "Education" || searchValue === 'education') {
            setDisplayDonations(donations?.filter(donate => donate.category === "Education"))
        } else if (searchValue === "Environmental" || searchValue === 'environmental') {
            setDisplayDonations(donations?.filter(donate => donate.category === "Environmental"))
        } else if (searchValue === "Food" || searchValue === 'food') {
            setDisplayDonations(donations?.filter(donate => donate.category === "Food"))
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please search by a valid category name.',
            })
        }

    }, [donations, searchValue])

    return (
        <div>
            <Banner setSearchValue={setSearchValue}></Banner>
            <div className="max-w-screen-xl mx-auto px-7">
                <Donations displayDonations={displayDonations}></Donations>
            </div>

        </div>
    );
};

export default Home;