import logo from './logo.svg';
import './App.css';
import CreateUser from './Components/ADMIN/AdminCreateUser/CreateUser';
import Create from './Components/Scientist/Create/Create';
import Update from './Components/Scientist/Update/Update';
import CreateAdmin from './Components/ADMIN/AdminCreate/CreateAdmin';
import ResponsiveAppBar from "./Components/ADMIN/AdminCreate/Nav";
import AdminDelete from './Components/ADMIN/AdminDelete/AdminDelete';
import UpdateAdmin from './Components/ADMIN/AdminUpdate/UpdateAdmin';

function App() {
  return (
    <><ResponsiveAppBar></ResponsiveAppBar><div className="App">
       <AdminDelete></AdminDelete>

    </div></>
  );
}

export default App;

