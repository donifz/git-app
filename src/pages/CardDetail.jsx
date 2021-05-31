import { useEffect } from "react"
import { Redirect, useParams } from "react-router"
import axios from "axios"
import { useSelector } from "react-redux"


const CardDetail = () => {
    const { id } = useParams()
    const { repos } = useSelector(state => state.repoReducer)

   

    const details = repos.find(item => item.id == id)
    if(!details){
        return  <Redirect to="/"/>
      }

    return (
        <div>
            <h3>Stargazers_count: {details.stargazers_count}</h3>
            <h3>Watchers_count: {details.watchers_count}</h3>

        </div>
    )
}

export default CardDetail
