import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import AmountDashboard from './dashboard-types/AmountDashboard/AmountDashboard';
import DailyDashboard from './dashboard-types/DailyDashboard/DailyDashboard';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/daily" component={DailyDashboard} />
        <Route path="/amount" component={AmountDashboard} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
