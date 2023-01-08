import React from 'react';
import "../Styles/NavBarStyle.css"
import Patient1 from '../../pages/Patient1';
import Patient2 from '../../pages/Patient2';
import Patient3 from '../../pages/Patient3';
import Patient4 from '../../pages/Patient4';
import Patient5 from '../../pages/Patient5';
import PatNavBarComponents from './PatNavBarComponents';

export default function PatNavbar() {
    return (
      <div className='Nav'>
          <div className='Nav_container'>
              <ul className='Nav_items'>
                  <PatNavBarComponents
                      src = {Patient1}
                      text = "Patient 1"
                      path = "/Patient1"
                  />
                  <PatNavBarComponents
                      src = {Patient2}
                      text = "Patient 2"
                      path = "/Patient2"
                  />
                  <PatNavBarComponents
                      src = {Patient3}
                      text = "Patient 3"
                      path = "/Patient3"
                  />
                  <PatNavBarComponents
                      src = {Patient4}
                      text = "Patient 4"
                      path = "/Patient4"
                  />
                  <PatNavBarComponents
                      src = {Patient5}
                      text = "Patient 5"
                      path = "/Patient5"
                  />
              </ul>
          </div>
      </div>
    );
  };