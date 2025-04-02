import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ReviewList from "./pages/ReviewList";
import ReviewDetail from "./pages/ReviewDetail";
import GameDetail from "./pages/GameDetail";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<ReviewList />} />
          <Route path="/review/:id" element={<ReviewDetail />} />
          <Route path="/game/:id" element={<GameDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;