import React from "react"
import Home from "../pages/home"
import "../index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "../pages/about"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
