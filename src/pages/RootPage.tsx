import React from "react"
import { Link } from "react-router-dom"

const RootPage = ({children}: React.PropsWithChildren) => {
    return <p>
        This is root page
        <Link to={'/todos'}>Todos</Link>
        {children}
    </p>
}

export default RootPage