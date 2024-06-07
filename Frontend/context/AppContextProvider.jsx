// Eslint
/* eslint-disable react/prop-types */

// React
import { useState, useEffect } from "react";

// Context
import { AppContext } from "./AppContext";

// Background Image
import bgImage from '../src/assets/images/other/pattern.png'

const URL = 'http://127.0.0.1:5001/'

export function AppContextProvider({ children }) {

    const [formData, setFormData] = useState({})
    const [games, setGames] = useState([])
    const [game, setGame] = useState({})



    const handleForm = (e) => {
        const { name, value, checked } = e.target;
        setFormData(prevForm => {
            if (checked) {
                return {
                    ...prevForm,
                    [name]: prevForm[name] ? [...prevForm[name], value] : [value]
                };
            } else {
                const updatedValues = prevForm[name].filter(item => item !== value);
                return {
                    ...prevForm,
                    [name]: updatedValues
                };
            }
        });
    }



    useEffect(() => {
        console.log(formData);
    }, [formData])

    const postForm = (e) => {
        e.preventDefault();
        fetch(`${URL}recommend`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(res => {
            if (!res.ok) {
                throw new Error('Paila');
            }
            return res.json(); // Parsea la respuesta JSON
        }).then(data => {
            setGames(data); // Establece la respuesta en el estado setGames
        }).catch(error => {
            console.error('Error:', error);
            //    Manejar errores aquí
        });
    }

    const getGame = (slug) => {
        fetch(`https://api.rawg.io/api/games/${slug}?key=b7667a4106ea47d5b5052513e3955e6b`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Paila al traer el juego');
                }
                return res.json(); // Parsea la respuesta JSON
            }).then(data => {
                setGame(data); // Establece la respuesta en el estado setGames
            }).catch(error => {
                console.error('Error:', error);
                //    Manejar errores aquí
            });
    }


    return (
        <AppContext.Provider value={{
            formData,
            games,
            handleForm,
            postForm,
            bgImage,
            getGame,
            game,
            setFormData
        }}>
            {children}
        </AppContext.Provider>
    )
}
