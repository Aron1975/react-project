import { useState, useEffect } from "react";
import { GET } from './Fetch.tsx';
import axios from "axios";

const URL = "https://official-joke-api.appspot.com/jokes/random";

type Joke = {
    setup: string;
    punchline: string;
}

function Jokes() {

  const [jokes, setJokes] = useState<Joke[]>([]);
  const [aJoke, setAJoke] = useState<Joke>({setup:'', punchline:''});

  /*
  async function getData(URL: string){

    const {data: Items} = await GET(URL);

  }*/

  const getJoke = () => {

    axios.get(URL).then((resp) => {

        const data = resp.data;
        setAJoke({setup:data.setup,punchline:data.punchline});
    })
  }


  /*useEffect(() => {
    fetch(URL, {
      method: "GET",
      headers: {
        "Accept": "application.json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAJoke({setup:data.setup,punchline:data.punchline});
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);*/

  return (
    <div>
      <h2 style={{textAlign:'center'}}>Get a Joke!</h2>
      <ul>
        {jokes.map((j, index) => (
            <li key={index}>{j.setup}</li>
        ))}
      </ul>
      <br /><br />
      <p style={{textAlign:'center', fontSize: '20px'}}>{aJoke.setup}</p>
      <p style={{textAlign:'center', fontSize: '20px', fontWeight: 'bold'}}>{aJoke.punchline}</p>
      <button style={{marginLeft: '47%'}} onClick={getJoke}>New Joke</button>
    </div>
  );
}

export default Jokes;