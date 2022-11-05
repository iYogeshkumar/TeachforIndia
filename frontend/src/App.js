
import { ListItem } from '@chakra-ui/react';
import './App.css';
import Navbar from './Components/Navbar';
import AdminLogin from './Pages/AdminLogin';
import ListOfCandidates from './Pages/ListOfCandidates';
import Register from './Pages/Register';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Register/> 
      {/* <AdminLogin/> */}
      {/* <ListOfCandidates/> */}
    </div>
  );
}

export default App;
