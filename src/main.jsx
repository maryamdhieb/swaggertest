import { StrictMode } from 'react' //active des vérifications supplémentaires pour t’aider à détecter des bugs ou pratiques déconseillées.
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Il va chercher la balise <div id="root"></div> dans index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
