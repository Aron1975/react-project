import { Suspense } from "react";
import Jokes from "../components/Jokes";
import {ApiJokeWithSwr} from "../components/ApiJokeWithSwr";

function EditCars(){

     const url = "https://official-joke-api.appspot.com/jokes/random";

    return (
        <div>
        <br /><br /><br />
          <Suspense fallback={<h2>Loading...</h2>}>
               <ApiJokeWithSwr message={url}/>
          </Suspense>  
          <Jokes/>
        </div>
    )
    
}

export default EditCars;

