import './CoreConcepts.css';
import { CORE_CONCEPTS } from '../../data.js';
import CoreConcept from './CoreConcept.jsx';


function CoreConcepts(props) {
    return (
        <>
            <section id='core-concepts'>
                <ul>
                    {CORE_CONCEPTS.map((concept) => (
                        <CoreConcept
                            key={concept.title}
                            title={concept.title}
                            description={concept.description}
                            image={concept.image}
                        />
                    ))}
                </ul>
            </section>
        </>
    );
}

export default CoreConcepts;