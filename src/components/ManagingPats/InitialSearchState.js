import React from 'react'
import { getPosts } from './api/axios'
import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import ListPage from './ListPage'
import { allpatients } from './ListPats'
import "../ManagingDrs/styles.css";
import MPHeader from './MPheading'

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
  </>
  )
}

export default InitialSearchState;
