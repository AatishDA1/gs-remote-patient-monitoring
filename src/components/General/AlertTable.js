import React, {useState} from 'react'
import itemscrit from './PopupCritical'
import { GlobalStyle } from '../Styles/GlobalStyles';
function AlertTable() {
  <GlobalStyle/>
  const[critdata, setCritData ] = useState(itemscrit);
  return (
    <>
    <table>
      <thead>
        <th> Warning Type</th>
        <th> Time </th>
        <th> Name</th>
        <th> Respiratory Rate</th>
        <th> Temp</th>
        <th> Systolic BP</th>
        <th> Diastolic BP</th>
        <th> HR </th>
      </thead>
      <tbody>
        {/*{critdata.map((patient) => (
          <tr>
              <td> {patient.WarningType} </td>
              <td> {patient.Name} </td>
              <td> {patient.Time} </td>
              <td> {patient.RespRate} </td>
              <td> {patient.Temp} </td>
              <td> {patient.SysBP} </td>
              <td> {patient.DiasBP} </td>
              <td> {patient.HeartRate} </td>

          </tr>
        ))} */}

      </tbody>
    </table>
    </>
        
  )
}

export default AlertTable

