import { Link } from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div className="notfound">
            <h1>404 Not Found</h1>
            <Link to='/'>go back home</Link>
        </div>
     );
}
 
export default NotFound;