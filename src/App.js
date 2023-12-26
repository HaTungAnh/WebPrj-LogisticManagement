import logo from './logo.svg';
import './App.css';
import {Header, About, Features, Partner, Connect, Contact, Navbar} from './user'
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <div>
            <div className={"white-gradient"}/>
            <Navbar/>
            <Header/>
        </div>
        <Partner/>
        {/*<Connect/>*/}
    </div>
  );
}

export default App;
