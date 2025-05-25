import { createBrowserRouter } from "react-router"
import Layout     from "./views/Layout"
import Home       from "./views/Home"
import Collection from "./views/Collection"
import Decks      from "./views/Decks"
import cards      from "./data/cards.json"  // Vite importa JSON come modulo

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        loader: () => cards,    // carica il JSON prima del render
        element: <Home />
      },
      { path: "collection", element: <Collection /> },
      { path: "decks",      element: <Decks /> },
    ],
  },
])

export default router
