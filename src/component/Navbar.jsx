import logo from "../../Person/logo.png";

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <a className="navbar-logo" href="#home">
        <img src={logo} alt="Kareemot Abdulazeez logo" />
        <span>Kareemot Abdulazeez</span>
      </a>
      <div className="navbar-actions">
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="theme-toggle" onClick={toggleTheme} type="button" aria-label="Toggle theme">
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;