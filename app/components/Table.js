import React, { PropTypes } from 'react'
import TableHead from './TableHead'
import TableBody from './TableBody'
import {borderDt} from '../styles'


const Table = function({entries, opacityList, fetchPage}) {
    return (
        <div className="table-responsive">
            <table className="table table-striped" style={borderDt}>
                <TableHead sn="#" title="Display Name" link="Title" datetime="Created On"  />
                <TableBody entries={entries} opacityList={opacityList} fetchPage={fetchPage} />
            </table>
        </div>
    
    )
}

export default Table