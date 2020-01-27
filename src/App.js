import React from "react";
import * as Bootstrap from 'reactstrap';
import Header from "./components/Header";
import CharacterList from './components/CharacterList';


export default function App()
{
    return (
        <main>
            <Header />
            <CharacterList />
        </main>
    );
}
