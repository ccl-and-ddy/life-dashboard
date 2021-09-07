import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import DashboardPage from './Pages/Dashboard/DashboardPage';
import Profile from './Pages/Profile/Profile';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header></Header>
        <Switch>
          <Route path="/dashboard/:id" component={DashboardPage} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
