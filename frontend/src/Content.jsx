import { Context, PageContext } from "./Landing";
import { useState, useContext } from "react";
import Calendar from "./components/Calendar";
import Article from "./Article";
import Quote from "./components/Quote";
import About from "./components/About";

const Content = () => {
    const [content, setContent] = useContext(Context);
    const [page, setPage] = useContext(PageContext);

    let cstruct = []
    // DIFFERENT COMPONENT FOR EACH PAGE
    const showComp = () => {
        if (page === 'exp') {
            return <Calendar />
        } else if (page === 'abo') {
            return <About />
        }
    }

    // ORIGINAL PLAN, BLOCK-ONLY DIV IN THE SAME PAGE
    // if (page === 'exp') {
    //     cstruct = [
    //         {
    //             id: 'position',
    //             tail: 'text-gray-200 text-xl font-bold'
    //         },
    //         {
    //             id: 'company',
    //             tail: 'text-gray-200 text-lg'
    //         },
    //         {
    //             id: 'start_date',
    //             tail: 'after:content-["-"] inline text-gray-200 text-base'
    //         },
    //         {
    //             id: 'end_date',
    //             tail: 'inline text-gray-200 text-base'
    //         },
    //         {
    //             id: 'desc',
    //             tail: 'text-gray-200 text-base'
    //         },
    //     ]
    // } else if (page === 'art') {
    //     cstruct = [
    //         {
    //             id: 'title',
    //             tail: 'text-gray-200 text-lg'
    //         },
    //         {
    //             id: 'content',
    //             tail: 'text-gray-200 text-lg'
    //         },
    //     ]
    // } else if (page === 'quo') {
    //     cstruct = [
    //         {
    //             id: 'text',
    //             tail: 'text-gray-200 text-lg'
    //         },
    //         {
    //             id: 'by',
    //             tail: 'text-gray-200 text-lg'
    //         },
    //     ]
    // } else {
    //     cstruct = [
    //         {
    //             id: 'name',
    //             tail: 'text-gray-200 text-lg'
    //         },
    //         {
    //             id: 'dob',
    //             tail: 'text-gray-200 text-lg'
    //         },
    //         {
    //             id: 'address',
    //             tail: 'text-gray-200 text-lg'
    //         },
    //         {
    //             id: 'job_status',
    //             tail: 'text-gray-200 text-lg'
    //         },
    //         {
    //             id: 'marr_status',
    //             tail: 'text-gray-200 text-lg'
    //         },
    //         {
    //             id: 'hobbies',
    //             tail: 'text-gray-200 text-lg'
    //         },
    //         {
    //             id: 'desc',
    //             tail: 'text-gray-200 text-lg'
    //         },
    //     ]
    // }
    console.log(content)
    return ( 
        <div className="content m-auto w-2/5 bg-gray-800 p-5 rounded-lg">
            { showComp() }
            {/* { content.map((c) => (
                <div className="c-item mb-2 border-solid border-2 border-gray-200 py-3 px-5 rounded-md" key={ c.id }>
                    { cstruct.map((prop) => (
                        <p className={ prop.tail } key={ c[prop.id] }>{ c[prop.id] } </p>
                    ))}
                </div>
            ))} */}
        </div>
     );
}
 
export default Content;