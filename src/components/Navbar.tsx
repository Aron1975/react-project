import { Link } from "react-router-dom"
import "./NavbarFooter.css"

export function Navbar(){

    return(
        <>
            <header>
           {/* <div className="my-navbar"> */}
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/show-cars">
                    <button>Show Cars</button>
                </Link>
                <Link to="/edit-cars">
                    <button>Edit Cars</button>
                </Link>
                <Link to="/paint">
                    <button>Paint</button>
                </Link>
            {/*</div>*/}
            </header>
        </>
    )
}