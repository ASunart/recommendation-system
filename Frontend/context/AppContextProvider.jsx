// Eslint
/* eslint-disable react/prop-types */

// React
import { useState, useEffect } from "react";

// Context
import { AppContext } from "./AppContext";

// Background Image
import bgImage from '../src/assets/images/other/pattern.png'

export function AppContextProvider({ children }) {

    const [formData, setFormData] = useState({})
    const [games, setGames] = useState([])


    

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



    return (
        <AppContext.Provider value={{
            formData,
            games,
            handleForm,
            postForm,
            bgImage
        }}>
            {children}
        </AppContext.Provider>
    )
}