import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LandingPage, CreateEvent } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/create" element={<CreateEvent/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
