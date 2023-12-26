import logo from './logo.svg';
import './App.css';
import {Header, About, Feature, Partner, Connect, Contact, Navbar} from './user'
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <Feature/>
        <Partner/>
    </div>
  );
}

export default App;
