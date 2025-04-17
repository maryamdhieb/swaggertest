import React, { useState } from 'react';
import './App.css';
import SwaggerUIComponent from './components/SwaggerUI';
import LocalSwaggerUI from './components/LocalSwaggerUI';

function App() {
    const [activeTab, setActiveTab] = useState('remote');

    return (
        <div className="App">
            <header className="App-header">
                <h1>Swagger UI React Demo</h1>
                <p>Explore and test APIs with Swagger UI</p>
            </header>
            <main>
                <div className="tabs">
                    <button
                        onClick={() => setActiveTab('remote')}
                        className={`tab ${activeTab === 'remote' ? 'active' : ''}`}
                    >
                        Remote API
                    </button>
                    <button
                        onClick={() => setActiveTab('local')}
                        className={`tab ${activeTab === 'local' ? 'active' : ''}`}
                    >
                        Local File
                    </button>
                </div>

                {activeTab === 'remote' ? <SwaggerUIComponent /> : <LocalSwaggerUI />}
            </main>
            <footer>
                <p>Built with swagger-ui-react</p>
            </footer>
        </div>
    );
}

export default App;
