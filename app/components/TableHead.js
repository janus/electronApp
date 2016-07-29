import React from 'react'

    
const TableHead = function(props) {
    var css_class = "text-muted text-center"
    return(
        <thead>
        <tr className="info">
           <th><span className={css_class} >{props.sn}</span></th>
           <th><span className={css_class} >{props.title}</span></th>
            <th><span className={css_class} >{props.link}</span></th>
            <th><span className={css_class}>{props.datetime}</span></th>
        </tr>
        </thead>
    )
}

export default TableHead