import api from '../axiosConfig';
import Navigation from './components/Navigation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { useState, useEffect } from 'react'

const Article = () => {

    const [articles, setArticles] = useState([
        { id: 404, title : 'empty', content : 'empty'}
    ])

    useEffect(() => {
        api.get('/art/')
        .then(response => {
            setArticles(response.data)
            console.log(articles)
        })
        .catch(error => {
            console.error('Error : ', error)
            
            console.log(articles)
        })
    }, [])
    
    return (
        <div className="body">
            <div className="fullpage">
                <Navbar />
                <Hero />
                <Navigation />
            </div>
            <div className="articles">
                { articles.map((article) => (
                    <div className="article" key={ article.id }>
                        <h2>{ article.title }</h2>
                        <p>{ article.content }</p>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Article;