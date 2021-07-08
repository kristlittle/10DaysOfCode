//var quotes = []

const text=document.getElementById("quote");
const author=document.getElementById("author");

//**Unsed titter button - const tweetbutton=document.getElementById("tweet");

const getNewQuote = async () =>
{
    //quote api
    var url="https://type.fit/api/quotes";

    //get api data
    const response =await fetch(url);

    //convert to JSON
    const theQuotes = await response.json();
    
    //random number generation 0 to size of array
    const index = Math.floor(Math.random()*theQuotes.length);
    
    //store quote in index
    const quote=theQuotes[index].text;

    //store author in index
    const auth=theQuotes[index].author;
    
    if(auth==null)
    {
        author = "Anonymous";
    }


    const text=document.getElementById("quote");
    const author=document.getElementById("author");

    text.innerHTML=quote;
    author.innerHTML="- "+auth;
}

getNewQuote();