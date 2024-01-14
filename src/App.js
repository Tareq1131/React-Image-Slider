import logo from './logo.svg';
import './App.css';
import ImageSlider from './components/ImageSlider';
import ImgSlider1 from './components/slider1/ImgSlider1'
const images = [
  'https://placekitten.com/500/300',
  'https://placekitten.com/501/300',
  'https://placekitten.com/502/300',
  'https://placekitten.com/503/300',
];

function App() {
  return (
    <div className="App">
       <h1>Image Slider</h1>
      {/* <ImageSlider images={images} autoSlideInterval={5000} /> */}
      <ImgSlider1></ImgSlider1>
    </div>
  );
}

export default App;
