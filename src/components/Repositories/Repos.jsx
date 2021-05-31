import { useSelector } from "react-redux"
import Card from "./Card"
import "./repos.css"

const Repos = () => {

    const { repos, errorMsg } = useSelector(state => state.repoReducer)
    if (errorMsg) {
        return <h3>{errorMsg}</h3>
    }


    return (
        <div className="repos">
            <div className="repos__body">
                {
                    repos.map(item => {
                        return <Card key={item.id} {...item} />
                    })
                }

            </div>
        </div>
    )
}

export default Repos
