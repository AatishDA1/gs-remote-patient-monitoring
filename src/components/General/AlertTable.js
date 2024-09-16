import React from 'react'
import SimAddActions from '../Simulation/SimAddActions'
import {currentRRC, currentTRC, currentSRC, currentHRC, currentDRC}from '../Simulation/SimDataCrit'
function AlertTable() {
  return (
    <>
    <table>
      <thead>
        <th>Warning Type</th>
        <th>Time</th>
        <th>Patient Name</th>
        <th>Respiratory Rate</th>
        <th>Temperature</th>
        <th>Systolic BP </th>
        <th>Diastolic BP</th>
        <th>HR </th>

      </thead>
      <tbody>
      </tbody>
    </table>
    </>
        
  )
}

export default AlertTable

