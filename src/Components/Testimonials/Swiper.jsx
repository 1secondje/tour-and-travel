import { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

export default ({card}) => {
return (	
	<Swiper
	modules={[Navigation]}
	spaceBetween={50}
	slidesPerView={1}
	navigation
	onSwiper={(swiper) => console.log(swiper)}
	onSlideChange={() => console.log('slide change')}
>
		{card.map(el => {
			return (
					<SwiperSlide>
						<div className="swiper">
		<div className="swiper__left">
			<div className="swiper__left-text">{el.text}</div>
			<div className="swiper__left-name">{el.name}</div>
			<div className="swiper__left-company">{el.company}</div>
		</div>
		<div className="swiper__right">
			<div className="swiper__right-img"><img src={require(`../../Assets/${el.img}`)} alt="" /></div>
			</div>
		</div>
	</SwiperSlide>
			)
		})}
		<div className="navigation__block">
			<div className="swiper__next-button"></div>
			<div className="swiper__prev-button"></div>
		</div>


	
	...
</Swiper>
)
}
