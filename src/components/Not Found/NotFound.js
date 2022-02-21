import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h3>Ups! Aún no hay productos agregados </h3>
            <Link to="/" >
                <button>Vamos al Shop!</button>
            </Link>
        </div>
    )
}

export default NotFound;