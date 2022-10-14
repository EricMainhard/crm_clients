import { Link } from 'react-router-dom'

export const NotFound = () => {
    return(
        <>
            <h1>Page not found</h1>
            <Link to="/">
                Back to home
            </Link>
        </>
    )
}