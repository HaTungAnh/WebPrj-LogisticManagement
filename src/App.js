import './App.css';
import {Header, About, Feature, Partner, Contact, Navbar, Footer} from './user'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <Feature/>
        <About/>
        <Contact/>
        <Partner/>
        <Footer/>
    </div>
  );
}

export default App;
