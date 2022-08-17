/* eslint-disable no-unused-vars */
import React, {useState}from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Louding from "./components/Louding";
import Nav from "./components/Nav";
import ALLNotes from "./components/AllNotes";
import Footer from "./components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './styles/style.css'
const Home = React.lazy(()=>import("./components/Home"))
function App() {

  return (
    <div className="App" >
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route  path="/" element={
          <React.Suspense fallback={<Louding/>}>
                <Home/>
          </React.Suspense>}
          >
          </Route>
          <Route  path="/ALLNotes" element={<ALLNotes/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
