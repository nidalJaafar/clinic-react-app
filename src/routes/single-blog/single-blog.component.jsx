import '../about/about.styles.scss'
import Psychologist from '../../assets/psychologist.jpg'
import Navigation from "../../components/nav/nav.component";
const SingleBlog = () => {
  return (
    <>
      <Navigation selected="blog" />
		<div className="single-blog-container">
			<img src={Psychologist} alt="psychologist" className="single-blog-image" />
			<h2 className="single-blog-title">Title goes here</h2>
			<p className="single-blog-content">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
				illo molestiae, provident ad ut harum beatae adipisci possimus
				consequuntur ullam odit sed voluptatum sint veniam. Vel minima
				numquam fuga provident?
			</p>
		</div>
    </>
	)
}

export default SingleBlog
