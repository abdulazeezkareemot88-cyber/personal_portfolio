function Projects() {
	const projects = [
		{ title: "Portfolio Website", text: "A responsive personal portfolio built with React and CSS." },
		{ title: "Landing Page", text: "A focused product page with clear layout and responsive sections." },
		{ title: "Dashboard Concept", text: "A clean interface concept for presenting useful information." },
	];

	return (
		<section className="section projects" id="projects">
			<div className="container">
				<p className="section-label">Selected work</p>
				<h2>Projects</h2>
				<div className="projects-grid">
					{projects.map((project, index) => (
						<article className="project-card" key={project.title}>
							<span className="project-number">0{index + 1}</span>
							<h3>{project.title}</h3>
							<p>{project.text}</p>
							<a href="#contact">Discuss a project -&gt;</a>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
