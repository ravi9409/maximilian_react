
import Header from './components/Header.jsx';
import { CORE_CONCEPTS } from '../data.js';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import './components/Header.jsx';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id='core-concepts'>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts
                key={concept.title}
                title={concept.title}
                description={concept.description}
                image={concept.image}
              />
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
