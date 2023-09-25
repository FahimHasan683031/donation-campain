import PiChart from "../Components/Pichart";

const Statistics = () => {
    return (
        <div className="text-center">
            <div className="flex justify-center">
                <PiChart></PiChart>
            </div>
            <div className="flex gap-7 md:gap-10 justify-center my-10">
                <div className="flex gap-2 md:gap-4 items-center">
                    <p className="text-[12px] md:text-base font-normal m:font-medium">Your Donation</p>
                    <span className="w-12 md:w-20 h-[6px] md:h-[9px] rounded-sm bg-[#00c49f]"></span>
                </div>
                <div className="flex gap-2 md:gap-4 items-center">
                    <p className="text-[12px] md:text-base font-normal m:font-medium">Total Donation</p>
                    <span className="w-12 md:w-20  h-[6px] md:h-[9px] rounded-sm bg-[#ff444a]"></span>
                </div>
            </div>
        </div>
    );
};

export default Statistics;



