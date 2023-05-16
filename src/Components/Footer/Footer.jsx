import './Footer.scss'
import FooterList from './FooterList'
import FooterSocial from './FooterSocial'

const Footer = ({footer}) => {
	return (
		<footer className="footer">
			<div className="footer__container">
			<div className="footer__left">
				<div className="footer__left-logo"><img src={require(`../../Assets/${footer.logo}`)} alt="" /></div>
				<div className="footer__left-text">{footer.text}</div>
				<div className="footer__left-text">{footer.year}</div>
			</div>
			<div className="footer__right">
				<div className="footer__right-column">
					<div className="footer__right-title">Destinations</div>
					<FooterList list={footer.destinations} />
				</div>
					<div className="footer__right-column">
					<div className="footer__right-title">Shop</div>
						<FooterList list={footer.shop} />
						</div>
					<div className="footer__right-column">
					<div className="footer__right-title">Interests</div>
						<FooterList list={footer.interests} />
						</div>
				</div>
			</div>
			<div className="footer__line"></div>
			<div className="footer__social">
				<FooterSocial social={footer.social} />
			</div>
		</footer>
	)
}

export default Footer