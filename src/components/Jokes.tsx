import { useState, useEffect } from "react";

const URL = "https://www.yomama-jokes.com/api/v1/jokes/stupid/";
interface Joke {
    joke: string;
    category: string;
}

function Jokes() {

  const [jokes, setJokes] = useState<Joke[]>([]);
  

  useEffect(() => {
    fetch("https://www.yomama-jokes.com/api/v1/jokes/stupid/", {
      method: "GET",
      headers: {
        "Accept": "application.json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setJokes(data);
       // console.log(data);
      })
      .catch((error) => console.log(error));
     /* const fetchJokes = async () => {
        const response = await fetch(`${URL}`);
        const jokes = (await response.json()) as Joke[];
        setJokes(jokes);
      }
      fetchJokes();*/
  }, []);
  return (
    <div>
      <h2>Jokes of the day:</h2>
      <ul>
        {jokes.map((j, index) => (
            <li key={index}>{j.joke}</li>
        ))}
      </ul>
      {/*joke && <p>{joke}</p>*/}
    </div>
  );
}

export default Jokes;