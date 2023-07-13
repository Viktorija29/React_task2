import CarItem from "../screens/home/car-item/CarItem.jsx";
import PropTypes from "prop-types"

const Catalog = ({data}) => {
    return (<div>
        {data.length ? data.map(value => (
                <CarItem key={value.id} car={value}/>
            ))
            : <p>There are no cars</p>
        }
    </div>)
}

Catalog.propTypes = {
    data: PropTypes.any
};


export default Catalog