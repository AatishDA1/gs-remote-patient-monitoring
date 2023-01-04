import React from 'react'
import {useTable} from 'react-table'
import {currentRRC, currentTRC, currentSRC, currentHRC, currentDRC}from '../Simulation/SimDataCrit'
import AlertTime from './AlertTime'
const critData = React.useMemo(() =>
 [
 {
 name: 'Respiratory Rate',
 value: currentRRC,
 threshold: 25 ,
 time : <AlertTime />
 
 },
 {
 name: 'Temperature',
 value: currentTRC,
 threshold: 43.2,
 time : <AlertTime />
 },
 {
 name: 'Systolic BP',
 value: currentSRC,
 threshold: 169,
 time : <AlertTime />
 },
 {
 name: 'Diastolic BP',
 value: currentDRC,
 threshold: 109,
 time : <AlertTime />
 },
 {
 name: 'Heart Rate',
 value: currentHRC,
 threshold: 174,
 time : <AlertTime />
 },
 ],
 []
)

const columns = React.useMemo(() => [
    {
    Header: 'Vital',
    accessor: 'name',    
    },
    {
    Header: 'Value',
    accessor: 'value',    
    },
    {
    Header: 'Threshold',
    accessor: 'threshold',    
    },
    {
        Header: 'Time',
        accessor: <AlertTime/>,    
    }
    
])

const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
   } = useTable({ columns, critData })
function AlertTable() {
  return (
    <>
        <table>
            <thead>
                <th>Type</th>
                <th>Time</th>
                <th>Patient</th>
                <th>Bed</th>
                <th>Vital</th>
                <th>Value</th>
            </thead>
            <tbody>
                <tr> 
                    <td>Critical</td>
                    <td>1:28:39PM</td>
                    <td>Jay Fung</td>
                    <td>1</td>
                    <td>Systolic BP</td>
                    <td>200</td>
                </tr>
            </tbody>

        </table>
        

    </>
        
  )
}

export default AlertTable

