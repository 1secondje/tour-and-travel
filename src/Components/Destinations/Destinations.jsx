import './Destinations.scss'
import DestCard from './DestCard'

const Destinations = ({destinations}) => {
	return (
		<section className="destinations">
			<div className="destinations__title">{destinations.title}</div>
			<DestCard card={destinations.cards} />
		</section>
	)
}

export default Destinations