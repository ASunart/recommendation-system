import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export function usePage() {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('The component is not in the provider')
    }

    const {
        bgImage
    } = context

    return {
        bgImage
    }
}