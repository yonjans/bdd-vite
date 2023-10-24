import { Link } from "react-router-dom"

const RootPage = () => {
    return <>
        This is root page.<br/>
        Go to <Link to={'/todos'}>Todos</Link>
    </>
}

export default RootPage