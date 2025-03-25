import useSWR from 'swr'

export function ApiJokeWithSwr(props: { url: string; }){

    //const fetcher = (...args) => fetch(...args).then((resp) => resp.json());
    const fetcher = (...args: [RequestInfo, RequestInit?]): Promise<any> => 
        fetch(...args).then((resp) => {
          if (!resp.ok) {
            throw new Error(`HTTP error! Status: ${resp.status}`);
          }
          return resp.json();
        });

   // let joke = {setup, punchline: string};
    let jokeSetup = "";
    let jokePunchline = "";

   //const getJoke = () => {

        const {data, error} = useSWR(props.url, fetcher, 
            {suspense: true}
        );
        jokeSetup = data.setup;
        jokePunchline = data.punchline;

        if(error){
            <h1>Something went wrong</h1>
        }
    //}

    return (

        <div>
            <h2 style={{textAlign:'center'}}>Get a Joke!</h2>
            <br /><br />
            <p style={{textAlign:'center', fontSize: '20px'}}>{jokeSetup}</p>
            <p style={{textAlign:'center', fontSize: '20px', fontWeight: 'bold'}}>{jokePunchline}</p>
           {/*} <button style={{marginLeft: '47%'}} onClick={getJoke}>New Joke</button>*/}
        </div>

    );
        

}