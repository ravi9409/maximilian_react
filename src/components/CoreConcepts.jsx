import './CoreConcepts.css';
import { CORE_CONCEPTS } from '../../data.js';
import CoreConcept from './CoreConcept.jsx';
import Section from './Section.jsx';


function CoreConcepts(props) {
    return (
        <>
            <Section id="core-concepts" title="Core Concepts">
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
            </Section>
        </>
    );
}

export default CoreConcepts;