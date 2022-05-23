import {Route, Routes} from 'react-router-dom';
import Footer from './components/footer/footer.component';
import About from "./routes/about/about.component";
import Blog from "./routes/blog/blog.component";
import Contact from './routes/contact/contact.component';
import Home from './routes/home/home.components';
import SingleBlog from './routes/single-blog/single-blog.component';

const App = () => {
	return (
		<>
			<Routes>
				<Route index element={<Home />} />
        <Route path="/blog">
          <Route index element={<Blog />} />
					<Route path="/blog:id" element={<SingleBlog />} />
				</Route>
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
