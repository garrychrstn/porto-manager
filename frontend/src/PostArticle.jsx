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
        console.log(data)
        api.post('/art/', data)
        .then(response => {
            console.log('article submitted')
            setData({title: '', content: ''})
            alert('data submitted')
        })
        .catch(error => {
            console.log('Error : ', error)
        })
    }
    return ( 
        <div className="postarticle">
            <h1>form article</h1>
            <form onSubmit={handleSubmit}>
                <label>title : </label>
                <input 
                type='text' 
                name='title' 
                value={ data.title } 
                onChange={ handleChange } 
                required />
                
                <label>content : </label>
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