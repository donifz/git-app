import { useEffect, useMemo, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import "./search.css"
import { getRepos } from "../../Redux/actions"
import useDebounce from "../../hooks/useDebounce"



const Search = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const debouncedText = useDebounce(text, 500)

    const handleChange = (e) => {
        setText(e.target.value)

    }

    useEffect(() => {

        if (debouncedText) {
            dispatch(getRepos(text))
        }


    }, [debouncedText])

    return (
        <div className="search">
            <input onChange={handleChange} type="text" placeholder="Search repository" />
            <h2>{debouncedText}</h2>
        </div>
    )
}

export default Search
