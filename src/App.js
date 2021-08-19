import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/nav-bar'
import Routes from './routes';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
