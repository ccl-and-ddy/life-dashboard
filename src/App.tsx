import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
