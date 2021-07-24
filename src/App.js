import Home from "./Home";
import Navbar from "./Navbar";
import Create from "./Create.js";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BlogDetails from "./BlogDetails";
import _404 from "./404";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blog/:id">
              <BlogDetails />
            </Route>
            <Route path="*" >
              <_404 />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;