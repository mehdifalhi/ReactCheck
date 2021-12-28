//import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Users from './components/users/Users';

function App() {
  return (
    <div className="App">

      <Navbar />
      <div className='container mt-3'>
         < Users />
      </div>
      
    </div>
  );
}

export default App;
