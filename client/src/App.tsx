
import './App.css';

import Index from "./pages";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Users from "./pages/users"
import UserDetails from "./pages/userdetails";




function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element = {<Index/>}/>
            <Route path="/users" element = {<Users/>}/>
            <Route path="/user-details" element={<UserDetails />} />
          
          </Routes>
        </div>
      </div>
    </Router>

  
  );
}






export default App;
