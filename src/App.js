import './App.css';
import {Switch,Route} from 'react-router-dom'
import Home from './pages/Home';
import Starred from './pages/Starred'
import Show from './pages/Show';

function App() {
  return (
    <div className="App">
      
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/starred" component={Starred}/>
      <Route exact path="/show/:id" component={Show}/>
      <Route path="*">Error Occured</Route>

    </Switch>
    </div>
  );
}

export default App;
