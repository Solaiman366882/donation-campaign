import PropTypes from 'prop-types';
import './HomeCard.css'
import { NavLink } from 'react-router-dom';
const HomeCard = ({donation}) => {

    const{id,title,img,category,category_bg,card_bg,text_button_bg} =donation || {}

    const categoryBackgroundColor = {
        backgroundColor:category_bg
    };
    const cardBackgroundColor = {backgroundColor:card_bg};

    const color = {color:text_button_bg};

    return (
        <div>
            <NavLink to={`/donation/${id}`}>
                <div style={cardBackgroundColor} className="card">
                    <div className="card-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="card-body">
                        <p style={{...categoryBackgroundColor,...color}} className="category">{category}</p>
                        <h2  style={color} className="title">{title}</h2>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

HomeCard.propTypes ={
    donation:PropTypes.object
}
export default HomeCard;