import Content from './components/Content.jsx';
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx';
import Navigation from './components/Navigation.jsx';
import React, { useState } from 'react';

export const Context = React.createContext();
export const PageContext = React.createContext();

const Landing = () => {
    const [content, setContent] = useState([])
    const [page, setPage] = useState([])

    return ( 
        <Context.Provider value={[content, setContent]}>
            <PageContext.Provider value={[page, setPage]}>
                <div className="fullpage">
                    <Navbar />
                    <Hero />
                    <Navigation />
                </div>
                <Content />
            </PageContext.Provider>
        </Context.Provider>
     );
}
 
export default Landing; 