import './App.css';
import { Routes,Route } from 'react-router';
import CreateAdmin from './Components/ADMIN/AdminCreate/CreateAdmin';
import Create from './Components/Scientist/Create/Create';
//import Update from './Components/Scientist/Update/Update';
import LoginPage from './Components/LOGIN/index'
import CreateUser from './Components/USER/CreateUser'

const App = () => (
  <Routes>
    <Route exact path='/login' element={<LoginPage />} />
    <Route exact path='/user/:username' element={<CreateUser />} />
    <Route exact path='/admin/:admin' element={<CreateAdmin />} />
    <Route exact path='/scientist/:scientist' element={<Create />} />
    <Route exact path='/analyst/:analyst' element={null} />
  </Routes>
)

export default App;
