import {CarService} from "../../../../services/car.service.js";
import {useMutation, useQueryClient} from "@tanstack/react-query";

export const useCreateCar = (reset) => {
    const queryClient = useQueryClient()

    const {mutate} = useMutation(['create car'], (data) => CarService.create(data), {
        onSuccess: () => {
            queryClient.invalidateQueries('cars')
            reset()
        }
    })

    const createCar = data => {
        // setCars(prev =>
        //     [...prev, {id: prev.length + 1, ...data}])
        mutate(data)
    }

    return {createCar}
}