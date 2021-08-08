import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import DashboardPage from './Pages/Dashboard/DashboardPage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/dashboard/:id" component={DashboardPage} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
