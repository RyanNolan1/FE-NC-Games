import "./App.css";
import Reviews from "./components/Reviews.jsx";
import Header from "./components/Header.jsx";
// import Nav from "./components/Nav.jsx";
import { Routes, Route } from "react-router-dom";
import SingleReview from './components/SingleReview.jsx'

function App() {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
      </Routes>
    </main>
  );
}

export default App;
