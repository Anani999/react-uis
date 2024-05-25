import ContactUs from './components/ContactUs';
import Nav from './components/Nav';
import ContactForm from './components/ContactForm';
import './App.css'

const App = () => {
  return (
    <>
      <Nav />
      <div className='main'>
        <ContactUs/>
        <ContactForm/>
      </div>
    </>
  );
}

export default App;
