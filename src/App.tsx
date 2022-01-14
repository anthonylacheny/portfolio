import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    BrowserRouter,
    Route,
    Routes,
    Link
} from "react-router-dom";

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>

                <hr />

                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/about" element={<About />} />

                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </div>
        </BrowserRouter>
    );





}


// You can think of these components as "pages"
// in your app.

const Home = () => {
    return (
        <main>
            <h2>Home</h2>
            <div>learn react 2 {process.env.REACT_APP_FIREBASE_PROJECT}</div>
        </main>
    );
}

const About = () => {
    return (
        <main>
            <h2>About </h2>
        </main>
    );
}

const Dashboard = () => {
    const { i18n, t } = useTranslation();

    return (
        <main>
            <div className="select">
                <select
                    value={i18n.language}
                    onChange={(e) =>
                        i18n.changeLanguage(e.target.value)
                    }
                >
                    <option value="en">English</option>
                    <option value="fr">Francais</option>
                    <option value="es">Espanol</option>
                </select>
            </div>
            <div>{t("hello")}</div>
        </main>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}

export default App;
