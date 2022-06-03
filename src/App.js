import './App.css';

//importing the components

import NavBar from './components/Navbar';
import FantsyLeague from './components/FantsyLeague';
import AddUser from './components/addUser';
import AllUsers from './components/AllUsers';

//url based routing----component will change as soon as the url change

import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
  
      <NavBar/>
      {/* // i want routing to be on these components */}
      <Routes>
        <Route path='/' element={<FantsyLeague/>}/>
        <Route path='/all' element={<AllUsers/>}/>
        <Route path='/add' element={<AddUser/>}/>
        
      </Routes>

      </BrowserRouter>

      
    </div>
  );
}

export default App;
