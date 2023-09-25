import PropTypes from 'prop-types';
const SelectedDonationCard = ({ donation }) => {
    const {category,title,price,image,title_color,button_bg,donation_page_button_bg,card_bg} =donation || {}
    return (
        <div>
            <div className={`relative ${card_bg} mb-6 flex w-full max-w-[48rem] flex-row rounded-md  text-gray-700 shadow-md`}>
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <button className={`px-2 py-1 ${button_bg} rounded ${title_color} text-[12px] `}>{category}</button>
                    <h1 className="text-xl font-bold my-3">{title}</h1>
                    <p className={`${title_color} mb-2  font-bold`}>${price}.00</p>
                    <button className={`${donation_page_button_bg} px-3 my-3 py-1 rounded font-medium text-white text-base`}>View Details</button>
                </div>
            </div>
        </div>
    );
};
SelectedDonationCard.propTypes={
    donation:PropTypes.object
}
export default SelectedDonationCard;