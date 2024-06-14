import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main-container">
      <div className="content">
        <Header />
      </div>
      <Footer />
    </div>
  );
}

export default App;
