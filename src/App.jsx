
import Header from './components/Header.jsx';
import { CORE_CONCEPTS, EXAMPLES } from '../data.js';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import './components/Header.jsx';
import { useState } from 'react';

function App() {

  const [tabContent, setTabContent] = useState('Please click a button');

  function handleSelect({ tab }) {
    setTabContent(tab);
  }

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
            <TabButton isSelected={tabContent === 'components'} onSelect={() => handleSelect({ tab: 'components' })}>Components</TabButton>
            <TabButton isSelected={tabContent === 'jsx'} onSelect={() => handleSelect({ tab: 'jsx' })}>JSX</TabButton>
            <TabButton isSelected={tabContent === 'props'} onSelect={() => handleSelect({ tab: 'props' })}>Props</TabButton>
            <TabButton isSelected={tabContent === 'state'} onSelect={() => handleSelect({ tab: 'state' })}>State</TabButton>
          </menu>
          {!EXAMPLES[tabContent] ? (
            <p>Please select a topic.</p>
          ) : (
            <div id='tab-content'>
              <h3>{EXAMPLES[tabContent].title}</h3>
              <p>{EXAMPLES[tabContent].description}</p>
              <pre>
                <code>{EXAMPLES[tabContent].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
