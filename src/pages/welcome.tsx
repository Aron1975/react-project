import DragNdrop from "../components/DragNDrop"
import { useState, useEffect } from "react";
import axios from "axios";

type User = {
    id: string | null,
    email: string,
    firstName: string,
    password: string,
    lastName: string,
}

type Login = {
    email: string,
    password: string,
}

type Company = {
    id: string | null,
    name: string,
    orgNumber: string,
    shareCapital: number,
}
const baseUrl = 'https://momsbalans-backend.onrender.com';

function Welcome(){

    const url0 = baseUrl + '/api/ping';
    const url = 'http://localhost:8080/new-file';
    const url2 = 'http://localhost:8080/api/auth/register';
    const url3 = 'http://localhost:8080/api/auth/addcompany';
    const url4 = 'http://localhost:8080/api/auth/getcompanies';
    const url5 = 'http://localhost:8080/api/auth/authenticatePm';
    const [files, setFiles] = useState<File[]>([]);

    async function upload(e: React.SyntheticEvent) {
    
        e.preventDefault();

        if(typeof files[0] === 'undefined') return;

        const formData = new FormData();
        formData.append('file', files[0]);

        axios.post(url, formData)
            .then((response) => {console.log(response)})
            .catch((error) => console.error(error));
    }

    const handleSubmit = async (e: any) => {
    
            e.preventDefault();
    
            const formdata = new FormData(e.currentTarget);

            const formValues: User = {
            id: null,
            email: String(formdata.get("userName")),
            firstName: String(formdata.get("name")),
            password: String(formdata.get("pwd")),
            lastName: "",
            };
    
            axios.post(url2, formValues)
                .then((response) => {console.log(response)})
                .catch((error) => console.error(error));
        
    }

    const handleLoginSubmit = async (e: any) => {
    
        e.preventDefault();

        const formdata = new FormData(e.currentTarget);

        const formValues: Login = {
        email: String(formdata.get("loginUserName")),
        password: String(formdata.get("loginPwd")),
        };

        axios.post(url5, formValues)
            .then((response) => {console.log(response)})
            .catch((error) => console.error(error));
    
}

    const handleCompSubmit = async (e: any) => {
    
        e.preventDefault();

        const formdata = new FormData(e.currentTarget);

        const formValues: Company = {
        id: null,
        name: String(formdata.get("compName")),
        orgNumber: String(formdata.get("orgNr")),
        shareCapital: Number(formdata.get("shareCap")),
        };

        axios.post(url3, formValues)
            .then((response) => {console.log(response)})
            .catch((error) => console.error(error));
    
    }

    const getCompanies = async (e: any) => {
    
        e.preventDefault();

        axios.get(url4)
            .then((response) => {console.log(response)})
            .catch((error) => console.error(error));
    
    }

    const ping = async () => {
        console.log("ping");
        axios.get(url0)
            .then((response) => {console.log(response)})
            .catch((error) => console.error(error));
    
    }

    useEffect(()=>{

        let interval = setInterval(() => {
            ping();
        }, 600000);
        return () => {
            clearInterval(interval);
        };
    },[]);
    
    return (
        <>
            <br /><br /><br />
            <h1>Welcome to My React page!</h1>
            <DragNdrop onFilesSelected={setFiles} width="300px" height='400px'/>
            <button onClick={upload}>Upload</button>
           {/* <ul>
                {files.map((file, index)=>(
                    <li key={index}>{file.name}</li>
                ))}
            </ul> */}
            <form onSubmit={handleLoginSubmit}>
                <h3>Logga in</h3>
                <label>Användarnamn:</label>
                <input
                    type="text"
                    placeholder="Användarnamn"
                    name="loginUserName"
                    required
                />
                <label>Löseenord:</label>
                <input
                    type="text"
                    placeholder="Lösenord"
                    name="loginPwd"
                    required
                />
                <button type="submit">Login</button>
            </form>
            <form onSubmit={handleSubmit}>
                <h3>Lägg till ny användare</h3>
                <label>Användarnamn:</label>
                <input
                    type="text"
                    placeholder="Användarnamn"
                    name="userName"
                    required
                />
                <label>Namn:</label>
                <input
                    type="text"
                    placeholder="Namn"
                    name="name"
                    required
                />
                <label>Löseenord:</label>
                <input
                    type="text"
                    placeholder="Lösenord"
                    name="pwd"
                    required
                />
                <button type="submit">Spara</button>
            </form>
            <form onSubmit={handleCompSubmit}>
                <h3>Lägg till ny företag</h3>
                <label>Företagsnamn:</label>
                <input
                    type="text"
                    placeholder="Företagsnamn"
                    name="compName"
                    required
                />
                <label>Org Nummer:</label>
                <input
                    type="text"
                    placeholder="Org Nummer"
                    name="orgNr"
                    required
                />
                <label>Aktiekapital:</label>
                <input
                    type="number"
                    placeholder="Aktiekapital"
                    name="shareCap"
                    required
                />
                <button type="submit">Spara</button>
            </form>
            <button type="button" onClick={getCompanies}>Hämta företag</button>
        </>
    )
    
}

export default Welcome