import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
    const { image, button_bg, card_bg, title_color, title, category, id } = donation

    return (
        <div>
            <Link to={`/donationdetail/${id}`}>
                <div className={`relative mb-5 flex max-w-[24rem] flex-col rounded-lg  text-gray-700 shadow-md ${card_bg}`}>
                    <div className="relative m-0 rounded-t-lg  overflow-hidden rounded-none bg-transparent  text-gray-700 shadow-none">
                        <img
                            className="h-[230px] w-[380px]"
                            src={image}
                            alt="ui/ux review check"
                        />
                    </div>
                    <div className="p-4">
                        <button className={`${title_color} ${button_bg} px-3 my-3 py-1 font-medium rounded text-base`}>{category}</button>
                        <h4 className={`text-xl font-bold ${title_color}`}>
                            {title}
                        </h4>

                    </div>

                </div>
            </Link>
        </div>
    );
};

export default DonationCard;