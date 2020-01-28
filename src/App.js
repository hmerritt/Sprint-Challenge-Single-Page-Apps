import React from "react";
import { Route } from 'react-router-dom';
import * as Bootstrap from 'reactstrap';
import Header from "./components/Header";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';


export default function App()
{
    return (
        <main>
            <Header />

            {/* Routes */}
            <Route path='/' exact component={WelcomePage} />
            <Route path='/characters' component={CharacterList} />
        </main>
    );
}
