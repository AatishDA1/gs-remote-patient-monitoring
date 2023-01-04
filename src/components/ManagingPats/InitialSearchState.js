import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { getPosts } from './api/axios'
import SearchBar from './SearchBar'
import ListPage from './ListPage'
import "../Styles/styles.css";
import MPHeader from './MPheading'
import AddPatient from '../../pages/AddPatient';

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
          <AddPatient/>
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