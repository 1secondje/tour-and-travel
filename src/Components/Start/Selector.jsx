const Selector = ({selector}) => {
	return (
		<div className="start__left-selectors">
			<div className="start__left-selector">{selector.location.name} <img src={require(`../../Assets/${selector.arrow}`)} alt="" /></div> 
			<div className="start__left-selector">{selector.activity.name} <img src={require(`../../Assets/${selector.arrow}`)} alt="" /></div> 
			<div className="start__left-selector">{selector.grade.name} <img src={require(`../../Assets/${selector.arrow}`)} alt="" /></div> 
			<div className="start__left-selector">Date <img src={require(`../../Assets/${selector.arrow}`)} alt="" /></div> 
			</div>
	)
}

export default Selector