import profile from "../../Person/profile.jpg";

function Hero() {
  return (
    <section className="hero hero-section" id="home">
      <div className="container hero-content">
      <div className="hero-text">
        <p className="greeting">Hi, I&apos;m</p>
        <h1>Kareemot Abdulazeez</h1>
        <h2>Frontend Developer</h2>
        <p className="description">
          I build modern, responsive, and user-friendly web applications using HTML, CSS,
          JavaScript, and React.
        </p>
        <div className="hero-buttons">
          <a className="hero-button" href="#contact">
            Contact Me
          </a>
          <a className="hero-button secondary" href="#projects">
            View Projects
          </a>
        </div>
        <div className="social-icons">
          <a
            className="social-link"
            href="https://github.com/abdulazeezkareemot88-cyber"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.58 2 12.218c0 4.512 2.865 8.34 6.839 9.696.5.094.682-.223.682-.494 0-.244-.009-.89-.014-1.748-2.782.622-3.369-1.354-3.369-1.354-.455-1.19-1.112-1.505-1.112-1.505-.91-.636.069-.624.069-.624 1.005.073 1.535 1.058 1.535 1.058.894 1.57 2.343 1.117 2.914.854.091-.663.35-1.118.635-1.374-2.222-.259-4.557-1.141-4.557-5.078 0-1.122.389-2.041 1.027-2.758-.103-.259-.445-1.304.097-2.717 0 0 .84-.276 2.75 1.053A9.31 9.31 0 0 1 12 7.527c.851 0 1.707.117 2.507.344 1.909-1.329 2.747-1.053 2.747-1.053.544 1.413.201 2.458.099 2.717.64.717 1.025 1.636 1.025 2.758 0 3.947-2.338 4.817-4.567 5.07.359.317.679.94.679 1.893 0 1.366-.012 2.466-.012 2.801 0 .274.18.594.688.493A10.003 10.003 0 0 0 22 12.218C22 6.58 17.523 2 12 2Z" />
            </svg>
          </a>

          <a
            className="social-link"
            href="https://vercel.com/abdulazeez-kareemot-s-projects/~/deployments"
            target="_blank"
            rel="noreferrer"
            aria-label="Vercel"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 1.5 22.5 20.5H1.5L12 1.5Zm0 4.1-6.8 11.7h13.6L12 5.6Z" />
            </svg>
          </a>

          <a
            className="social-link"
            href="https://www.figma.com/files/team/1585583086859881556/recents-and-sharing?fuid=1585583084583204169"
            target="_blank"
            rel="noreferrer"
            aria-label="Figma"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.5 2.5A3.5 3.5 0 0 0 5 6a3.5 3.5 0 0 0 3.5 3.5h1.5V2.5H8.5Zm0 0v3.5h1.5V2.5H8.5Zm0 7H5A3.5 3.5 0 0 0 8.5 13.5V9.5Zm0 0v4a3.5 3.5 0 1 0 7 0V9.5H8.5Zm7 0A3.5 3.5 0 0 0 12 9.5h3.5v4.5H15.5Zm0-7A3.5 3.5 0 0 0 12 2.5v3.5h3.5V4.5Zm0 0v3.5H12V2.5h3.5Zm3.5 4.5A3.5 3.5 0 0 0 15.5 6h3.5A3.5 3.5 0 0 0 19 2.5ZM15.5 13.5A3.5 3.5 0 0 0 19 17a3.5 3.5 0 0 0-3.5-3.5Z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Kareemot Abdulazeez" />
      </div>
      </div>
    </section>
  );
}

export default Hero;
