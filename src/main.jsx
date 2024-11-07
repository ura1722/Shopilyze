
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import './index.css'
import store from './stores/store';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>  
    <App />
  </Provider>,
)
