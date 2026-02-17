//https://www.omdbapi.com/?apikey=2cff54a&

/*
async function searchMovies() {
    const response = await fetch(`https://www.omdbapi.com/?s=spider&apikey=b2cff54a`);
    const data = await response.json();
    console.log(data);
}

searchMovies();
 
*/

document.addEventListener('DOMContentLoaded',()=>{})
const apiEndpoint="https://www.omdbapi.com/?apikey=b2cff54a";   // The URL is stored in a variable called "apiEndpoint" 
const display=document.querySelector("#search-input");          // "display" is a variable  

const getMovies = async(searchQuery) => {                         //"getMovies" is a FUNCTION; accept a search query as a parameter
        const response = await fetch(`${apiEndpoint}&s=${encodeURIComponent(searchQuery)}`);      //"fetch" is a METHOD that returns a PROMISE; including the search query in the API call

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

        const data = await response.json();                      //applying the json METHOD
        return data;                                             //"data" is a function as is "response"     
}

const displayMovies = async(searchQuery) => {                      //Accept a searcy query as a parameter
    const payload = await getMovies(searchQuery);                //"payload" is a variable; passing the searcy query to getMovies
        
        if (!payload.Search) {
            display.innerHTML = "<p>No movies found.</p>";          // Handle case where no movies are found
            return;
        }

    const sortedMovies = payload.Search.sort((a, b) => a.Title.localeCompare(b.Title));   // Sort the movies alphabetically by title
        console.log(sortedMovies)
    let dataDisplay = sortedMovies.map((object) => {            //"object" represents each item in the array; we use payload.Search to access the array of movies
        const {Title, Year, imdbID, Type, Poster} = object;  
                                                                //Following is the Template with the various objects.
        return `                                                                                  
        <div class="container">                                 
            <p>Title: ${Title}</p>
            <p>Year: ${Year}</p>
            <p>ImdbID: ${imdbID}</p>
            <p>Type: ${Type}</p>
            <p>Poster: <img src="${Poster}"> </p>
            
        </div>`;
    })
    .join("");                                                  //removes the commas in between the output of the elements

    display.innerHTML = dataDisplay;                            //"display" was initialized as a variable earlier above as well as "dataDisplay". This is updating the DOM with the results
};

 const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', () => {
        const query = searchInput.value;
        if (query) {
            displayMovies(query);                           // Call the function with the user input
        }
    });






/* data is being returned as a Promise
searchMovies() is a function, we can call it anything example getData()

/*  We have to use the map() method in JavaScript to iterate through 
the array of objects (JSON), extract data from these objects, and then 
display this data in your DOM.
The Document Object Model (DOM) is an application programming interface (API) 
for HTML and XML documents. It defines the logical structure of documents and 
the way a document is accessed and manipulated.

The primary goal of encodeURIComponent is to ensure that data passed within a URL is treated as plain text and not misinterpreted as part of the URL's structure or syntax. 

*/ 


