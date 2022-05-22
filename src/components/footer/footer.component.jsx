import './footer.styles.scss'

const Footer = () => {
	return (
		<div className="footer-container">
			<p className="copy-rights">Developed by <a href="mailto:nidaljaafar.nj@gmail.com">Nidal Jaafar</a></p>
      <div className="social-media-container">
        <a href="https://twitter.com" className="twitter-link">twitter</a>
        <a href="https://instagram.com" className="insta-link">instagram</a>
        <a href="https://facebook.com" className="fb-link">facebook</a>
      </div>
		</div>
	)
}

export default Footer;