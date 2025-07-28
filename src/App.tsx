import './App.css'
import logo from './assets/img/logo.jpg'
import noche from './assets/img/noche.jpg'
import diaL from './assets/img/diaL.jpg'
import diaR from './assets/img/diaR.jpg'

function App() {
  return (
    <div className="app">
      <header>
        <h1>Towing 24/7</h1>
        <p>Servicio profesional de remolque en Tampa y alrededores</p>
      </header>

      <main className="hero">
        <img src={logo} alt="Camión de remolque" className="hero-image" />

        <h2>¿Tu auto falló? Estamos listos para ayudarte</h2>
        <p>Servicio rápido, confiable y disponible 24/7<br />Se habla español</p>

        <div className="buttons">
          <a href="tel:+18137315626" className="cta-button">📞 Contactar ahora</a>
        </div>
      </main>

      <section className="gallery">
        <h3>Nuestro trabajo</h3>
        <div className="image-grid">
          <img src={noche} alt="Remolque de noche" />
          <img src={diaL} alt="Remolque de día izquierda" />
          <img src={diaR} alt="Remolque de día derecha" />
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Rescate Rápido 24/7. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App
