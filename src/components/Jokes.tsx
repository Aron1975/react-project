import { useState, useEffect } from "react";

const URL = "https://official-joke-api.appspot.com/jokes/random";

type Joke = {
    setup: string;
    punchline: string;
}

function Jokes() {

  const [jokes, setJokes] = useState<Joke[]>([]);
  const [aJoke, setAJoke] = useState<Joke>({setup:'', punchline:''});

  useEffect(() => {
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
  }, []);

  return (
    <div>
      <h2 style={{textAlign:'center'}}>Joke of the day:</h2>
      <ul>
        {jokes.map((j, index) => (
            <li key={index}>{j.setup}</li>
        ))}
      </ul>
      <p style={{textAlign:'center', fontSize: '20px'}}>{aJoke.setup}</p>
      <p style={{textAlign:'center', fontSize: '20px'}}>{aJoke.punchline}</p>
    </div>
  );
}

export default Jokes;