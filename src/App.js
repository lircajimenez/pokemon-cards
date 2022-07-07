import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./style/GlobalStyles";
import Home from "./components/Home";
import Cards from "./components/Cards";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </Router>
  );
};

export default App;
