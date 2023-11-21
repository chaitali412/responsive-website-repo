import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { NavLink } from 'react-router-dom';
import Routing from './routing';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routing />
    </div>
  );
}

export default App;
