import logo from './logo.svg';
import './App.css';
import CreateUser from './Components/ADMIN/AdminCreateUser/CreateUser';
import Create from './Components/Scientist/Create/Create';
import Update from './Components/Scientist/Update/Update';
import CreateAdmin from './Components/ADMIN/AdminCreate/CreateAdmin';
import ResponsiveAppBar from "./Components/ADMIN/AdminCreate/Nav";


function App() {
  return (
    <><ResponsiveAppBar></ResponsiveAppBar><div className="App">
      <CreateAdmin></CreateAdmin>
    </div></>
  );
}

export default App;

