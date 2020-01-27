import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList()
{
    const [characters, setCharacters] = useState([]);

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
              console.log('[CharacterList] Error getting characters:', err);
          });
    }, []);

    return (
        <section className='character-list'>
            {
                characters.map((character, key) =>
                {
                    return <CharacterCard character={character} key={key} />;
                })
            }
        </section>
    );
}
