import React, { useState, useEffect } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    // efecto que se ejecuta cuando se carga por primera vez el componente
    useEffect( () => {
        //console.log('hey!!!');
    }, []);

    // efecto que se ejecuta cuando cuando sucede algun cambio en el formState
    useEffect( () => {
        //console.log('Cambio el formState');
    }, [formState]);
    
    // efecto que se ejecuta solo cuando cambia el email
    useEffect(() => {
        //console.log('Cambio el email');
    }, [email]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>

            <div className="form-group">

                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    autoComplete="off"
                    placeholder="Ingresa tu nombre"
                    value={ name }
                    onChange={ handleInputChange }>
                
                </input>

                <br/>

                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    autoComplete="off"
                    placeholder="email@gmail.com"
                    value={ email }
                    onChange={ handleInputChange }>
                
                </input>

                { (name === '123') && <Message />}
            </div>
            
        </>
    )
}
