import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const StyledCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;    
    margin: 1%;   
`;

export default function SearchForm(props) {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect (() => { 
    const data = props.characters.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(data);
  },[searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
 
  return (
    <section className="search-form">
     <form className="search">
       <input type="text" name="textfield" placeholder="Search" value={searchTerm} onChange={handleChange} />
     </form>

      {
        searchResults.length === 0
        ? (<StyledCard>
        {props.characters.map(character => (
          <CharacterCard key={character.id} name={character.name} img={character.image} species={character.species} status={character.status} />
        ))}
      </StyledCard>) 
      : (<StyledCard>
        {searchResults.map(character => (
          <CharacterCard key={character.id} name={character.name} img={character.image} species={character.species} status={character.status} />
        ))}
      </StyledCard>)
      }

  </section>
  );
}
