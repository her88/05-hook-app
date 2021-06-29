import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const {setUser} = useContext(UserContext);

    const userSession = {
        id: 123,
        name: 'Hernan',
    }

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            <button className="btn btn-primary" onClick={ () => setUser(userSession)}>
                Login
            </button>
        </div>
    )
}
