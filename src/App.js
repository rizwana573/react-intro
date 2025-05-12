import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppBody from "./components/AppBody";
import { useState } from "react";
import prodData from "./utils/mockData";

const AppLayout = () => {
    //The final list of products to display after applying both filters.
  const [filteredProducts, setFilteredProducts] = useState(prodData);
  //	Stores the user's search input.
  const [searchText, setSearchText] = useState("");
  //Boolean flag to remember if "Top Rated Products" filter is active.
  const [isTopRatedFilter, setIsTopRatedFilter] = useState(false);

  //Make both search and filter top prods work together
  const applyFilters = (searchValue, topRatedFlag) => {
    let list = prodData;

    //If topRatedFlag is true, filters by rating > 4.
    if (topRatedFlag) {
        list = list.filter(product => product.rating > 4);
    }

    //	If search text exists, further filters by title/category match.
    if (searchValue.trim()) {
        list = list.filter(product =>
            product.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            product.category.toLowerCase().includes(searchValue.toLowerCase())
        );
    }

    //Final list is saved to filteredProducts.
    setFilteredProducts(list);
};

  //search functionality; whenever user types sthg #1,#2
  const handleSearch = (text) => {
    //#1 Updates the searchText.
        setSearchText(text);
    //#2 Applies filters based on the latest input and current top-rated flag.
        applyFilters(text, isTopRatedFilter);
  };

  // show top rated prods; when top rated prods button is clicked, #1, #2
  const showTopProducts = () => {
    //#1 Turns on the top-rated filter.
    setIsTopRatedFilter(true);
    // #2 Applies it along with whatever current search input is there (even if it's empty).x
    applyFilters(searchText, true);
  };

  return (
    <div id="appLayout">
      {/* handles search and passes handleSearch as a prop. */}
      <Header searchText={searchText} onSearch={handleSearch} />
      {/* <AppBody /> receives the filtered list (prodList) and a showTopProducts callback. */}
      <AppBody prodList={filteredProducts} showTopProducts={showTopProducts} />
      {Footer()}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
