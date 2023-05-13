import './Stories.scss'
import StorCard from './StorCard'

const Stories = ({stories}) => {
	return (
		<section className='stories'>
			<div className="stories__block">
				<div className="stories__title">{stories.title}</div>
				<a href="" className="stories__link">View all</a>
				</div>
				<div className="stories__cards">
					<StorCard card={stories.cards}/>
				</div>
				
		</section>
	)
}

export default Stories