import { Context, PageContext } from "../Landing";
import { useState, useContext } from "react";

const Calendar = ({experiences}) => {
    
    let y24 = [
        { index: 1, id: 'jan', pos: '', comp: '', tail: 'px-5 py-5 bg-slate-100 bg-opacity-0 border-slate-500 border-2 border-solid w-1/4 rounded-lg' },
        { index: 2, id: 'feb', pos: '', comp: '', tail: 'px-5 py-5 bg-slate-100 bg-opacity-0 border-slate-500 border-2 border-solid w-1/4 rounded-lg'  },
        { index: 3, id: 'mar', pos: '', comp: '', tail: 'px-5 py-5 bg-slate-100 bg-opacity-0 border-slate-500 border-2 border-solid w-1/4 rounded-lg'  },
        { index: 4, id: 'apr', pos: '', comp: '', tail: 'px-5 py-5 bg-slate-100 bg-opacity-0 border-slate-500 border-2 border-solid w-1/4 rounded-lg'  },
        { index: 5, id: 'may', pos: '', comp: '', tail: 'px-5 py-5 bg-slate-100 bg-opacity-0 border-slate-500 border-2 border-solid w-1/4 rounded-lg'  },
        { index: 6, id: 'jun', pos: '', comp: '', tail: 'px-5 py-5 bg-slate-100 bg-opacity-0 border-slate-500 border-2 border-solid w-1/4 rounded-lg'  },
        { index: 7, id: 'jul', pos: '', comp: '', tail: 'px-5 py-5 bg-slate-100 bg-opacity-0 border-slate-500 border-2 border-solid w-1/4 rounded-lg'  },
        { index: 8, id: 'aug', pos: '', comp: '', tail: 'px-5 py-5 bg-slate-100 bg-opacity-0 border-slate-500 border-2 border-solid w-1/4 rounded-lg'  },
        { index: 9, id: 'sep', pos: '', comp: '', tail: 'px-5 py-5 bg-slate-100 bg-opacity-0 border-slate-500 border-2 border-solid w-1/4 rounded-lg'  },
        { index: 10, id: 'oct', pos: '', comp: '', tail: 'px-5 py-5 bg-slate-100 bg-opacity-0 border-slate-500 border-2 border-solid w-1/4 rounded-lg'  },
        { index: 11, id: 'nov', pos: '', comp: '', tail: 'px-5 py-5 bg-slate-100 bg-opacity-0 border-slate-500 border-2 border-solid w-1/4 rounded-lg'  },
        { index: 12, id: 'dec', pos: '', comp: '', tail: 'px-5 py-5 bg-slate-100 bg-opacity-0 border-slate-500 border-2 border-solid w-1/4 rounded-lg' },
    ];
    const findTail = (comp) => {
        let i2 = mtail.find(i => i.id === comp)
        return i2 ? i2.tail : '';
    }
    // let exps = [
    //     {
    //         id: 1, position: 'noc', company: 'maxnet+', start_date:'2024-03-18', end_date:'2024-09-10'
    //     },
    //     {
    //         id: 2, position: 'programmer', company: 'gmdp', start_date:'2024-09-11', end_date:'2024-12-19'
    //     },
    // ]
    let exps = experiences
    let mtail = [
        { id: "PT. Lingkar Kabel Telekom", tail: 'px-5 py-5 bg-red-500 border-2 border-solid w-1/4 rounded-lg'},
        { id: 'gmdp', tail: 'px-5 py-5 bg-blue-500 border-2 border-solid w-1/4 rounded-lg'},
        { id: 'kominfo', tail: 'px-5 py-5 bg-blue-800 border-2 border-solid w-1/4 rounded-lg'},
        { id: 'nothing', tail: 'px-5 py-5 bg-slate-100 bg-opacity-0 border-2 border-solid w-1/4 rounded-lg'},
    ]
    exps.forEach(c => {
        const sm = parseInt(c.start_date.slice(5, 7), 10);
        const em = parseInt(c.end_date.slice(5, 7), 10);
        y24.forEach(m => {
            if (sm <= m.index && m.index <= em) {
                m.pos = c.position
                m.comp = c.company
                m.tail = findTail(c.company)
            } else {

            }
        }); 
    });

    console.log('y24: ', y24)
    console.log('exps: ', experiences)
    return ( 
        <>  
            <h1>Calendar</h1>
            <h2 className="text-center text-lg">2024</h2>
            <div className="exps m-auto w-1/2 p-5 rounded-lg flex flex-wrap">
                { y24.map((m) => (
                    <div className={ m.tail } id={ m.id } key={ m.id }>
                        <p className="text-black text-opacity-0">{ m.pos }</p>
                    </div>
                ))}
            </div>
        </>
     );
}
 
export default Calendar;