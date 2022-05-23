import {Link} from "react-router-dom";
import Logo from '../../assets/logo.png';
import './nav.styles.scss';

const displayMenu = () => {
  const menu = document.querySelector('.links-container');
  menu.classList.toggle('show');
}

const Navigation = ({selected}) => {
  return (
		<>
			<div className="nav-container">
				<img src={Logo} alt="Jana's Clinic" className="nav-image" />
				<button className="mobile-menu" onClick={displayMenu}></button>
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
			</div>
		</>
  )
}

export default Navigation
