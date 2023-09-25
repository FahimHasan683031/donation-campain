
import './BannerCss.css'
const Banner = ({setSearchValue}) => {

    const handleSearch = e=>{
        e.preventDefault()
        setSearchValue(e.target.search.value)
    }
    return (
        <div className="container ">
            <div className="overlay ">
                <div className="overlay-content">
                    <h1 className='text-4xl  my-6 font-bold'>I Grow By Helping People In Need</h1>
                    <form action="" onSubmit={handleSearch} className='form'>
                        <input type="text" name="search" className='w-2/4 focus:outline-none text-base px-3 py-2 text-black rounded-l-md ' placeholder="Search donation by category..." id="" />
                        <input type="submit" className='px-3 py-2 cursor-pointer text-base text-white rounded-r-md bg-[#ff444a]' value="Search" />
                        <div className='overlay'></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Banner;