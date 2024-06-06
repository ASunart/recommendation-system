import { useNavigate } from "react-router"
import { Button, Footer, Header } from "../components"
import { usePage } from "../hooks/usePage"

export function HomePage() {
    const { bgImage } = usePage()
    const navigate = useNavigate()


    return (
        <>
            <Header />
            <div
                className="bg-top bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${bgImage})` }}
            >

                <section className="flex flex-col-reverse lg:flex-row gap-[100px] items-center pb-10">
                    <img
                        className="w-[90%] lg:w-[55%]"
                        src="../src/assets/images/other/hero.webp" alt="hero-img" />
                    <div className="flex flex-col gap-8 justify-center items-center m-2">
                        <img
                            className="w-[60%]"
                            src="../src/assets/images/other/logo.webp" alt="logo-img" />
                        <p className="text-white text-lg">Why wait? Dive into the world of <br /> PlaySync and <b>let the games begin!</b></p>
                        <Button
                            label='What should I play today?'
                            variant='primary'
                            action={() => navigate('/genres')} />
                    </div>
                </section>
            </div>
            <Footer />
        </>

    )
}
