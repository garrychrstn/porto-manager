// this page will shows statistic of portofolio, such as : 
// how many visit (per page, will be useful for article), how many mention (is it possible?) 
// in social media, such as linkedin and instagram
// also will display form (1 page) for article, experience, and others
// use button to switch display between form

import { useState, useEffect } from "react";
import api from "../axiosConfig";

const Manage = () => {

    const [data, setData] = useState([
        {
            id: 0,
            title: '',
            content: '',
            text: '',
            by: '',
            position: '',
            company: '',
            start_date: '',
            end_date: '',
            desc: ''
        }
    ])

    let propQuote = ['text', 'by']
    let propArt = ['title', 'content']
    let propExp = ['position', 'company', 'start_date', 'end_date', 'desc']
    let dataSent = {}
    const changeData = (e) => (
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    )
    let destination
    const sendData = (e) => {
        e.preventDefault()

        console.log('post to : ', data)
        
        if (data.text) {
            destination = '/quo/'
            console.log('set to quo')
            for (const prop of propQuote) {
                dataSent[prop] = data[prop]
            }
        } else if (data.title) {
            destination = '/art/'
            console.log('set to art')
            for (const prop of propArt) {
                dataSent[prop] = data[prop]
            }
        } else {
            destination = '/exp/'
            console.log('set to exp')
            for (const prop of propExp) {
                dataSent[prop] = data[prop]
            }
        }
        api.post(destination, dataSent)
        .then((response) => {
            console.log(dataSent)
            console.log('Success', response)
            dataSent = {}
        })
        .catch((error) => {
            console.log(dataSent)
            console.log('Error : ', error)
            dataSent = {}
        })
    }
    return ( 
        <div className="manage m-auto w-2/3 pt-9">
            <div className="logo inline-block">
                <h1 className="text-4xl underline">Porto Manager</h1>
                <p className="upload-content text-s mb-10 text-right">
                    post new things...
                </p>
            </div>
            <div className="split flex justify-around">
                <form className="m-30" onSubmit={ sendData }>
                    <h2>add quote</h2>
                    { propQuote.map((quote) => (
                        <input 
                        key= { quote }
                        type='text'
                        name={quote}
                        onChange = { changeData }
                        value = { data[quote] }
                        placeholder = { data[quote] }
                        required
                        />
                    ))}
                    <button type='submit'>submit</button>
                </form>
                <form className="forms-experience" onSubmit={ sendData }>
                    <h2>add experience</h2>
                    { propExp.map((exp) => (
                        <input
                        key = { exp }
                        type='text'
                        name={ exp }
                        onChange = { changeData }
                        value = { data[exp] }
                        placeholder = { data[exp] }
                        required
                        />
                    ))}
                    <button type='submit'>submit</button>
                </form>
            </div>
            <div className="forms mt-5">
                <form className="forms-article" onSubmit={ sendData }>
                    <h2>add article</h2>
                    { propArt.map((art) => (
                        <input
                        key = { art }
                        type='text'
                        name={ art }
                        onChange={ changeData }
                        value= { data[art] }
                        placeholder= { data[art] }
                        required
                        />
                    ))}
                    <button type='submit'>submit</button>
                </form>
            </div>
        </div>
     );
}
 
export default Manage;