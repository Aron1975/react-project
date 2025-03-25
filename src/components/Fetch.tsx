
export const GET = (url: string) => {

  return ( fetch(url, {
        method: "GET",
        headers: {
        "Accept": "application.json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
        //setAJoke({setup:data.setup,punchline:data.punchline});
        console.log(data);
        })
        .catch((error) => console.log(error))

)}

export const POST = (url: string) => {

  return ( fetch(url, {
        method: "GET",
        headers: {
        "Accept": "application.json",
        },
    })
        .then((response) => response.json())
        .then((data) => {
        //setAJoke({setup:data.setup,punchline:data.punchline});
        console.log(data);
        })
        .catch((error) => console.log(error))

)}

