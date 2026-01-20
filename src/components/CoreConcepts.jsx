import './CoreConcepts.css';

function CoreConcepts(props) {
    return (
        <li>
            <img src={props.image} alt="React core concepts" />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </li>
    );
}

export default CoreConcepts;