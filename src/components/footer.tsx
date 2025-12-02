import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} UnderTango — Todos los derechos reservados.
      </p>

      <nav className="footer-nav">
        <a href="#historia" className="footer-link">Historia</a>
        <a href="#servicios" className="footer-link">Qué hacemos</a>
        <a href="#ecosistema" className="footer-link">Ecosistema</a>
        <a href="#beneficios" className="footer-link">Beneficios</a>
        <a href="#contacto" className="footer-link">Contacto</a>
      </nav>
    </footer>
  );
}
