import location from '../../images/location.png';
import New from "../../images/new.png";
import bathtub from '../../images/bathtub.png';
import bedroom from '../../images/garage.png';
import area from '../../images/space.png';
import './Card.css';

function Card (props) {
    const house = props.details;
    return (
        <div className="card">
            <div className="imgbox">
                <img src={house.image} alt={house.houseType} />
                <span className="purpose">{'for '+house.purpose}</span>
                <span className="price">{'$'+house.price}</span>
            </div>
            <div className="content">
                <p className="main-heading">{house.houseType + " in "+house.city}</p>
                <div className="location">
                    <div className="imgbox-1">
                        <img src={location} alt="location" />
                    </div>
                    <span>{house.address}</span>
                </div>
                <div className="description">
                    {house.description}
                </div>
                <div className="amenities">
                    <div className="location">
                        <div className="imgbox-1">
                            <img src={New} alt="new" />
                        </div>
                        
                    </div>
                    <div className="location">
                        <div className="imgbox-1">
                            <img src={bathtub} alt="" />
                        </div>
                        <span>{house.Bathrooms}</span>
                    </div>
                    <div className="location">
                        <div className="imgbox-1">
                            <img src={bedroom} alt="" />
                        </div>
                        <span>{house.Bedrooms}</span>
                    </div>
                    <div className="location">
                        <div className="imgbox-1">
                            <img src={area} alt="" />
                        </div>
                        <span>{house.area+" sq.ft"}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;