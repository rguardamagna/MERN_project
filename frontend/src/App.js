import './App.css';
import {Routes, Route} from 'react-router-dom'

import Navigation from './components/Navegation'
import CreateUser from './components/CreateUser'
import UserList from './components/UserList'

function App() {
  return (
    <div>
      <Navigation/>
      <div className='container p-4'>
        <Routes>
          <Route path="/" element={<UserList/>} />
          <Route path="/CrearUsuario" element={<CreateUser/>} />
          <Route path="/edit/:id" element={<CreateUser/>} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
