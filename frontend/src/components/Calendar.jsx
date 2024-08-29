import { Context, PageContext } from "./Landing";
import { useState, useContext } from "react";

const Content = () => {
    const [content, setContent] = useContext(Context);
    const [page, setPage] = useContext(PageContext);
    
    let timeline = []
    const calcMonth = () => {
        content.forEach(c => {
            let ni = {
                id: c.id,
                position: c.position,
                company: c.company,
                start_date: c.start_date.slice(5, 7),
                end_date: c.end_date.slice(5, 7)
            }
            timeline.push(ni)
        });
    }
    let compc = [
        {cid: 'PT. Lingkar Kabel Telekom', tail: 'bg-red-400 px-8 py-5'},
        {cid: 'kitanet.id', tail: 'bg-blue-400 px-8 py-5'}
    ]
    let cstruct = []
    if (page === 'exp') {
        cstruct = [
            {
                id: 'position',
                tail: 'text-gray-200 text-xl font-bold'
            },
            {
                id: 'company',
                tail: 'text-gray-200 text-lg'
            },
            {
                id: 'start_date',
                tail: 'after:content-["-"] inline text-gray-200 text-base'
            },
            {
                id: 'end_date',
                tail: 'inline text-gray-200 text-base'
            },
            {
                id: 'desc',
                tail: 'text-gray-200 text-base'
            },
        ]
    } else if (page === 'art') {
        cstruct = [
            {
                id: 'title',
                tail: 'text-gray-200 text-lg'
            },
            {
                id: 'content',
                tail: 'text-gray-200 text-lg'
            },
        ]
    } else if (page === 'quo') {
        cstruct = [
            {
                id: 'text',
                tail: 'text-gray-200 text-lg'
            },
            {
                id: 'by',
                tail: 'text-gray-200 text-lg'
            },
        ]
    } else {
        cstruct = [
            {
                id: 'name',
                tail: 'text-gray-200 text-lg'
            },
            {
                id: 'dob',
                tail: 'text-gray-200 text-lg'
            },
            {
                id: 'address',
                tail: 'text-gray-200 text-lg'
            },
            {
                id: 'job_status',
                tail: 'text-gray-200 text-lg'
            },
            {
                id: 'marr_status',
                tail: 'text-gray-200 text-lg'
            },
            {
                id: 'hobbies',
                tail: 'text-gray-200 text-lg'
            },
            {
                id: 'desc',
                tail: 'text-gray-200 text-lg'
            },
        ]
    }
    console.log(content)
    return ( 
        <div className="content m-auto w-2/5 bg-gray-800 p-5 rounded-lg">
            { timeline.map((t) => (
                <div className={ compc[t.id]}></div>
            ))}
        </div>
     );
}
 
export default Content;