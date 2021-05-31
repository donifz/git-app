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
                {repos.length==0?
                    <h3>No Datas</h3>
                    :
                    repos.map(item => <Card key={item.id} {...item} />
                  )
                }
            </div>
        </div>
    )
}

export default Repos
