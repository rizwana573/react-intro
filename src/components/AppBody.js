//import prodData from "../utils/mockData";
import ProdCard from "../components/ProdCard";
//import { useState } from "react";



const AppBody = ({prodList, showTopProducts}) => {
       return (
        <>
         <button className="topProduts" onClick={showTopProducts}>Top Rated Products</button>
      <div id="cardsContainer">
          {prodList.length > 0 ?  (
            prodList.map(products=> <ProdCard key={products.id} prodDetails={products}/>)
         ): (
            <p>No matching products found.</p>
          )}
      </div>  
        </>
       
    )
}

export default AppBody