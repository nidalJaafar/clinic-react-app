import { Link } from 'react-router-dom'
import Psychologist from '../../assets/psychologist.jpg'
import './blog-thumbnail.styles.scss'


const BlogThumbnail = () => {
	return (
		<div className="blog-thumbnail-container">
			<img className="blog-thumbnail-image" src={Psychologist} alt="psychologist" />
			<div className="blog-thumbnail-content">
				<h2 className="blog-thumbnail-title">Title goes here</h2>
				<p className="blog-thumbnail-description">
					bla bla bla bla bla bla bla bla
				</p>
				<Link className="blog-thumbnail-link" to="/blog">Read this</Link>
			</div>
		</div>
	)
}

export default BlogThumbnail
