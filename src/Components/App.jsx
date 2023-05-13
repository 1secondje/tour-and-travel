import './App.css';
import Header from './Header/Header'
import Start from './Start/Start'
import About from './About/About'
import Destinations from './Destinations/Destinations';
import Guide from './Guide/Guide';
import Testimonials from './Testimonials/Testimonials';
import Stories from './Stories/Stories'
import Footer from './Footer/Footer'

function App({data}) {
  return (
    <div className="App">
      <Header header={data.header} />
      <Start start={data.start} />
      <About about={data.about} />
      <Destinations destinations={data.destinations} />
      <Guide guide={data.guide} />
      <Testimonials testimonials={data.testimonials} />
      <Stories stories={data.stories}/>
      <Footer footer={data.footer} />
    </div>
  );
}

export default App;
