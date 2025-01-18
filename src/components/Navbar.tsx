import { Link } from "react-router-dom"
import "./NavbarFooter.css"

export function Navbar(){

    return(
        <>
            <header>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/show-cars">
                    <button>Show Cars</button>
                </Link>
                <Link to="/edit-cars">
                    <button>Jokes</button>
                </Link>
                <Link to="/paint">
                    <button>Paint</button>
                </Link>
            </header>
        </>
    )
}