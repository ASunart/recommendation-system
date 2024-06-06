import { useNavigate } from "react-router"
import { Button, Checkbox, Header } from "../components"
import { genres } from "../const/genres"
import { useForm } from "../hooks/useForm"
import { usePage } from "../hooks/usePage"

export function GenresPage() {

    const {
        bgImage
    } = usePage()

    const {
        handleForm
    } = useForm()

    const navigate = useNavigate()

    return (
        <>
            <Header />
            <section
                className="bg-top bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${bgImage})` }}>

                <h2
                    className="text-white font-bold text-2xl
                mx-5 lg:mx-10 xl:mx-20 mb-10 pt-10
                w-fit 
                relative after:content-[''] after:absolute  after:bottom-[-20px] after:left-0 after:w-full after:max-w-[600px] after:h-[1px] after:bg-action-color 
                before:content-[''] before:absolute before:bottom-[-20px] before:w-full before:max-w-[600px] before:h-[1px] before:bg-white before:z-10 before:filter before:blur-md">
                    What are your favorite videogame genres?
                </h2>
                <p className="text-white text-opacity-40 mx-5 lg:mx-10 xl:mx-20 mt-10 text-xl ">Select all options that apply</p>
                <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mx-10 md:mx-20 xl:mx-28 mt-14">
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
                </section>
                <div className="flex justify-end items-center mx-10 md:mx-20 xl:mx-28 my-0 py-10">
                    <Button
                        label='Continue'
                        variant='secondary'
                        action={() => navigate('/platforms')}
                    />
                </div>
            </section>
        </>
    )
}
