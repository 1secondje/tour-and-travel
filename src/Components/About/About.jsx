import './About.scss'

const About = ({about}) => {
return (
	<section className="about">
		<div className="about__left" data-aos='fade-right'><img src={require(`../../Assets/${about.img}`)} alt="" /></div>
		<div className="about__right" data-aos='fade-left'>
			<div className="about__right-title">{about.title}</div>
			<div className="about__right-text">{about.text}</div>
			<a className="about__right-button button">Learn more</a>
		</div>
	</section>
)
}

export default About