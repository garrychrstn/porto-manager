import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Login from './Login.jsx';

const Login = () => {
    return ( 
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/login" element= { <Login /> } />
                </Routes>
            </main>
        </BrowserRouter>
     );
}
 
export default Login;