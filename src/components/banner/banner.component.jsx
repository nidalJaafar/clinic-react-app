import {Link} from "react-router-dom";
import './banner.styles.scss'

const Banner = () => {
	return (
		<div className="container">
			<div className="content">
				<h2 className="title">Title goes here</h2>
				<p className="details">bla bla bla bla bla bla</p>
				<p className="details">bla bla bla bla bla bla bla bla</p>
				<p className="details">bla bla bla</p>
				<Link to="/blog" className="read-more">read more</Link>
			</div>
		</div>
	)
}

export default Banner;