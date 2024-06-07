import { useNavigate } from "react-router";
import { Button, GameCard, Header, Loader } from "../components";
import { useForm } from "../hooks/useForm";
import { usePage } from "../hooks/usePage";

export function GamesPage() {

    const navigate = useNavigate()

    const {
        bgImage
    } = usePage()

    const {
        games,
        setFormData
    } = useForm()



    const hasGames = games.length > 0

    if (hasGames) {
        console.log(games);
    }


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
                    These videogames are recommended for you
                </h2>
                {
                    hasGames ?
                        <section className="relative z-10 grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-7 mx-10 md:mx-20 xl:mx-28 mt-14">
                            {
                                games.map(({
                                    id,
                                    background_image,
                                    metacritic,
                                    name,
                                    genres,
                                    released,
                                    parent_platforms,
                                    slug }) => (
                                    <GameCard
                                        key={id}
                                        bgImage={background_image}
                                        name={name}
                                        metacritic={metacritic}
                                        slug={slug}
                                        genres={genres}
                                        released={released}
                                        parentPlatform={parent_platforms}

                                    />
                                ))
                            }

                        </section>
                        :
                        <section className=" h-screen flex justify-center items-center mt-20">
                            <Loader />
                        </section>
                }

                <div className="flex justify-between items-center mx-10 md:mx-20 xl:mx-28 my-0 py-10">
                    <Button
                        label='Back'
                        variant='secondary'
                        action={() => navigate(-1)}
                    />
                    <Button
                        label='Done'
                        variant='secondary'
                        action={() => {
                            navigate('/')
                            setFormData({
                            })
                        }}
                    />
                </div>
            </section>
        </>
    )
}