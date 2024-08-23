import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx';
import Navigation from './components/Navigation.jsx';

const Landing = () => {
    
    return ( 
        <div className="fullpage">
            <Navbar />
            <Hero />
            <Navigation />
        </div>
     );
}
 
export default Landing;