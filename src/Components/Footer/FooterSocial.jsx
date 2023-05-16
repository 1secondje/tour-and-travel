const FooterSocial =({social}) => {
	return (
		social.map(el => {
			return (
						<div className="footer__social-item">
								<a href="#"><img src={require(`../../Assets/${el.img}`)} alt="" /></a>
						</div>
			)
		})
	)
}

export default FooterSocial