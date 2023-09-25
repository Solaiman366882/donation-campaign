
const HomeCard = ({donation}) => {

    const{title,img,category} =donation || {}

    return (
        <div className="card">
            <div className="card-img">
                <img src={img} alt="" />
            </div>
            <div className="card-body">
                <p className="category">{category}</p>
                <h2 className="title">{title}</h2>
            </div>
        </div>
    );
};

export default HomeCard;