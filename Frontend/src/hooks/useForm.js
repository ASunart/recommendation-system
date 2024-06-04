// React
import { useContext } from "react";

// Context
import { FormContext } from "../../context/formContext"



export const useForm = () => {
    const context = useContext(FormContext);

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