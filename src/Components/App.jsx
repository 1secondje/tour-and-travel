import './App.css';
import Header from './Header/Header'
import Start from './Start/Start'
import About from './About/About'
import Destinations from './Destinations/Destinations';
import Guide from './Guide/Guide';
import Testimonials from './Testimonials/Testimonials';
import Stories from './Stories/Stories'
import Footer from './Footer/Footer'
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App({data}) {
  useEffect(() => {
    AOS.init({duration:  2000});
  }, []);
  return (
    <div className="App">
      <Header header={data.header} />
      <Start start={data.start} />
      <About about={data.about} />
      <Destinations destinations={data.destinations} />
      <Guide guide={data.guide} />
      <Testimonials testimonials={data.testimonials} />
      <Stories stories={data.stories} />
      <Footer footer={data.footer} />
    </div>
  );
}

export default App;
