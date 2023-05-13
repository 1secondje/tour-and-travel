import './Testimonials.scss';
import Swiper from './Swiper'

const Testimonials = ({testimonials}) => {
	return (
		<section className='testimonials'>
			<div className="testimonials__title">{testimonials.title}</div>
			<Swiper card={testimonials.cards} />
		</section>
	)
}

export default Testimonials