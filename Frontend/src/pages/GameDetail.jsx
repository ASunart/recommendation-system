import { useEffect } from "react"
import { usePage } from "../hooks/usePage"
import { useLocation } from "react-router"
import { Header, Loader } from "../components"

export function GameDetailPage() {

    const location = useLocation()

    const getSlug = () => {
        const slug = location.pathname.split('/')
        return slug[slug.length - 1]
    }

    const slug = getSlug()

    const {
        game,
        getGame
    } = usePage()

    useEffect(() => {
        getGame(slug)

    }, [slug])

    if (Object.keys(game).length === 0) {
        return (
            <div className="h-screen flex justify-center items-center"> 
                <Loader />
            </div>
        )
    }
    // console.log(game.platforms[0].platform.name);

    return (
        <>
            <Header />

            <article>
                <div
                    className="relative flex flex-col justify-end h-[80vh] bg-top bg-no-repeat bg-cover bg-gradient-to-b from-slate-400 from-0% via-slate-900 via-80% to-primary-color"
                >
                    <div className="flex justify-between items-center px-10 py-10">
                        <img
                            className="absolute top-0 left-0 w-full h-full object-top object-cover mix-blend-overlay"
                            src={game.background_image}
                            alt={game.slug} />
                        <h2
                            className="text-white font-bold text-4xl
                    
                        w-fit 
                        relative after:content-[''] after:absolute  after:bottom-[-20px] after:left-0 after:w-full after:max-w-[600px] after:h-[1px] after:bg-action-color 
                        before:content-[''] before:absolute before:bottom-[-20px] before:w-full before:max-w-[600px] before:h-[1px] before:bg-white before:z-10 before:filter before:blur-md"
                        >
                            {game.name}
                        </h2>
                        {
                            game.metacritic ?
                                <p className='relative flex flex-col items-center gap-4 text-white font-bold text-lg' ><span style={{
                                    backgroundColor: `${game.metacritic >= '75' ? '#A8FC71' : game.metacritic >= '50' ? '#FCEE71' : '#FF6161'}`,
                                    padding: '10px 15px',
                                    borderRadius: '50%',
                                    fontSize: '1.2rem',
                                    fontWeight: '600',
                                    color: '#070922'
                                }}> {game.metacritic}</span> METACRITIC </p> :
                                null
                        }
                    </div>
                </div>

                <div className="flex flex-wrap justify-between items-center gap-10 m-10">
                    <div className="flex gap-8">
                        {
                            game.genres.map((genre) => (
                                <p
                                    key={genre.id}
                                    className=" text-white px-10 py-2 cursor-default hover:bg-action-color hover:text-primary-color transition-all bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-opacity-20 border-gray-100"
                                >
                                    {genre.name}
                                </p>
                            ))
                        }
                    </div>

                    <div className="">
                        <p className="text-white">{game.released}</p>
                    </div>
                </div>

                <div className="mx-10 xl:max-w-full">
                    <h3 className="font-semibold text-2xl text-action-color">About</h3>
                    <p className="text-white py-3">{game.description_raw}</p>
                </div>

                <div className="flex flex-row items-center gap-10 mx-10 my-6">
                    {
                        game.platforms.map((platforms) => (
                            <p
                                key={platforms.platform.id}
                                className="px-8 py-2 text-white bg-blue-600 rounded-lg"
                            >
                                {platforms.platform.name}
                            </p>
                        ))
                    }
                </div>

            </article>

        </>
    )
}