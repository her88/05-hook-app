import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';


export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>Cunter with Hook: { state }</h1>
            <hr/>

            <button className="btn btn-primary" onClick={ () => increment(5) }> + 1</button>
            <button className="btn btn-warning" onClick={ reset }> Reset</button>
            <button className="btn btn-secondary" onClick={ () => decrement(5) }> - 1</button>

        </>
    )
}
