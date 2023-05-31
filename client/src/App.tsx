
import './App.css';

import Index from "./pages";
import { BrowserRouter as Router, Routes, Route, useLocation  } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Users from "./pages/users"
import UserDetails from "./pages/userdetails";

const AppContainer: React.FC = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/';

  return (
    <div className="App">
      {showNavbar && <Navbar />}
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user-details" element={<UserDetails />} />
        </Routes>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer />
    </Router>
  );
};

export default App;











