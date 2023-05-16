import './Stories.scss'
import StorCard from './StorCard'
import {useState} from "react";

function Stories({stories}) {
     const [visible, setVisible] = useState(4);
	

    function showMore() {
        setVisible(prev => prev +4);
    }
		
	return (
		<section className='stories'>
			<div className="stories__block" data-aos='fade-left'>
				<div className="stories__title">{stories.title}</div>
				<div href="" className="stories__link" onClick={showMore}>View all</div>
				</div>
				<div className="stories__cards">
					{stories.cards.slice(0, visible).map(card => {
						return(
							<StorCard card={card}/>
						)
					})}
					
				</div>
				
		</section>
	)
}

export default Stories