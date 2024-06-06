// React
import { useContext } from "react";

// Context
import { AppContext } from "../../context/AppContext"



export const useForm = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('The component is not in the provider')
    }

    const {
        formData,
        games,
        handleForm,
        postForm
    } = context

    return {
        formData,
        games,
        handleForm,
        postForm
    }

}