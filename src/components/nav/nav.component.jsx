import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './nav.styles.scss'

let listener

const Navigation = ({ selected }) => {
	listener = () => {
		if (window.innerWidth > 479) setRender(true)
		else setRender(false)
	}
	const [render, setRender] = useState(window.innerWidth > 479)
	return (
		<div className="nav-container">
			<img src={Logo} alt="logo" className="nav-image" />

			<button
				className="mobile-menu"
				onClick={() => setRender(!render)}
			></button>
			{render ? (
				<div className="links-container">
					<Link
						to="/"
						className={
							selected === 'home'
								? 'nav-link selected'
								: 'nav-link'
						}
					>
						Home
					</Link>
					<Link
						to="/about"
						className={
							selected === 'about'
								? 'nav-link selected'
								: 'nav-link'
						}
					>
						About
					</Link>
					<Link
						to="/blog"
						className={
							selected === 'blog'
								? 'nav-link selected'
								: 'nav-link'
						}
					>
						Blog
					</Link>
					<Link
						to="/contact"
						className={
							selected === 'contact'
								? 'nav-link selected'
								: 'nav-link'
						}
					>
						Contact
					</Link>
				</div>
			) : (
				<div className="links-container"></div>
			)}
		</div>
	)
}

window.addEventListener('resize', () => listener())
export default Navigation
