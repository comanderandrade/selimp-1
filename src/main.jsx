import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"; // Importa o CSS do Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './index.css' // Importa o CSS personalizado
import App from './App.jsx'
import Header from './components/navbar/header.jsx';
import Footer from './components/footer/footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>,
)
