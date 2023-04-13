import React from "react"
import Home from "../pages/home"
import "../index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "../pages/about"
import Contact from "../pages/contact"
import Login from "../pages/login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
