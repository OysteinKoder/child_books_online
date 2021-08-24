import './App.css';
import NavBar from './components/navBar';
import Animals from "./components/animals"
import Colors from "./components/colors"
import Items from './components/items';
import Foods from "./components/foods"
import BuyBtn from './components/buybtn';
import NotesRoadmap from './components/notesRoadmap';
import BoxNumber from './components/boxNumber';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"



function App() {
  return (
    <Router basename="/child_books_online">
      <div>
        <NavBar></NavBar>
      </div>
      <Switch>
        <Route path="/Colors" component={Colors}></Route>
        <Route path="/Animals" component={Animals}></Route>
        <Route path="/Items" component={Items}></Route>
        <Route path="/Foods" component={Foods}></Route>
      <NotesRoadmap></NotesRoadmap>
      </Switch>
      <BuyBtn text="Patch Notes/Roadmap" buyText ="Click"></BuyBtn>
    </Router>
  );
}

export default App;
