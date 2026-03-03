import { useNavigate } from "react-router";

export const HomePage = () => {

    const navigate = useNavigate();

    const onContactsClick = () => {
        navigate('/contacts')
    }
const onAboutClick = (id: number) => {
    navigate(`/about/${id}`)
}
    return (
        <div>
            Here is Home page
            <button onClick={onContactsClick}>
                go to the contacts page
            </button>

            <button onClick={() => onAboutClick(1)}>
                go to the id 1
            </button>

            <button onClick={() => onAboutClick(2)}>
                go to the id 2
            </button>
        </div>
    )
}