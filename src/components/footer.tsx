export default function Footer() {
  return (
    <footer className="py-10 bg-black text-center text-gray-500">
      <p>© {new Date().getFullYear()} UnderTango — Todos los derechos reservados.</p>
      <nav className="mt-4 space-x-4">
        <a href="#historia" className="hover:text-white">Historia</a>
        <a href="#servicios" className="hover:text-white">Qué hacemos</a>
        <a href="#ecosistema" className="hover:text-white">Ecosistema</a>
        <a href="#beneficios" className="hover:text-white">Beneficios</a>
        <a href="#contacto" className="hover:text-white">Contacto</a>
      </nav>
    </footer>
  );
}
