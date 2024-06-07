// Eslint
/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'
import { Button } from './Button'

export function GameCard({
    bgImage,
    genres,
    metacritic,
    name,
    slug,
    parentPlatform,
    released
}) {




    return (
        <Link
            to={`/games/${slug}`}
            onClick={()=>{
                window.scrollTo(0,0)
            }}
            className='flex flex-col justify-between
            h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-opacity-20 border-gray-100'
        >
            <div className="relative">
                <img
                    className='w-full h-full object-cover rounded-tl rounded-tr brightness-[.40] aspect-square'
                    src={bgImage}
                    alt={`backgroun_image`} />
                {
                    metacritic ?
                        <p className='absolute bottom-5 right-5' ><span style={{
                            backgroundColor: `${metacritic >= '75' ? '#A8FC71' : metacritic >= '50' ? '#FCEE71' : '#FF6161'}`,
                            padding: '10px 13px',
                            borderRadius: '50%',
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            color: '#070922'
                        }}> {metacritic}</span> </p> :
                        null
                }
            </div>
            <h2
                className=" text-white font-medium text-2xl mx-3 my-2
                relative after:content-[''] after:absolute  after:bottom-[-10px] after:left-0 after:w-full after:max-w-[600px] after:h-[1px] after:bg-action-color 
            before:content-[''] before:absolute before:bottom-[-10px] before:w-full before:max-w-[600px] before:h-[1px] before:bg-white before:z-10 before:filter before:blur-md"
            >
                {name}
            </h2>
            <div className="flex flex-wrap items-center gap-6 justify-between px-3 py-4">
                <div className='flex flex-wrap items-center gap-6'>
                    {
                        parentPlatform.map((platform) => (
                            <p
                                key={platform}
                                className='font-semibold text-lg text-action-color'>
                                {platform}
                            </p>

                        ))
                    }
                </div>
                <span className='font-semibold text-lg text-white' >{released}</span>
            </div>

            <div className="flex flex-wrap gap-6 px-3 py-4">
                {
                    genres.map((genre) => (
                        <p
                            key={genre}
                            className='font-semibold text-lg text-gray-400'>
                            {genre}
                        </p>

                    ))
                }
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