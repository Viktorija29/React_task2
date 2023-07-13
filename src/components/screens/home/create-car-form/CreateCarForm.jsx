import styles from './CreateCarForm.module.css'
import {useForm} from "react-hook-form"
import PropTypes from "prop-types"
import ErrorMessage from "./ErrorMessage";
import {useCreateCar} from "./useCreateCar";

// const CreateCarForm = ({setCars}) => {
const CreateCarForm = () => {

    const {register, reset, handleSubmit, formState: {errors}} = useForm({mode: 'onChange'})

    // const createCar = (e) => {
    //     e.preventDefault()
    //     // console.log({name, price, image})
    //     setCars(prev =>
    //         [...prev, {id: prev.length + 1, ...data}])
    //     setData(clearData)
    // }
    //
    // return <form className={styles.form}>
    //     <input
    //         placeholder='Name'
    //         onChange={e => setData(prev => ({
    //             ...prev, name: e.target.value}))}
    //         value={data.name}/>
    //     <input
    //         placeholder='Price'
    //         onChange={e => setData(prev => ({
    //             ...prev, price: e.target.value}))}
    //         value={data.price}/>
    //     <input
    //         placeholder='Image'
    //         onChange={e => setData(prev => ({
    //             ...prev, image: e.target.value}))}
    //         value={data.image}/>
    //
    //     <button className="btn" onClick={e => createCar(e)}>Create</button>
    // </form>

    const {createCar} = useCreateCar(reset)

    return <form className={styles.form} onSubmit={handleSubmit(createCar)}>
        <input
            {...register('name', {required: 'Name is required!'})}
            placeholder='Name'
        />
        <ErrorMessage error={errors?.name?.message} />

        <input
            {...register('price', {required: true})}
            placeholder='Price'
        />
        <input
            {...register('image', {required: true})}
            placeholder='Image'
         />

        <button className="btn" >Create</button>
    </form>
}

CreateCarForm.propTypes = {
    setCars: PropTypes.any
};

export default CreateCarForm