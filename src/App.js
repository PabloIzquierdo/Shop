import './css/main.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Messages from './pages/Messages';
import Support from './pages/Support';
import Team from './pages/Team';
import Profile from './pages/Profile';



const App = () => {

  return (
    <>
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/reports" component={Reports}/>
        <Route path="/products" component={Products}/>
        <Route path="/messages" component={Messages}/>
        <Route path="/support" component={Support}/>
        <Route path="/profile" component={Profile}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
