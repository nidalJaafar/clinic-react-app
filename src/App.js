import {Route, Routes} from 'react-router-dom';
import Footer from './components/footer/footer.component';
import Navigation from './components/nav/nav.component';
import About from "./routes/about/about.component";
import Blog from "./routes/blog/blog.component";
import Home from './routes/home/home.components';

const App = () => {
	return (
		<>
			<Navigation />
			<Routes>
				<Route index element={<Home />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/about" element={<About />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
