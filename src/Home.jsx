
import { useState, Fragment } from "react";
import Categories from "./components/Cart/Categories";
import Header from "./components/Layout/Header"
import Cart from './components/Cart/Cart'
import CheckOut from "./components/Cart/CheckOut";



function Home() {

  const [cartIsShown, setCartIsShown] = useState(false);
  const [categoriesIsShown, setCategoriesIsShown] = useState(false);
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

      <Header
        onShowCart={showCartHandler}
        onShowCategories={showCategoriesHandler}


      />




    </Fragment>
  )
}

export default Home
