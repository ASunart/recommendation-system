import { Checkbox } from "../components"
import { genres } from "../const/genres"
import { useForm } from "../hooks/useForm"

export function GenresPage() {

    const {
        handleForm
    } = useForm()

    return (
        <>
            <h2 className="text-white font-bold text-2xl">Hello from Genres page</h2>
            <div className="flex justify-center items-center m-8 flex-wrap gap-4">
                {
                    genres.map(({ id, name, img }) => (
                        <Checkbox
                            key={id}
                            name='genres'
                            label={name}
                            image={img}
                            onChange={handleForm}
                        />
                    ))
                }
            </div>

        </>
    )
}
