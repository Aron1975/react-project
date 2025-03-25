import { Navigate } from "react-router-dom"

export function Other(){

    return (
        <div>
            <br /><br /><br />
            <h1>Page not found.....</h1>
            <Navigate to="/" />
        </div>
    )
}