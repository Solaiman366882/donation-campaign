import { Link } from 'react-router-dom';
import './DonationCard.css'
import PropTypes from 'prop-types'
const DonationCard = ({donation}) => {

    const{id,title,img,category,category_bg,card_bg,text_button_bg,price} = donation || {};

    const buttonBg = {backgroundColor:text_button_bg};
    const cardBg = {backgroundColor:card_bg};
    const categoryBg = {backgroundColor:category_bg,color:text_button_bg};
    const color = {color:text_button_bg};

    return (
        <div style={cardBg} className="donation-card flex flex-col lg:flex-row lg:items-center">
            <div className="donation-img w-full lg:w-[220px] lg:h-[200px]">
                <img src={img} className=' w-full object-cover' alt="" />
            </div>
            <div className="card-body p-4 lg:p-0">
                <p style={categoryBg} className="category">{category}</p>
                <h2 className="title">{title}</h2>
                <p style={color} className="price">${price}</p>
                <Link to={`/donation-detail/${id}`}>
                    <button style={buttonBg} className="details-btn">View Details</button>
                </Link>
            </div>
        </div>
    );
};

DonationCard.propTypes ={
    donation:PropTypes.object,
}

export default DonationCard;