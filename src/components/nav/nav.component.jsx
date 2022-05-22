import './nav.styles.scss'
import Logo from '../../assets/logo.png'
import {Outlet} from "react-router-dom";
import {Link} from "react-router-dom";

const Navigation = () => {
  return (
    <>
		<div className="nav-container">
			<img src={Logo} alt="Jana's Clinic" className="nav-image" />
			<div className="links-container">
				<Link to="/" className="nav-link">
					Home
				</Link>
				<Link to="/about" className="nav-link">
					About
				</Link>
				<Link to="/blog" className="nav-link">
					Blog
				</Link>
				<Link to="/contact" className="nav-link">
					Contact
				</Link>
			</div>
    </div>
    </>
	)
}

export default Navigation
