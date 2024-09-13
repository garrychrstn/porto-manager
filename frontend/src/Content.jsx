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
        switch (page) {
            case 'exp':
                console.log(`in <Content /> : ${page}`)
                return Array.isArray(content) ? <Calendar experiences={content} /> : <div>Loading experiences...</div>;
            case 'abo':
                console.log(page)
                return <About profile={ content } />
            case 'art' :
                return <Article />
            case 'quo' :
                return <Quote />
        }
    }
    console.log(content)
    return ( 
        <div className="content m-auto w-2/5 bg-gray-800 p-5 rounded-lg">
            { showComp() }
        </div>
     );
}
 
export default Content;