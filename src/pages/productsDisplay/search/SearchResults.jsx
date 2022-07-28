import React from 'react';
import style from "./search.module.css"

const SearchResults = ({productsid,thumbnailURL,brand,title,rating}) => {
  return (
      <div  key={productsid} className={style.cardcontent}>
          <img src={thumbnailURL} alt="tnURL" />
          <p>{ brand}</p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width:"100%"}}>
              <p>{ title}</p>
              <p>{ rating}</p>
              
          </div>
          
          

          


    </div>
  )
}

export default SearchResults