const StorCard = ({card}) => {
return (
card.map(el => {
	return (
		<div className="stories__card">
			<div className="stories__card-img"><img src={require(`../../Assets/${el.img}`)} alt="" /></div>
			<div className="stories__card-title">{el.name}</div>
			<div className="stories__card-text">{el.text}</div>
			<a href="" className="stories__card-link">Read more</a>
		</div>
	)
})
)
}

export default StorCard