import { Context, PageContext } from "../Landing";
import { useState, useContext } from "react";

const Content = () => {
    const [content, setContent] = useContext(Context);
    const [page, setPage] = useContext(PageContext);
    let cstruct = []
    if (page === 'exp') {
        cstruct = ['position', 'company', 'start_date', 'end_date', 'desc']
    } else if (page === 'art') {
        cstruct = ['title', 'content']
    } else if (page === 'quo') {
        cstruct = ['text', 'by']
    } else {
        cstruct = ['name', 'dob', 'address', 'job_state', 'marr_status', 'hobbies', 'desc']
    }
    console.log(content)
    return ( 
        <div className="content">
            { content.map((c) => (
                <div className="c-item" key={ c.id }>
                    { cstruct.map((prop) => (
                        <p key={ c[prop] }>{ prop } : { c[prop] } </p>
                    ))}
                </div>
            ))}
        </div>
     );
}
 
export default Content;