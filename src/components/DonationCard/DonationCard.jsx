import './DonationCard.css'
import PropTypes from 'prop-types'
const DonationCard = ({donation}) => {

    const{title,img,category,category_bg,card_bg,text_button_bg,price} = donation || {};

    const buttonBg = {backgroundColor:text_button_bg};
    const cardBg = {backgroundColor:card_bg};
    const categoryBg = {backgroundColor:category_bg,color:text_button_bg};
    const color = {color:text_button_bg};

    return (
        <div style={cardBg} className="donation-card">
            <div className="donation-img">
                <img src={img} alt="" />
            </div>
            <div className="card-body">
                <p style={categoryBg} className="category">{category}</p>
                <h2 className="title">{title}</h2>
                <p style={color} className="price">${price}</p>
                <button style={buttonBg} className="details-btn">View Details</button>
            </div>
        </div>
    );
};

DonationCard.propTypes ={
    donation:PropTypes.object,
}

export default DonationCard;