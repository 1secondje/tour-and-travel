const FooterList = ({list}) => {
	return (
		<div className="footer__list">
		{
			list.map(el => {
				return (
					<a href="" className="footer__list-item">{el.name}</a>
				)
			})
		}
	</div>
	)
}

export default FooterList