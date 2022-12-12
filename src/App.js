import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import CategoryAndPage from "./components/CategoryAndPags";
import Carousal from "./components/Carousal";
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Header
              img="logoOne.png"
              className="logo1"
              list1=" MOTORS"
              list2=" PROPERTY"
            />
          }
        >
          {/* <Route
            index
            exact
            element={
              <Category />
            }
          /> */}
        </Route>
      </Routes>

      <Navbar
                img="logo2.png"
                className="logo2"
                placeholder1="Pakistan"
                placeholder2="Find Cars, Mobile Phones and more..."
              />
      <CategoryAndPage />
      <Carousal img="https://images.olx.com.pk/thumbnails/310378076-800x600.webp" />
      <Footer/>
    </>
    
  );
}

export default App;
