import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './Components/Login/Login';
import Pagenotfound from './Components/pagenotfound/Pagenotfound'

import Dashboard from './Components/Dashboard/Dashboard';
import Form2 from './Components/Form/Form';
import Table from './Components/Table/Table';

function App() {
  return (
    <div className="App">
    <Router>
            <Routes>
              <Route path='/' element={ <Login/>}/>
              <Route path='*' element={ <Pagenotfound/>}/>
              <Route path='/dashboard' element={ <Dashboard/>}/>
              <Route path='/form' element={ <Form2/>}/>
              <Route path='/table' element={ <Table/>}/>
            </Routes>
    </Router>
    
    </div> 
  );
}

export default App;
