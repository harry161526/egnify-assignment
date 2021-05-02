import './Properties.css';
import Card from './Card/Card';
import {data} from './data';

function Properties() {

    return (
        <div className="properties-container">
            <h1>FEATURED PROPERTIES</h1>
            <h5>Suspendisse dictum enim sit amet libero malesuada feugiat.</h5>
            <div className="properties">
            {data.map(house => {
                return(
                    <Card key={house.id} details={house} />
                )
            })}
            </div>
            
        </div>
    )
}

export default Properties;