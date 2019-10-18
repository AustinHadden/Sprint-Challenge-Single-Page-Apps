import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import SearchForm from "./SearchForm";

const StyledCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;    
    margin: 1%;   
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
        console.log(response);
        setCharacters(response.data.results);
    })
  }, []);

  return (
    <div>
    <SearchForm characters={characters} />
    <StyledCard>
      {characters.map(character => (
        <CharacterCard key={character.id} name={character.name} img={character.image} species={character.species} status={character.status} />
      ))}
    </StyledCard>    
    </div>
  );
}
