
import { useState, Fragment } from "react";
import Categories from "./components/Cart/Categories";
import Header from "./components/Layout/Header"
import Cart from './components/Cart/Cart'
import CheckOut from "./components/Cart/CheckOut";
import LaptopCatagories from "./components/Cart/LaptopCatagories";
import SmartphoneCatagories from "./components/Cart/SmartphoneCatagories";



function Home() {

  const [cartIsShown, setCartIsShown] = useState(false);
  const [categoriesIsShown, setCategoriesIsShown] = useState(false);
  const [laptopcategoriesIsShown, setLaptopCategoriesIsShown] = useState(false);
  const [phonecategoriesIsShown, setPhonecategoriesIsShown] = useState(false);
  const [checkOutsIsShown, setCheckOutsIsShown] = useState(false);


  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };


  const showCategoriesHandler = () => {
    setCategoriesIsShown(true);
  };

  const hideCategoriesHandler = () => {
    setCategoriesIsShown(false);
  };

  const showPhonecategoriesHandler = () => {
    setPhonecategoriesIsShown(true);
  };

  const hidePhonecategoriesHandler = () => {
    setPhonecategoriesIsShown(false);
  };

  const showLaptopCatagoriesHandler = () => {
    setLaptopCategoriesIsShown(true);
  };

  const hideLaptopCatagoriesHandler = () => {
    setLaptopCategoriesIsShown(false);
  };

  const showCheckOutHandler = () => {
    setCheckOutsIsShown(true);
  };

  const hideCheckOutHandlerHandler = () => {
    setCheckOutsIsShown(false);
  };


  return (
    <Fragment>
      {cartIsShown && <Cart
        onClose = {hideCartHandler}
        onShowCheckOut={showCheckOutHandler}
        
      />}
      {categoriesIsShown && <Categories
        onCategoriesClose={hideCategoriesHandler}
      />}

      {checkOutsIsShown && <CheckOut 
        onCloseCheckOut = {hideCheckOutHandlerHandler}
      />}

      {laptopcategoriesIsShown && <LaptopCatagories 
        onCloseLaptop = {hideLaptopCatagoriesHandler}
      />}

      {phonecategoriesIsShown && <SmartphoneCatagories 
        onClosePhone = {hidePhonecategoriesHandler}
      />}

      <Header
        onShowCart={showCartHandler}
        onShowCategories={showCategoriesHandler}
        onShowLaptopCatagories ={showLaptopCatagoriesHandler}
        onShowPhoneCatagories ={showPhonecategoriesHandler}


      />




    </Fragment>
  )
}

export default Home
