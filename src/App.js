import "./App.css";
import Reviews from "./components/Reviews.jsx";
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <main className="App">
      <Header />
      <Reviews />
      {/* <Routes>
      <Route path='/' element={<Reviews />} />
      </Routes> */}
    </main>
  );
}

export default App;
