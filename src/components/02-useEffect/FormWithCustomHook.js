import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;    

    useEffect(() => {
        console.log('El email cambio');
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>
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

                <input type="text"
                    name="email"
                    className="form-control"
                    autoComplete="off"
                    placeholder="email@gmail.com"
                    value={ email }
                    onChange={ handleInputChange }>
                
                </input>

                <br/>

                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*********"
                    value={ password }
                    onChange={ handleInputChange }>
                
                </input>

            </div>

            <br/>
            
            <button type="submit" className="btn btn-primary"> 
                Guardar
            </button>
            
        </form>
    )
}
