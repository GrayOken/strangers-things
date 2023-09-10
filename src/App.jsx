import ListView from "./components/ListView"
import { Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import "./App.css"
import PostDetails from "./routes/PostDetails"

export default function App() {
  return (
    <>
      {/* <Nav /> */}

      <Routes>
        <Route index element={<Home />} />
        <Route path="/posts/:postId" element={<PostDetails />} />
      </Routes>
    </>
  )
}