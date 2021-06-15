import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import SingleEntryPage from "./Pages/SingleEntryPage/SingleEntryPage";
import Login from "./Pages/Login/Login";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="entire-website__header">
        <Header />
      </header>
      <main className="entire-website__main">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={HomePage} exact />
          <Route path="/entries/:entryId" component={SingleEntryPage}/>
          <Redirect to="/" />
        </Switch>
      </main>
      {/* <footer className="entire-website__footer">
        <Footer />
      </footer> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
