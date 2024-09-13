import { useState, useEffect, useContext } from 'react';
import api from '../../axiosConfig.js';
import { Context, PageContext } from '../Landing.jsx';

const Navigation = () => {
    const [content, setContent] = useContext(Context)

    const [page, setPage] = useContext(PageContext)
    const [comp, setComp] = useState()

    const changeContent = (des) => {
        setPage(des);
        console.log(`CHANGES TO PAGE`);
        console.log(page);
    }
    useEffect(() => {
        if (page) {
            console.log(`page is changed to ${page}`)
        api.get(`/${page}/`)
        .then((response) => {
            console.log(`fire api req to ${page}`);
            console.log(response);
            if (page === 'exp') {
                setContent(Array.isArray(response.data) ? response.data : []);
            } else {
                setContent(response.data);
            }
            console.log('GET DATA success');
        })
        .catch((error) => {
            console.log('Error : ', error);
        })
    }}, [page]);
    return (
        <>
            <div className="navigation">
                <ul>
                    
                    <button onClick={ () => changeContent('exp') } className='nav_button text-neutral-600 p-2'>experiences</button>
                    <button onClick={ () => changeContent('pro') } className='nav_button text-neutral-600 p-2'>projects</button>
                    <button onClick={ () => changeContent('abo') } className='nav_button text-neutral-600 p-2'>about</button>
                    <button onClick={ () => changeContent('quo') } className='nav_button text-neutral-600 p-2'>quotes</button>
                    <button onClick={ () => changeContent('art') } className='nav_button text-neutral-600 p-2'>articles</button>
                </ul>
            </div>
        </>
     );
}
 
export default Navigation;