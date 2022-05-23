import BlogThumbnail from '../../components/blog-thumbnail/blog-thumbnail.component'
import Navigation from '../../components/nav/nav.component'
import './blog.styles.scss'
const Blog = () => {
	return (
		<>
			<Navigation selected="blog" />
			<div className="blog-container">
				<BlogThumbnail />
				<BlogThumbnail />
				<BlogThumbnail />
			</div>
		</>
	)
}

export default Blog
