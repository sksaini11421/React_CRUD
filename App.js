import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Shashank from './components/Shashank'
import AllUsers from './components/AllUsers';
import AddUsers from './components/AddUsers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
      <h1>Shashank Saini</h1>
      <BrowserRouter>
      
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Shashank}/>
          <Route  path="/all" component={AllUsers}/>
          <Route path="/add" component={AddUsers}/>
          <Route exact path="/edit/:id" component={EditUser} />
          <Route component={NotFound}/>
          

         </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
