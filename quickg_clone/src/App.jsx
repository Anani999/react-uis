import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home';
import Container2 from './components/Container2';
import Container3 from './components/Container3';
import Container4 from './components/Container4';
import Container5 from './components/Container5';
import Footer from './components/Footer';
const App = () => {
  return(
    <>
      <div className='init-container'>
        <Navbar/>
        <Home/>
      </div>
      <Container2/>
      <Container3/>
      <br/>
      <br/>
      <Container4/>
      <br />
      <Container5/>
      <Footer/>
    </>
  );
}


export default App;