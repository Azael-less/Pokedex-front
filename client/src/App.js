import './App.css';
import { Route, Switch } from "react-router-dom";
import { Landingpage, Detail, Home } from './view';
import  Form  from "./view/Form/Form.jsx"
import About from "./view/About/About.jsx"

 // useLocation
function App() {
  // const location = useLocation()
  return (
    <div className="App">
      {/* {location.pathname !== "/" && (
        <Nav />
      )} */}
      <Switch>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/create" component={Form} />
      <Route path="/detail/:id" component={Detail} />
      <Route path="/about" component={About}/>
      <Route path="/" component={Landingpage} />
      </Switch>

    </div>
  );
}

export default App;
