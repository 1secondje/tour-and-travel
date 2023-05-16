import Selector from './Selector';
import './Start.scss';

const Start = ({start}) => {
	return (
			<section className="start">
				<div className="start__left">
					<div className="start__left-title" data-aos="fade-right">{start.title}</div>
					<div className="start__left-text" data-aos="fade-right">Holiday finder</div>
					<div className="start__left-line" data-aos="fade-right"></div>
					<Selector selector={start.selectors}/>
				</div>
				<div className="start__right" data-aos="fade-left">
					<img src={require(`../../Assets/${start.img}`)} alt="" />
				</div>
			</section>
	)
}

export default Start