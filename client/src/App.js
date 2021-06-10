import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import Login from "./Pages/Login/Login";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={HomePage} exact />
            <Route path="/entries/:entryId" component={HomePage}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
