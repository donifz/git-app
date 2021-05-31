import { useEffect } from "react"
import { useParams } from "react-router"
import axios from "axios"


const CardDetail = () => {
    const { id } = useParams()
    useEffect(() => {


    }, [])
    return (
        <div>
            <h3>{id}</h3>

        </div>
    )
}

export default CardDetail
