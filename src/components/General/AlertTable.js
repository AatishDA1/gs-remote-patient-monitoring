import React from 'react'
import styled from 'styled-components'

function AlertTable() {
  return (
    <div >
        <Styles>
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
        </Styles>

    </div>
  )
}

export default AlertTable
const Styles = styled.div`
    table {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    border-spacing: 0;
    border: 1px solid black;
    font-size: clamp(0.5rem, 2.5vw, 2.5rem);
    letter-spacing: 1px;
   
    tr {
        :last-child {
        td {
            border-bottom: 0;
        }
        }
    }
    th,
    td {
        padding:  1rem;
        border-bottom: 1px solid black;
        border-right: 1px solid black;
        :last-child {
        border-right: 0;
        }
    }
    
    th {
        background: green;
        border-bottom: 3px solid blue;
        color: white;
        
    }
    }
    `