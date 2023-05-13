import './Guide.scss'

const Guide = ({guide}) => {
	return (
		<section className="guide">
			<div className="guide__left">
				<div className="guide__left-title">{guide.title}</div>
				<div className="guide__left-text">{guide.text}</div>
				<a href="#" className="guide__left-button">Download</a>
			</div>
			<div className='guide__right'>
				<img src={require(`../../Assets/${guide.img}`)} alt="" />
				</div>
		</section>
	)
}

export default Guide