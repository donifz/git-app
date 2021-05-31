import { useState } from "react"
import { useDispatch } from "react-redux"

import "./search.css"
import { getRepos } from "../../Redux/actions"
import { useDebounce } from "use-debounce"


const Search = () => {
    const [text, setText]= useState("")
    const [debounced] = useDebounce(text, 1000)
    
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setText(e.target.value)
        dispatch(getRepos(debounced))
    }


    return (
        <div className="search">
            <input onChange={handleChange} type="text" placeholder="Search repository" />
        </div>
    )
}

export default Search
