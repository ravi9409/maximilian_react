import React from 'react'


function CoreConcept(props) {
    return (
        <div>
            <li>
                <img src={props.image} alt="React core concepts" />
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </li>
        </div>
    )
}

export default CoreConcept