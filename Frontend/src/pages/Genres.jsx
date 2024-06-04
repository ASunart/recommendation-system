import { Checkbox } from "../components"
import { useForm } from "../hooks/useForm"

export function GenresPage() {

    const {
        handleForm
    } = useForm()

    return (
        <>
            <h2 className="text-white font-bold text-2xl">Hello from Genres page</h2>
            <div className="flex justify-center items-center">
                <Checkbox
                    label='Adventure'
                    name='genres'
                    onChange={handleForm}
                />
            </div>

        </>
    )
}
