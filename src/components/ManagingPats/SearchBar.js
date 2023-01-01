import React from 'react'
import {BsSearch} from "react-icons/Bs"
import "../ManagingDrs/styles.css";

// npm i axios

const SearchBar = ({ posts, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(posts)

        const resultsArray = posts.filter(post => post.title.includes(e.target.value) || post.body.includes(e.target.value))

        setSearchResults(resultsArray)

    }


    return (
        <header className='ChangeBtnState'>
            <form className='search' onSubmit={handleSubmit}>
                <input
                    className='search__input'
                    type='text'
                    id='search'
                    onChange={handleSearchChange}
                />
                <button className='search__button'>
                    <BsSearch/>
                </button>
            </form>
        </header>
    )
}

export default SearchBar