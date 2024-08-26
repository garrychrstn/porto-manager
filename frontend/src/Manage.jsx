// this page will shows statistic of portofolio, such as : 
// how many visit (per page, will be useful for article), how many mention (is it possible?) 
// in social media, such as linkedin and instagram
// also will display form (1 page) for article, experience, and others
// use button to switch display between form

import { useState, useEffect } from "react";
import api from "../axiosConfig";
import { Link } from "react-router-dom";

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
            desc: '',
            do: '',
            due: ''
        }
    ])
    const calculateDays = (due) => {
        let now = new Date()
        let target = new Date(due);

        let diff = target.getTime() - now.getTime();
        let diffDay = Math.ceil(diff / (1000 * 3600 * 24));     
        return diffDay
    }
    const [todos, setTodos] = useState([{id: 0, do: 'loading...', due : 'loading...'}])
    useEffect(() => {
        api.get('/tod/')
        .then((response) => {
            setTodos(response.data)
            todos.forEach(doo => {
                due.id = doo.id
                due.days = calculateDays(doo.due)
            });
            console.log('Success, ', response)
        })
        .catch((error) => {
            console.log('Error', error)
        })  
    }, [])
    let propQuote = ['text', 'by']
    let propArt = ['title', 'content']
    let propTod = ['do', 'due']
    let propExp = ['position', 'company', 'start_date', 'end_date', 'desc']
    let tails = {
            text: 'block w-full p-2 mb-3 bg-neutral-200 shadow-lg shadow-black-150',
            by: 'block w-1/2 p-2 mb-3 bg-neutral-200 shadow-lg shadow-black-150',
            position: 'inline w-full p-2 mb-3 bg-neutral-200 shadow-lg shadow-black-150',
            company: 'inline w-full p-2 mb-3 bg-neutral-200 shadow-lg shadow-black-150',
            start_date: 'inline w-1/3 p-2 mb-3 bg-neutral-200 shadow-lg shadow-black-150',
            end_date: 'inline w-1/2 p-2 mb-3 bg-neutral-200 shadow-lg shadow-black-150',
            desc: 'block w-full p-2 mb-3 bg-neutral-200 shadow-lg shadow-black-150',
            title: 'block w-full p-2 mb-3 bg-neutral-200 shadow-lg shadow-black-150',
            do: 'block w-1/2 p-2 mb-3 bg-neutral-200 shadow-lg shadow-black-150',
            due: 'block w-1/2 p-2 mb-3 bg-neutral-200 shadow-lg shadow-black-150',
            content: 'block w-full p-2 mb-3 bg-neutral-200 shadow-lg shadow-black-150',
            submit: 'inline-block rounded bg-neutral-800 px-5 pb-1 pt-1 leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong'
        }

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
        } else if (data.do) {
            destination ='/tod/'
            console.log('set to tod')
            for (const tod of propTod) {
                dataSent[tod] = data[tod]
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
            <div className="porto-nav flex justify-between mb-10 items-center">
                <div className="logo inline-block">
                    <h1 className="text-4xl underline">porto-manager</h1>
                    <p className="upload-content text-right">
                        peek at yourself...
                    </p>
                </div>
                <div className="nav-link">
                    <Link to='/' className="no-underline bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-neutral-800 hover:text-white px-3">&#x2190; back</Link>
                </div>
            </div>
            
            <div className="show">
                <section className="todo p-2">
                    <h2 className="mb-2">your to do :</h2>
                    <table className='min-w-full text-left text-surface m-auto p-5 mb-5'>
                        <thead className='text-xs text-gray-100 bg-gray-800 dark:bg-gray-800 dark:text-neutral-300'>
                            <tr>
                                <th className="p-2">id</th>
                                <th>to do</th>
                                <th>due date</th>
                                <th>days left</th>
                            </tr>
                        </thead>
                        <tbody>
                            { todos.map((todo) => (
                                <tr className='border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-300 p-5' key={ todo.id }>
                                    <td className="p-2">{ todo.id }</td>
                                    <td>{ todo.do }</td>
                                    <td>{ todo.due }</td>
                                    <td>{ calculateDays(todo.due) }</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h2>add todo...</h2>
                    <form className='form-todo flex justify-between items-center' onSubmit= { sendData }>
                            { propTod.map((doo) => (
                                <input
                                className = { tails[doo] }
                                key = { doo }
                                type = 'text'
                                name = { doo }
                                onChange = { changeData }
                                value = { data[doo] }
                                placeholder = { data[doo] ? '' : `enter ${doo}`}
                                required
                                />
                            ))}
                            <button className = { tails.submit } type='submit'>add</button>
                    </form>
                </section>
            </div>
            <div className="crud">
                <div className="split flex justify-between">
                    <form className="forms-quote m-30 flex-1 p-3" onSubmit={ sendData }>
                        <h2>add quote...</h2>
                        { propQuote.map((quote) => (
                            <input 
                            className={ tails[quote] }
                            key= { quote }
                            type='text'
                            name={quote}
                            onChange = { changeData }
                            value = { data[quote] }
                            placeholder = { data[quote] ? '' : `enter ${quote}` }
                            required
                            />
                        ))}
                        <button className= { tails.submit } type='submit'>submit</button>
                    </form>
                    <form className="forms-experience flex-1 p-3" onSubmit={ sendData }>
                        <h2>add experience...</h2>
                        { propExp.map((exp) => (
                            <input
                            className = { tails[exp] }
                            key = { exp }
                            type='text'
                            name={ exp }
                            onChange = { changeData }
                            value = { data[exp] }
                            placeholder = { data[exp] ? '' : `enter ${exp}` }
                            required
                            />
                        ))}
                        <button className= { tails.submit } type='submit'>submit</button>
                    </form>
                </div>
                <div className="forms mt-5">
                    <form className="forms-article" onSubmit={ sendData }>
                        <h2>add article...</h2>
                        { propArt.map((art) => (
                            <input
                            className={ tails[art] }
                            key = { art }
                            type='text'
                            name={ art }
                            onChange={ changeData }
                            value= { data[art] }
                            placeholder= { data[art] ? '' : `enter ${art}`}
                            required
                            />
                        ))}
                        <button className={ tails.submit }type='submit'>submit</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Manage;