import logo from './logo.svg';
import './App.css';
import {Header, About, Features, Feedback, Contact, Navbar} from './user'
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path={"/"} element={<Header/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/features"} element={<Features/>}/>
            <Route path={"/feedback"} element={<Feedback/>}/>
            <Route path={"/contact"} element={<Contact/>}/>
        </Routes>
    </div>
  );
}

export default App;
