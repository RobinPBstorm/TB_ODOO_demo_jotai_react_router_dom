import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { myStore } from './store/index.js'
import { Provider } from 'jotai'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Provider store={myStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
