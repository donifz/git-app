import { useState } from "react"
import { useDispatch } from "react-redux"

import "./search.css"
import { getRepos } from "../../Redux/actions"
import { useDebounce } from "use-debounce"


const Search = () => {
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(getRepos(e.target.value))
    }


    return (
        <div className="search">
            <input onChange={handleChange} type="text" placeholder="Search repository" />
        </div>
    )
}

export default Search
