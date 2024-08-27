import { useState, useEffect, useContext } from 'react';
import api from '../../axiosConfig.js';
import About from '../About.jsx';
import Quote from './Quote.jsx';
import Article from '../Article.jsx';
import Experience from './Experience.jsx';
import { Context, PageContext } from '../Landing.jsx';

const Navigation = () => {
    const [content, setContent] = useContext(Context)

    const [page, setPage] = useContext(PageContext)
    const [comp, setComp] = useState()

    const changeContent = (des) => {
        let c = cstruct.find(o => o.id == des)
        setComp(c.pg)

        setPage(des)
    }
    const renComp = (co) => {
        return co
    }
    let cstruct = [
        {
            id: 'exp',
            pg: <Experience />,
            c: ['position', 'company', 'start_date', 'end_date', 'desc']
        },
        {
            id: 'art',
            pg: <Article />,
            c: ['title', 'content']
        },
        {
            id: 'quo',
            pg: <Quote />,
            c: ['text', 'by']
        },
        {
            id: 'abo',
            pg: <About />,
            c: ['name', 'dob', 'address', 'job_status', 'marr_status', 'hobbies', 'desc']
        }
    ]
    useEffect(() => {
        if (page) {
        api.get(`/${page}/`)
        .then(response => {
            console.log(response);
            setContent(response.data);
            console.log('success');
        })
        .catch(error => {
            console.error('Error : ', error);
        })
    }}, [page]);
    return (
        <>
            <div className="navigation">
                <ul>
                    
                    <button onClick={ () => changeContent('exp') } className='nav_button'>experiences</button>
                    <button onClick={ () => changeContent('pro') }className='nav_button'>projects</button>
                    <button onClick={ () => changeContent('abo') }className='nav_button'>about</button>
                    <button onClick={ () => changeContent('quo') }className='nav_button'>quotes</button>
                    <button onClick={ () => changeContent('art') }className='nav_button'>articles</button>
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