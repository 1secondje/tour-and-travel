import './Header.scss'
import HeaderNav from './HeaderNav'

const Header = ({header}) => {
return (
	<header className="header">
		<a href='#' className="header__logo"><img src={require(`../../Assets/${header.logo}`)} alt="logo" /></a>
			<HeaderNav nav={header.nav}/>
	</header>
)
}

export default Header