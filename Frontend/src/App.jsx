import { useEffect } from 'react'
import './App.css'

const API_KEY = "aekvq9K4gVr/02XHfBgKLA==2SvhMWRULtk0JFoG"

function App() {

  const fetchData = async () => {
    const request = {
      method: 'GET',
      headers: {
        'X-Api-Key': API_KEY
      },
    }

    try {
      const response = await fetch('https://api.api-ninjas.com/v1/exercises?muscle=biceps', request)
      const data = await response.json()
      console.log(data);
      return data
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    // fetchData()
  }, [])

  return (
    <>
      <h1 className='font-bold text-4xl text-center p-4'>Recommendation system</h1>
    </>
  )
}

export default App
