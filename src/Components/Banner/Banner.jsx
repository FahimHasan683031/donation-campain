
import './BannerCss.css'
const Banner = ({setSearchValue}) => {

    const handleSearch = e=>{
        e.preventDefault()
        setSearchValue(e.target.search.value)
    }
    return (
        <div className="myContainer ">
            <div className="overlay ">
                <div className="overlay-content">
                    <h1 className='text-4xl  mb-8 font-bold'>I Grow By Helping People In Need</h1>
                    <form action="" onSubmit={handleSearch} className='form'>
                        <input type="text" name="search" className='w-2/4 customShadow focus:outline-none text-[13px] px-3 py-3 text-black rounded-l-md ' placeholder="Search donation by category..." id="" />
                        <input type="submit" className='px-3 py-[10px] customShadow cursor-pointer text-base text-white rounded-r-md bg-[#ff444a]' value="Search" />
                        <div className='overlay'></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Banner;