import React, { useState } from "react";

export default function SearchForm(props) {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
 
  return (
    <section className="search-form">
     <form className="search">
       <input type="text" name="textfield" placeholder="Search" value={searchTerm} onChange={handleChange} />
     </form>
    </section>
  );
}
