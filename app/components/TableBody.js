import React, { PropTypes } from 'react'
import {extractStringFromTimeStamp} from '../utils/stackOverFlowHelpers'
import {DATA_ID} from '../utils/Constant'
import {opacBright, opacDark} from '../styles'
    
import store from '../containers/BindContainer'

const TableBody = function({entries, fetchPage, opacityList}) {
//var entries = [["Foo", "Cool", "2344"]];
var ddd = entries.map((data, index) => <tr key={index + 1} style={opacityList[index] === 1 ? opacBright: opacDark}><td>{index + 1} </td><td>
                      <a href={data.owner.link} onClick={fetchPage}>{data.owner.display_name}</a>
                      </td><td><a href={data.link} data-id={DATA_ID[index]} onClick={fetchPage}>{data.title}</a> </td>
                      <td><span className="text-danger">{extractStringFromTimeStamp(data.creation_date)} </span></td></tr>
                     )
 return (
     <tbody>
        {ddd}
     </tbody> 
 )
};

export default TableBody