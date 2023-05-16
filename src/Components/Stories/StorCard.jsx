const StorCard = ({card}) => {
return (
		<div className="stories__card" data-aos='zoom-in'>
			<div className="stories__card-img"><img src={require(`../../Assets/${card.img}`)} alt="" /></div>
			<div className="stories__card-title">{card.name}</div>
			<div className="stories__card-text">{card.text}</div>
			<a href="" className="stories__card-link">Read more</a>
		</div>
)
}

export default StorCard