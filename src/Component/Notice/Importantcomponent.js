import React from 'react'
import { Date, NoticeText, Start } from './Notice.element'
import axios from 'axios'
import { Link } from 'react-router-dom';
function Importantcomponent({head}) {
    const formatDate = (dateStr) => {
        let months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        let [year, month, day] = dateStr.split('-');
        month = parseInt(month)
        console.log(month)
        month = months[month-1]
        let newDate = `${day}-${month}-${year}`;
        return newDate;
      };
      
    return (
        <>
        <Start>
           
            <NoticeText>
           
                {head.slice(0).reverse().map((h)=>(
                    <Link to={`/schoolemportent/${h.id}`}>
                    <div style={{display:'flex',flexWrap:'wrap',gap:'10px',padding:'5px',borderBottom:'1px solid black'}}>
             

             <Date>
             <h6 key={h.id}>{formatDate(h.createAte)}</h6>
            

         </Date>  
           <p style={{cursor:'pointer'}} key={h.id}>{h.notice_heading} <span style={{color:'red'}}>New</span></p>
         

             </div>
                    
                    </Link>
                ))}
        

            </NoticeText>

        </Start>
        

    </>)
}

export default Importantcomponent
