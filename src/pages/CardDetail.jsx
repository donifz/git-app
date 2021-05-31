
import { Redirect, useParams } from "react-router"
import { useSelector } from "react-redux"


const CardDetail = () => {
    const { id } = useParams()
    const { repos } = useSelector(state => state.repoReducer)

    const details = repos.find(item => item.id == id)
    if (!details) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <h3>Name: {details.name}</h3>
            <h3>Stargazers_count: {details.stargazers_count}</h3>
            <h3>Watchers_count: {details.watchers_count}</h3>

        </div>
    )
}

export default CardDetail
