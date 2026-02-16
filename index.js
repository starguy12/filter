//https://www.omdbapi.com/?apikey=2cff54a&

/*
async function searchMovies() {
    const response = await fetch(`https://www.omdbapi.com/?s=spider&apikey=b2cff54a`);
    const data = await response.json();
    console.log(data);
}

searchMovies();
 
*/

const apiEndpoint = "https://www.omdbapi.com/?apikey=2cff54a&";   // The URL is stored in a variable called "apiEndpoint" 
const display = document.querySelector("#search-input");          // "display" is a variable  

const getMovies = async(searchQuery) => {                         //"getMovies" is a FUNCTION; accept a search query as a parameter
        const response = await fetch(`${apiEndpoint}s={searchQuery}`);      //"fetch" is a METHOD that returns a PROMISE; including the search query in the API call

            if (!response.ok) {
                throw new Error('HTTP error! status: ${response.status}');
            }

        const data = await response.json();                      //applying the json METHOD
        return data                                             //"data" is a function as is "response"     
}



const displayMovies = async(searchQuery) => { 
    const payload = await getMovies(searchQuery);                //"payload" is a variable; passing the searcy query to getMovies

    let dataDisplay = payload.Search.map((object) => {            //"object" represents each item in the array; we use payload.Search to access the array of movies
        const {title, year, imdbID, type, poster} = object;     

                                                                //Following is the Template with the various objects.
        return 
        `<div class="container">                                 
            <p>Title: ${title}</p>
            <p>Year: ${year}</p>
            <p>ImdbID: ${imdbID}</p>
            <p>Type: ${type}</p>
            <p>Poster: ${poster}</p>
        </div>`
    })
    .join("");                                                  //removes the commas in between the output of the elements

    display.innerHTML = dataDisplay;                            //"display" was initialized as a variable earlier above as well as "dataDisplay"

}

displayMovies("Inception");




/* data is being returned as a Promise
searchMovies() is a function, we can call it anything example getData()

/*  We have to use the map() method in JavaScript to iterate through 
the array of objects (JSON), extract data from these objects, and then 
display this data in your DOM.
The Document Object Model (DOM) is an application programming interface (API) 
for HTML and XML documents. It defines the logical structure of documents and 
the way a document is accessed and manipulated.

*/