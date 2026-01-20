
import Header from './components/Header.jsx';
import { CORE_CONCEPTS, EXAMPLES } from '../data.js';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import './components/Header.jsx';

import Examples from './components/Examples.jsx';

function App() {



  return (
    <div>
      <Header></Header>
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
    </div>
  );
}

export default App;
