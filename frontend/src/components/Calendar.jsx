// import { Context, PageContext } from "../Landing";
// import { useState, useContext } from "react";

const Content = () => {
    
    let y24 = [
        { id: 'jan', pos: '', comp: '', tail: '' },
        { id: 'feb', pos: '', comp: '', tail: ''  },
        { id: 'mar', pos: '', comp: '', tail: ''  },
        { id: 'apr', pos: '', comp: '', tail: ''  },
        { id: 'may', pos: '', comp: '', tail: ''  },
        { id: 'jun', pos: '', comp: '', tail: ''  },
        { id: 'jul', pos: '', comp: '', tail: ''  },
        { id: 'aug', pos: '', comp: '', tail: ''  },
        { id: 'sep', pos: '', comp: '', tail: ''  },
        { id: 'oct', pos: '', comp: '', tail: ''  },
        { id: 'nov', pos: '', comp: '', tail: ''  },
        { id: 'dec', pos: '', comp: '', tail: '' },
    ];
    const getMonth = (sd, ed) => {
        const final_sd = sd.slice(5, 7);
        const final_ed = ed.slice(5, 7);
        content.forEach(c => {
            
        });
    }
    let content = [
        {
            id: 1, position: 'noc', company: 'maxnet+', start_date:'2024-03-18', end_date:'2024-09-10'
        },
        {
            id: 2, position: 'programmer', company: 'gmdp', start_date:'2024-09-11', end_date:'2024-01-19'
        },
        {
            id: 3, position: 'engineer', company: 'kominfo', start_date:'2024-02-19', end_date:'2024-07-20'
        },
    ]
    let idtail = [
        { id: 'maxnet+', tail: 'px-7 py-4 bg-red-500 border-2 border-solid w-1/4 rounded-lg'},
        { id: 'gmdp+', tail: 'px-7 py-4 bg-blue-500 border-2 border-solid w-1/4 rounded-lg'},
        { id: 'kominfo', tail: 'px-7 py-4 bg-blue-800 border-2 border-solid w-1/4 rounded-lg'},
    ]
    console.log(content)
    return ( 
        <>  
            <h1>Calendar</h1>
            <h2 className="text-center text-lg">2024</h2>
            <div className="content m-auto w-1/2 p-5 rounded-lg flex flex-wrap">
                { y24.map((m) => (
                    <div className="" key={ m.id }>
                        <h2 className=""></h2>
                    </div>
                ))}
            </div>
        </>
     );
}
 
export default Content;