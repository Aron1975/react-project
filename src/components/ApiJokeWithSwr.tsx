/*import useSWR from 'swr'



const fetcher = (...args: any[]) => fetch(...args).then((resp) => resp.json());

export function ApiJokeWithSwr(props: { message: string; }){

   // let joke = {setup, punchline: string};
    let jokeSetup = "";
    let jokePunchline = "";

    const getJoke = () => {

        const {data, error} = useSWR(props.message, fetcher, 
            {suspense: true}
        );
        jokeSetup = data.setup;
        jokePunchline = data.punchline;

        if(error){
            <h1>Something went wrong</h1>
        }
    }

    return (

        <div>
            <h2 style={{textAlign:'center'}}>Get a Joke!</h2>
            <br /><br />
            <p style={{textAlign:'center', fontSize: '20px'}}>{jokeSetup}</p>
            <p style={{textAlign:'center', fontSize: '20px', fontWeight: 'bold'}}>{jokePunchline}</p>
            <button style={{marginLeft: '47%'}} onClick={getJoke}>New Joke</button>
        </div>

    );
        

}*/