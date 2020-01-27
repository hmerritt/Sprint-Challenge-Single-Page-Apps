import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList()
{
    const [characters, setCharacters] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() =>
    {
        axios
          .get('https://rickandmortyapi.com/api/character/')
          .then(res =>
          {
              setCharacters([...characters, ...res.data.results]);
          })
          .catch(err =>
          {
              console.log('[CharacterList] Error getting characters from api:', err);
          });
    }, []);

    return (
        <>
            <SearchForm setSearchInput={setSearchInput} />
            <section className='character-list'>
                {
                    characters.filter(character => character.name.toLowerCase().includes(searchInput))
                    .map((character, key) =>
                    {
                        return <CharacterCard character={character} key={key} />;
                    })
                }
            </section>
        </>
    );
}
