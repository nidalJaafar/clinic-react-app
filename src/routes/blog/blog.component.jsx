import BlogThumbnail from '../../components/blog-thumbnail/blog-thumbnail.component'
import './blog.styles.scss'
const Blog = () => {
	return (
		<div className="blog-container">
			<h1 className="blog-title">Blog</h1>
			<BlogThumbnail/>
			<BlogThumbnail/>
			<BlogThumbnail/>
    </div>
	)
}

export default Blog
