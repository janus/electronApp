import React, { PropTypes } from 'react'
import Table from './Table'
import FormCheckBox from './FormCheckBox'
import {headerBg, backPro} from '../styles'
import {CHECK_BOXES} from '../utils/Constant'


const Results = function({entries, fetchPage, opacityList, webpage, checks, fetchDataFn, updateFn}) {
    
    return (
        <div className="col-md-12"><div className="row">
         <div style={headerBg}>
            <h1 className="bg-primary text-center">Latest 20 Entries on StackOverFlow</h1>
          </div>
        <div className="row"><div className="col-md-8">
        <Table entries ={entries} opacityList={opacityList} fetchPage = {fetchPage} />
         </div>
        <div className="col-md-4" style={backPro }>
         <div dangerouslySetInnerHTML= {webpage ? {__html: webpage} : {__html: null}} />
        <FormCheckBox checks={checks} items={CHECK_BOXES}  fetchDataFn={fetchDataFn} updateFn={updateFn} />
        </div></div></div></div>
    )
    
}

Results.propTypes = {
    entries: PropTypes.array.isRequired,
    checks: PropTypes.array.isRequired

}

export default Results