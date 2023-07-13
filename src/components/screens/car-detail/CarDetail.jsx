import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {CarService} from "../../../services/car.service.js";
import CarItem from "../home/car-item/CarItem";
import {Link} from 'react-router-dom'
import {withAuth} from "../../../HOC/withAuth";

const CarDetail = () => {
    const {id} = useParams()
    const [car, setCar] = useState({})

    useEffect(() => {
        if(!id) return

        const fetchData = async () => {
            const data = await CarService.getById(id)

            setCar(data)
        }
        fetchData()
    }, [id])

    if (!car?.name) return <p>Car not found</p>



    return <div>
        <Link to='/'>Back</Link>
        <CarItem car={car} />
    </div>
}

export default withAuth(CarDetail)