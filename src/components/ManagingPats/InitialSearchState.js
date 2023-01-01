import React from 'react'
import { getPosts } from './api/axios'
import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import ListPage from './ListPage'
import { allpatients } from './ListPats'

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
    <ListPage searchResult={searchResults}/>
  </>
  )
}

export default InitialSearchState;
