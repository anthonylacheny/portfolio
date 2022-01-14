import React from 'react';
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
                    <Route path="/" element={<Home/>} />
                        
                    <Route path="/about" element={<About/>}/>
                      
                    <Route path="/dashboard"element={<Dashboard/>}/>
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </div>
        </BrowserRouter>
    );





}


// You can think of these components as "pages"
// in your app.

const Home = ()  => {
    return (
        <main>
            <h2>Home</h2>
            <div>learn react 2</div>
        </main>
    );
}

const About = () => {
    return (
        <main>
            <h2>About</h2>
        </main>
    );
}

const Dashboard = () => {
    return (
        <main>
            <h2>Dashboard</h2>
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
