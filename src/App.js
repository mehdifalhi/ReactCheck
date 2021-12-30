//import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Users from './components/users/Users';
//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

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
