import './App.css'
import CardsList from './pages/CardsList.jsx'
import Collection from './pages/Collection.jsx'
import Navbar from './components/Navbar.jsx'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <Routes>
        <Route path="/" element={<CardsList />} />
        <Route path="/collection" element={<Collection />} />
        {/* <Route path="/decks" element={<h1>Decks</h1>} /> */}
      </Routes>
      <Navbar />
    </main>
  )
}

export default App
