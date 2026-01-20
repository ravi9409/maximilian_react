import React from 'react'
import { EXAMPLES } from '../../data.js';
import TabButton from './TabButton.jsx';
import { useState } from 'react';

function Examples() {

    const [tabContent, setTabContent] = useState('Please click a button');

    function handleSelect({ tab }) {
        setTabContent(tab);
    }

    return (
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
    )
}

export default Examples