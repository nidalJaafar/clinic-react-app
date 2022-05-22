import './about.styles.scss'
import Psychologis from '../../assets/about-psychologist.jpeg'

const About = () => {
	return (
		<div className="about-container">
			<h1 className="about-title">About</h1>
			<img className="about-image" src={Psychologis} alt="psychologis" />
			<h2 className="about-article-title">title goes here</h2>
			<p className="about-article-content">
				bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
				bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
				bla bla bla bla bla bla bla bla bla bla bla bla
			</p>
		</div>
	)
}

export default About
