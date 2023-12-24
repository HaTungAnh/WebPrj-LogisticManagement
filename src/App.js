import logo from './logo.svg';
import './App.css';
import {Header, About, Features, Company, Contact, Navbar} from './user'
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <About/>
        <Features/>
        <Company/>
        <Contact/>
    </div>
  );
}

export default App;
