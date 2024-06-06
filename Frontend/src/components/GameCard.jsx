import { Link } from 'react-router-dom'
import { Button } from './Button'

export function GameCard() {

    const metacritic = 80


    return (
        <Link
            to={'/games/game'}
            className='flex flex-col 
            h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-opacity-20 border-gray-100'
        >
            <div className="relative">
                <img
                    className='w-full h-full object-cover rounded-tl rounded-tr brightness-[.40]'
                    src={'../src/assets/images/checkbox/adventure.webp'}
                    alt={`backgroun_image`} />
                <p className='absolute bottom-5 right-5' ><span style={{
                    backgroundColor: `${metacritic >= '75' ? 'green' : metacritic >= '50' ? 'yellow' : 'red'}`,
                    padding: '0.5em 0.8em',
                    borderRadius: '0.2em',
                    fontSize: '1.25rem',
                    color: 'white'
                }}> {metacritic}</span> </p>
            </div>
            <h2
                className=" text-white font-medium text-2xl mx-3 my-2
                relative after:content-[''] after:absolute  after:bottom-[-10px] after:left-0 after:w-full after:max-w-[600px] after:h-[1px] after:bg-action-color 
            before:content-[''] before:absolute before:bottom-[-10px] before:w-full before:max-w-[600px] before:h-[1px] before:bg-white before:z-10 before:filter before:blur-md"
            >The leyend of Zelda</h2>
            <p className='text-white mx-3 my-6'> Description </p>
            <p className='text-gray-400 mx-3 my-1'> Platforms </p>
            <p className='text-gray-400 mx-3 my-1'> Genre Genre Genre </p>
            <div
                className=' '>
                {/* {
                    genres.map((genre) => (
                        <p key={crypto.randomUUID()}>{genre}</p>
                    ))
                } */}

            </div>
            <div className="mx-3 my-6">

                <Button
                    label='See more'
                    variant='card'
                />
            </div>
        </Link>
    )
}