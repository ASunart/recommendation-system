import { useNavigate } from "react-router"
import { Button, Header } from "../components"
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

                <section className="flex justify-center items-center h-lvh">
                    <Button
                        label='What should I play today?'
                        variant='primary'
                        action={() => navigate('/genres')} />
                </section>
            </div>
        </>

    )
}


//   const hasGames = games.length > 0

//   if (hasGames) {
//     console.log(games);
//   }
//   return (
//     <>
//       <h1 className='font-bold text-4xl text-center p-4'>Recommendation system</h1>
//       <form className='flex flex-col gap-4'
//         onSubmit={postForm}
//       >
//
//         <div>

//           <input
//             name='platforms'
//             type="checkbox"
//             value='PlayStation'
//             onChange={handleForm}
//           />
//           <label htmlFor="plataform">PlayStation</label>
//         </div>
//         <div>

//           <input
//             name='platforms'
//             type="checkbox"
//             value='Xbox'
//             onChange={handleForm}
//           />
//           <label htmlFor="plataform">Xbox</label>
//         </div>
//         <div>

//           <input
//             name='platforms'
//             type="checkbox"
//             value='PC'
//             onChange={handleForm}
//           />
//           <label htmlFor="plataform">PC</label>
//         </div>

//         <div>
//           <input
//             name='tags'
//             type="checkbox"
//             value='Multiplayer'
//             onChange={handleForm}
//           />
//           <label htmlFor="tags">Multiplayer</label>
//         </div>

//         <div>
//           <input
//             name='tags'
//             type="checkbox"
//             value='Third-Person'
//             onChange={handleForm}
//           />
//           <label htmlFor="tags">Third-Person</label>
//         </div>

//         <div>

//           <input
//             name='tags'
//             type="checkbox"
//             value='Single player'
//             onChange={handleForm}
//           />
//           <label htmlFor="tags">Single player</label>
//         </div>

//         <button type="submit">Submit</button>
//       </form>

//       <h1>Recommended Games</h1>
//       {
//         hasGames ?
//           games.map(({
//             id,
//             name,
//             background_image,
//             genres,
//             parent_platforms,
//             metacritic }) => (
//             <article
//               key={id}
//               className='flex flex-col '
//             >
//               <img src={background_image} alt={`${name} backgroun_image`} />
//               <h2>{name}</h2>
//               <div
//                 className='flex items-center gap-x-2'>
//                 {
//                   genres.map((genre) => (
//                     <p key={crypto.randomUUID()}>{genre}</p>
//                   ))
//                 }

//               </div>
//               <div className='flex flex-wrap items-center gap-x-2'>
//                 {
//                   parent_platforms.map(({ platform }) => (
//                     <p key={crypto.randomUUID()}>{platform}</p>
//                   ))
//                 }
//               </div>
//               <p > METASCORE <span style={{
//                 backgroundColor: `${metacritic >= '75' ? 'green' : metacritic >= '50' ? 'yellow' : 'red'}`,
//                 padding: '0.2em 0.5em',
//                 borderRadius: '0.2em',
//                 color: 'white'
//               }}> {metacritic}</span> </p>
//             </article>
//           ))
//           :
//           <p>Please fill the form</p>
//       }

//     </>
//   )