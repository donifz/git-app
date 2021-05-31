import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ id, name, description }) => {
    return (
        <Link to={`card/${id}`}>
            <div className="card">
                <h2 className="card-name">{name}</h2>
                <p>{description}</p>
            </div>
        </Link>

    )
}

export default Card
