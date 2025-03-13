import "./App.css";
import NavBar from "./components/navBar";
import Animals from "./pages/animals";
import Colors from "./pages/colors";
import Items from "./pages/items";
import Foods from "./pages/foods";
import BuyBtn from "./components/buybtn";
import NotesRoadmap from "./components/notesRoadmap";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

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
      <BuyBtn text="Patch Notes/Roadmap" buyText="Click"></BuyBtn>
    </Router>
  );
}

export default App;
