import { useState } from "react";
import api from '../axiosConfig';

const PostArticle = () => {
    
    const [data, setData] = useState({title: '', content: ''})

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('/art/', data)
        .then(response => {
            console.log('article submitted')
        })
        .catch(error => {
            console.log('Error : ', error)
        })
    }
    return ( 
        <div className="postarticle">
            <h1>form article</h1>
            <form onSubmit={handleSubmit}>
                <label for='title'>title : </label>
                <input 
                type='text' 
                name='title' 
                value={ data.title } 
                onChange={ handleChange } 
                required />
                
                <label for='content'>content : </label>
                <input 
                type='text' 
                name='content' 
                value={ data.content } 
                onChange={ handleChange } 
                required />
                <button type='submit'>submit</button>
            </form>
        </div>
     );
}
 
export default PostArticle;