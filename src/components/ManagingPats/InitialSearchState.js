import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { getPosts } from './api/axios'
import SearchBar from './SearchBar'
import ListPage from './ListPage'
import { allpatients } from './ListPats'
import "../Styles/styles.css";
import MPHeader from './MPheading'
import { navigate } from "gatsby";

// reference(this file, api, searchbar, post): https://github.com/gitdagray/react_search_filter


function InitialSearchState() {
  const [posts, setPosts] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(()=>{
    getPosts().then(json =>{
        setPosts(json)
        return json
    }).then(json =>{
        setSearchResults(json)
    })
  },[])

  const [checkedstate, setcheckedstate] = useState(
    new Array(allpatients.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
      const updatedCheckedState =checkedstate.map((item, index) =>
          index === position ? !item:item
      );

      setcheckedstate(updatedCheckedState);

      const totalPrice = updatedCheckedState.reduce(
          (sum,  currentState, index) => {
              if(currentState === true) {
                  return sum+1;
              }
              return sum;
          },
          0
      );
      setTotal(totalPrice);
  };

  return (
  <>
    <SearchBar posts={posts} setSearchResults={setSearchResults} />
    <MPHeader/>
    <div className='center-section'> 
      <div className='sixty'>
        <div className='scroll'>
            <ListPage searchResult={searchResults}/>
        </div>
        
      </div>
      
    </div>
    <div className='center-section'>
      <div className='sixty'>
        <AEDBtn>
          <button className="aedbtnstyle" disabled={total!==0} onClick={() => navigate("/AddPatient")}>
            Add
          </button>
          <button className="aedbtnstyle" disabled={total!==1} onClick={() => navigate("/EditPatient")}>
            Edit
          </button>
          <button className="aedbtnstyle" disabled={total===0} onClick={() => navigate("/DeletePatient")}>
            Delete
          </button>
        </AEDBtn>
      </div>
    </div>
  </>
  )
}

export default InitialSearchState;

const AEDBtn = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: 5px;
  font-weight: bold;
`;