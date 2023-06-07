// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import draft from './pages/draft';
import points from './pages/points';
import al from './pages/teamPages/al';
import ben from './pages/teamPages/ben';
import dj from './pages/teamPages/dj';
import goose from './pages/teamPages/goose';
import james from './pages/teamPages/james';
import joe from './pages/teamPages/joe';
import neptune from './pages/teamPages/neptune';
import patrick from './pages/teamPages/patrick';
import steids from './pages/teamPages/steids';
import tommy from './pages/teamPages/tommy';
import "../src/pages/teamPages/css/teamPages.css";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/home" Component={Home}></Route>
          <Route path="/draft" Component={draft}></Route>
          <Route path="/points" Component={points}></Route>
          <Route path="/tommy" Component={tommy}></Route>
          <Route path="/patrick" Component={patrick}></Route>
          <Route path="/james" Component={james}></Route>
          <Route path="/neptune" Component={neptune}></Route>
          <Route path="/dj" Component={dj}></Route>
          <Route path="/goose" Component={goose}></Route>
          <Route path="/al" Component={al}></Route>
          <Route path="/joe" Component={joe}></Route>
          <Route path="/steids" Component={steids}></Route>
          <Route path="/ben" Component={ben}></Route>
        </Routes>
      </div>
  );
}

export default App;
