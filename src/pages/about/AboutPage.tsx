import { useParams } from "react-router"

export const AboutPage = () => {
    const {id} = useParams()
    return (
        <div>
            Here is About page id = {id}
        </div>
    )
}