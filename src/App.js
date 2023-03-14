import React from "react";
import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
// import CategoryAndPage from "./components/CategoryAndPags";
import Carousal from "./components/Carousal";
import Cards from "./components/Cards";
import Products from "./products/Products";
import ProductListings from "./components/ProductListing";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Footer from "./components/Footer/Footer";
// import GetData from "./components/GetData";
// import Mydata from "./components/Mydata"

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Header />
              <Categories />
              <Cards />
              <Footer />
            </>
          }
        >
          <Route
            path="/products/:id"
            exact
            element={
              <>
                <Header />
                <Categories />
                {/* <CategoryAndPage /> */}
                <Products />
                <Footer />
              </>
            }
          />
          <Route path="/sellform" exact element={<Form />} />
        
        <Route
          path="/ProductListing/:category"
          exact
          element={
            <>
              <Header />
              <Categories/>
              {/* <CategoryAndPage /> */}
              <ProductListings />
              <Footer />
              
            </>
          }
        />
        </Route>
      </Routes>

      {/* <CategoryAndPage /> */}
      {/* <Carousal img="https://images.olx.com.pk/thumbnails/310378076-800x600.webp" />
      <Cards />

      <Footer /> */}
      {/* {Mydata.map((value)=>{return(
        <span className="container ">
        <GetData
          key={value.id}
          title={value.title}
          price={value.price}
        />
        </span>
      )})} */}
    </>
  );
}

export default App;
