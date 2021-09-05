import { BrowserRouter, Route, Link } from "react-router-dom";
import SideBar from './components/SideBar/SideBar';

import ShoppingForCats from "./components/ShoppingForCats/ShoppingForCats"

import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter  > 
        <SideBar />

        <Route>
          <Link to="/catfax" component={ShoppingForCats} />
          <Link to="/cattxt" component={ShoppingForCats} />
        </Route>

      </BrowserRouter>

    </div>
  );
}

export default App;
