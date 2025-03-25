import { Suspense } from "react";
import Jokes from "../components/Jokes";
import {ApiJokeWithSwr} from "../components/ApiJokeWithSwr";
import { Loader } from "../components/Loader";

function EditCars(){

    const url = "https://official-joke-api.appspot.com/jokes/random";

    return (
     <div>
          <br /><br /><br />
          <Suspense fallback={<Loader/>}>
               <ApiJokeWithSwr url={url}/>
          </Suspense>
          <Jokes/>
     </div>
    )
    
}

export default EditCars;

