import styles from "../Home.module.css"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import Price from "./Price"

function CarItem({ car }) {
    // const [count, setCount] = useState(0)
    return <div key={car.id} className={styles.item}>
        <div className={styles.image}
             style={{backgroundImage: `url(${car.image})`,}}>
        </div>
        <div className={styles.info}>
            <h2>{car.name}</h2>
            {/*<button onClick={() => setCount(prev => prev + 1)}>Click to add count</button>*/}
            <Price price={car.price} />
            <Link className='btn' to={`/car/${car.id}`}>Read more</Link>

        </div>
    </div>
}

CarItem.propTypes = {
    car: PropTypes.any
};

export default CarItem