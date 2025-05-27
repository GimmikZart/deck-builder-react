import AllCards   from './pages/AllCards.jsx';
import Collection  from './pages/Collection.jsx';
import Navbar      from './components/Navbar.jsx';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col h-dvh">
      <main className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<AllCards />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </main>
      <Navbar />
    </div>
  );
}

export default App;
