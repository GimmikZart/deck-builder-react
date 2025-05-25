// App.jsx
import './App.css';
import CardsList   from './pages/CardsList.jsx';
import Collection  from './pages/Collection.jsx';
import Navbar      from './components/Navbar.jsx';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<CardsList />} />
          <Route path="/collection" element={<Collection />} />
          {/* <Route path="/decks" element={<h1>Decks</h1>} /> */}
        </Routes>
      </main>
      <Navbar />
    </div>
  );
}

export default App;
