import './about.styles.scss'
import Psychologis from '../../assets/about-psychologist.jpeg'
import Navigation from '../../components/nav/nav.component'

const About = () => {
	return (
		<>
			<Navigation selected="about" />
			<div className="about-container">
				<img
					className="about-image"
					src={Psychologis}
					alt="psychologis"
				/>
				<h2 className="about-article-title">title goes here</h2>
				<p className="about-article-content">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Asperiores nihil expedita dolorem, pariatur voluptas sit
					quae unde architecto illo dolorum repellendus veniam,
					dolores ullam laborum maxime ut placeat? Repudiandae,
					dolores! Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Voluptas sunt temporibus nemo repudiandae praesentium
					beatae quis, molestiae fugiat quasi assumenda qui,
					necessitatibus animi! Autem reiciendis aspernatur voluptate
					aut pariatur et.
				</p>
			</div>
		</>
	)
}

export default About
