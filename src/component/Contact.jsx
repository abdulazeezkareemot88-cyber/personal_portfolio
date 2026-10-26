function Contact() {
	const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "kareemot@example.com";

	return (
		<section className="section contact" id="contact">
			<div className="container contact-content">
				<div className="contact-copy">
					<p className="section-label">Let&apos;s connect</p>
					<h2>Have an idea?</h2>
					<p>I&apos;d love to hear about it and help turn it into something useful.</p>
					<p className="contact-note">Your message will be sent directly to my inbox.</p>
				</div>
				<form className="contact-form" action={`https://formsubmit.co/${contactEmail}`} method="POST">
					<input type="hidden" name="_subject" value="New portfolio contact message" />
					<input type="hidden" name="_captcha" value="false" />
					<input type="hidden" name="_template" value="table" />
					<label htmlFor="contact-name">Name</label>
					<input id="contact-name" name="name" type="text" placeholder="Your name" autoComplete="name" required />
					<label htmlFor="contact-email">Email</label>
					<input id="contact-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
					<label htmlFor="contact-message">Message</label>
					<textarea id="contact-message" name="message" placeholder="Tell me about your idea" rows="5" required />
					<button className="hero-button" type="submit">Send message</button>
					<p className="contact-fallback">
						Prefer your email app? <a href={`mailto:${contactEmail}`}>Send an email instead</a>
					</p>
				</form>
			</div>
		</section>
	);
}

export default Contact;
