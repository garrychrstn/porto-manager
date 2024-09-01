import { useState, useEffect, useContext } from 'react';
import api from '../../axiosConfig.js';
import { Context, PageContext } from '../Landing.jsx';

const Navigation = () => {
    const [content, setContent] = useContext(Context)

    const [page, setPage] = useContext(PageContext)
    const [comp, setComp] = useState()

    const changeContent = (des) => {
        // let c = cstruct.find(o => o.id == des)
        // setComp(c.pg)

        setPage(des)
    }
    const renComp = (co) => {
        return co
    }
    // let cstruct = [
    //     {
    //         id: 'exp',
    //         pg: <Experience />,
    //         c: ['position', 'company', 'start_date', 'end_date', 'desc']
    //     },
    //     {
    //         id: 'art',
    //         pg: <Article />,
    //         c: ['title', 'content']
    //     },
    //     {
    //         id: 'quo',
    //         pg: <Quote />,
    //         c: ['text', 'by']
    //     },
    //     {
    //         id: 'abo',
    //         pg: <About />,
    //         c: ['name', 'dob', 'address', 'job_status', 'marr_status', 'hobbies', 'desc']
    //     }
    // ]
    useEffect(() => {
        if (page) {
        api.get(`/${page}/`)
        .then((response) => {
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
                    {/* <button onClick={() => setPage('exp')} className='nav_button'>experiences</button>
                    <button onClick={() => setPage('project')} className='nav_button'>projects</button>
                    <button onClick={() => setPage('about')} className='nav_button'>about</button>
                    <button onClick={() => setPage('quotes')} className='nav_button'>quotes</button> */}
                </ul>
            </div>
            {/* <div className="con">
                { content }
            </div> */}
        </>
     );
}
 
export default Navigation;