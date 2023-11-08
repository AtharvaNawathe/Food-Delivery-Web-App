import './App.css';
import Home from './components/screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js.map';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path ="/" element={<Home/>} />
          <Route exact path ="/login" element={<Login/>}/>
          <Route exact path ="/createuser" element={<Signup/>}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
