import Selector from './Selector';
import './Start.scss';

const Start = ({start}) => {
	return (
			<section className="start">
				<div className="start__left">
					<div className="start__left-title">{start.title}</div>
					<div className="start__left-text">Holiday finder</div>
					<div className="start__left-line"></div>
					<Selector selector={start.selectors} />
					<div className="start__left-button">Explore</div>
				</div>
				<div className="start__right">
					<img src={require(`../../Assets/${start.img}`)} alt="" />
				</div>
			</section>
	)
}

export default Start