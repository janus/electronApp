import React, { PropTypes } from 'react'
import ResultsContainer from '../containers/ResultsContainer'
import {headerBg,buttonQueryPs,backCg} from '../styles'    
import {savedTag} from '../utils/helpers'    


const FormCheckBox = (props) => (
    <div style={backCg}>
    <p className="lead bg-primary text-center">Use the checkboxes to filter outputs</p>
    <form>
     <div className="row">
     <div className="col-md-5 checkbox col-md-offset-2">
       <ul className="list-unstyled">
         {props.items.map((item, idx) => (
                                          <li key={idx + 1}>
                                          <label> 
                                          <input  type="checkbox"  value={item} onChange={props.updateFn} 
                                          checked={savedTag(item, props.checks)} /> {item} </label> 
                                         </li>)) }
       </ul></div>
       <div className="col-md-4">
        <div style={buttonQueryPs}>
          <button onClick={props.fetchDataFn} className="btn btn-default"   value="Query">Query</button>
     </div></div></div></form>
    </div>
)





export default FormCheckBox