const HeaderNav = ({nav}) => {
	return (
		<nav className="nav">
				{
						nav.map(item => {
								return (
												<a href={item.link} className="nav__item">{item.name} </a>
								)
						})
				}
						<a href="#" className="nav__button login">Login</a>
						<a href="#" className="nav__button register">Register</a>
		</nav>
)
}

export default HeaderNav