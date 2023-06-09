import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Conversation from "./pages/Conversation";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conversation" element={<Conversation />} />
      </Routes>
    </Router>
  );
}

export default App;
