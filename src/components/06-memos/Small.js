// import React, { memo } from 'react'
import React from 'react';

/**
 * React.memo sirve para memorizar algo, en este caso este componente,
 * y que solo si sus properties cambian entonces va a volverse a renderizar,
 * caso contrario va a usar la version memorizada cuando tenga que redibujar algo
 */
export const Small = React.memo(({value}) => {

    console.log('Me volvi a llamar :(');

    return (
        <small>{ value }</small>
    )
})
