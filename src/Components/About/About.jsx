import './About.scss'

const About = ({about}) => {
return (
	<section className="about">
		<div className="about__left"><img src={require(`../../Assets/${about.img}`)} alt="" /></div>
		<div className="about__right">
			<div className="about__right-title">{about.title}</div>
			<div className="about__right-text">{about.text}</div>
			<div className="about__right-button">Learn more</div>
		</div>
	</section>
)
}

export default About