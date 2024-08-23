import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../axiosConfig.js'

const Navigation = () => {
    let contents = [
        {subject : 'default', description : 'choose between informations above', id : 0},
        {subject : 'exp', description : 'this comp will contain about experiences', id : 1},
        {subject : 'project', description : 'this comp will contain aboutt projects', id : 2},
        {subject : 'about', description : 'this comp will contain about dev profiles', id : 3},
        {subject : 'quotes', description : 'this comp will contain about dev quotes', id : 4}
    ]
    const [ content, setContent ] = useState(contents.find(sub => sub.subject == 'default'))
    const setPage = (page) => {
        let c = contents.find(co => co.subject == page)
        setContent(c)
    }
    useEffect(() => {
        api.get('/exp/')
        .then(response => {
            console.log(response);
            console.log('success')
        })
        .catch(error => {
            console.error('Error : ', error);
        })
    }, []);
    return (
        <>
            <div className="navigation">
                <ul>
                    
                    <Link to='/experiences' className='nav_button'>experiences</Link>
                    <Link to='/projects' className='nav_button'>projects</Link>
                    <Link to='/about' className='nav_button'>about</Link>
                    <Link to='/quotes' className='nav_button'>quotes</Link>
                    <Link to='/article' className='nav_button'>articles</Link>
                    {/* <button onClick={() => setPage('exp')} className='nav_button'>experiences</button>
                    <button onClick={() => setPage('project')} className='nav_button'>projects</button>
                    <button onClick={() => setPage('about')} className='nav_button'>about</button>
                    <button onClick={() => setPage('quotes')} className='nav_button'>quotes</button> */}
                </ul>
            </div>
        </>
     );
}
 
export default Navigation;