import { Navbar } from "./components/Navbar"
import { Outlet } from "react-router-dom"
import { Footer } from "./components/Footer"
import "./components/NavbarFooter.css"
import "./Layout.css"

export function Layout(){

    return(
        <div className="AppMain" style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
            <Navbar />
            <main>
                <Outlet/>
            </main>
            <Footer />
        </div>
    )
}