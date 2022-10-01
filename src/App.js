import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LandingPage, CreateEvent, Event } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/create" element={<CreateEvent/>} />
          <Route path="/event" element={<Event/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
