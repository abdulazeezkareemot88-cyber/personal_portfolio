function Skills() {
	const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Responsive Design"];

	return (
		<section className="section skills" id="skills">
			<div className="container">
				<p className="section-label">What I use</p>
				<h2>Skills</h2>
				<div className="skills-grid">
					{skills.map((skill) => <div className="skill-card" key={skill}>{skill}</div>)}
				</div>
			</div>
		</section>
	);
}

export default Skills;
