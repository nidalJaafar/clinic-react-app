import Navigation from '../../components/nav/nav.component'
import './contact.styles.scss'

const Contact = () => {
	return (
		<>
			<Navigation selected="contact" />
			<div className="contact-container">
				<form className="contact-form">
					<input
						required
						type="text"
						placeholder="name"
						className="form-field"
					/>
					<input
						required
						type="email"
						placeholder="email"
						className="form-field"
					/>
					<textarea
						required
						placeholder="message"
						className="form-field form-message"
					/>
					<input type="submit" value="send" className="form-send" />
				</form>
			</div>
		</>
	)
}

export default Contact
