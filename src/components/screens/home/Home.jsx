import CreateCarForm from "./create-car-form/CreateCarForm.jsx"
import {CarService} from "../../../services/car.service.js"
import {useQuery} from "@tanstack/react-query"
import Header from "../../ui/Header.jsx"
import Catalog from "../../ui/Catalog.jsx";

function Home() {
    const {data, isLoading} = useQuery(['cars'], () => CarService.getAll())

    // const filteredCars = useMemo(
    //     () => cars.filter(car => car.price > 20000), []
    // )
    // console.log('render')
    // const [cars, setCars] = useState([])
    // console.log(cars)

    // const clearCars = useCallback(  () => () => {
    //     setCars([])
    // }, [cars])
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await CarService.getAll()
    //
    //         setCars(data)
    //     }
    //     fetchData()
    //     // return clearCars
    // }, [])

    // const nav = useNavigate()
    // const {user, setUser} = useAuth()

    if (isLoading) return <p>Loading...</p>

    return (
        <div>
            <h1>Car catalog</h1>

            <Header />

            {/*<button onClick={() => nav('/car/1')}>go to car 1</button>*/}
            {/*<CreateCarForm setCars={setCars}/>*/}
            <CreateCarForm />
            <Catalog data={data}/>
        </div>
    )
}

export default Home
