import { useEffect } from "react"
import { usePage } from "../hooks/usePage"
import { useLocation } from "react-router"
import { Header } from "../components"

export function GameDetailPage() {

    const location = useLocation()

    const getSlug = () => {
        const slug = location.pathname.split('/')
        return slug[slug.length - 1]
    }

    const slug = getSlug()
    console.log(slug);

    const {
        game,
        getGame
    } = usePage()

    useEffect(() => {
        getGame(slug)
    }, [])


    console.log(game);

    return (
        <>
            <Header />
            <article>
                <div
                    className="flex flex-col justify-end h-[60vh] bg-top bg-no-repeat bg-cover"
                    style={{
                        backgroundImage: `url(${game.background_image})`,
                        backgroundColor: 'linear-gradient(180deg, rgba(9, 11, 41, 0.7973564425770308) 10 %, rgba(9, 10, 40, 1) 100 %)'
                    }}
                >
                    <div className="flex justify-between items-center px-10 py-20">

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
                                <p className='' ><span style={{
                                    backgroundColor: `${game.metacritic >= '75' ? '#A8FC71' : game.metacritic >= '50' ? '#FCEE71' : '#FF6161'}`,
                                    padding: '10px 13px',
                                    borderRadius: '50%',
                                    fontSize: '1.2rem',
                                    fontWeight: '600',
                                    color: '#070922'
                                }}> {game.metacritic}</span> </p> :
                                null
                        }
                    </div>
                </div>
            </article>
        </>
    )
}