import Header from './Components/Header';
import Home from './Components/Home';
import List from './Components/List';
import Contact from './Components/Contact';
import img1 from './Components/1.jpg';
import img2 from './Components/2.jpg';
import img3 from './Components/3.jpg';
import img4 from './Components/4.jpg';
import img5 from './Components/5.jpg';
import img6 from './Components/6.jpg';
import img7 from './Components/7.jpeg';
import img8 from './Components/8.jpeg';
import img9 from './Components/9.jpeg';
import img10 from './Components/10.jpg';
import img11 from './Components/11.jpeg';
import img12 from './Components/12.jpeg';
import img13 from './Components/13.jpeg';
import img14 from './Components/14.jpeg';
import AOS from 'aos';
function App() {
  AOS.init()
  return (
    <div className="App">
    <Header />
    <div class="row mt-5">
      <div class="col-lg-8" data-aos="fade-right" data-aos-duration="1000"><Home  id1="demo" id2="#demo" img1={img1} img2={img2} img3={img3}  caption="Trending"/></div>
      <div class="col-lg-4 gx-0 " data-aos="fade-left" data-aos-duration="1000"><Home id1="demo1" id2="#demo1" img1={img4} img2={img5} img3={img6}  caption="Suggested"/></div>
    </div>
    <div class="row m-3">
      <h1 class="text-white text-center">Movies</h1>
      <div class="col-lg-3 col-md-6 gx-0 gy-1"><List id="movies" img4={img7} /></div>
      <div class="col-lg-3 col-md-6  gx-0 gy-1"><List id="movies"  img4={img8}/></div>
      <div class="col-lg-3 col-md-6  gx-0 gy-1"><List id="movies"  img4={img9}/></div>
      <div class="col-lg-3 col-md-6 gx-0 gy-1"><List id="movies"  img4={img10}/></div>
      <a class="text-primary text-right" href="#">Explore more</a>
     </div>
    <div class="row m-3">
      <h1 class="text-white text-center">Webseries</h1>
      <div class="col-lg-3 col-md-6 gx-0 h-25"><List id="webseries" img4={img11}/></div>
      <div class="col-lg-3 col-md-6 gx-0"><List id="webseries" img4={img12}/></div>
      <div class="col-lg-3 col-md-6 gx-0"><List id="webseries" img4={img13}/></div>
      <div class="col-lg-3 col-md-6 gx-0"><List id="webseries" img4={img14}/></div>
      <p class="text-primary text-right" href="#">Explore more</p>
    </div>
    <div class="row m-5">
    <h1 class="text-white text-center"> Contact Us</h1>
      <div class="col-md-3"></div>
      <div class="col-md-6"><Contact/></div>
      <div class="col-md-3"></div>
    </div>
    </div>
  );
}
export default App;
