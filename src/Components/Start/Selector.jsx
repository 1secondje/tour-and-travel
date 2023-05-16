const Selector = ({selector}) => {
	return (
		<form className="start__left-selectors" data-aos="fade-right">
			<select className="start__left-selector">
			<option value="" selected disabled hidden>Country</option>
				{selector.location.countries.map(el => {
					return (
						<option value={el.name}>{el.name}</option>
					)
				})}
			</select> 

			<select className="start__left-selector">
			<option value="" selected disabled hidden>Activity</option>
				{selector.activity.activities.map(el => {
					return (
						<option value={el.name}>{el.name}</option>
					)
				})}
			</select> 

			<select placeholder="Grade" className="start__left-selector">
			<option value="" selected disabled hidden>Grade</option>
				{selector.grade.grades.map(el => {
					return (
						<option value={el.name}>{el.name}</option>
					)
				})}
			</select>
			
			<select placeholder="Date" className="start__left-selector">
			<option value="" selected disabled hidden>Date</option>
			{selector.date.dates.map(el => {
					return (
						<option value={el.name}>{el.name}</option>
					)
				})}
			</select> 
			<button className="start__left-button">Explore</button>
			</form>
	)
}

export default Selector