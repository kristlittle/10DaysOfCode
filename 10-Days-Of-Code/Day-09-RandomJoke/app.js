//JAVASCRIPT

const onClick = document.querySelector(".button")

const jokes = [
            "Automatic simply means that you cannot repair it yourself.",
            "90% of everything is crud.",
            "A bird in hand is safer than one overhead.",     
            "A computer makes as many mistakes in one second as three men working for thirty years straight.",                      
            "A dog is a dog except when he is facing you. Then he is Mr. Dog.",          
            "A hunch is creativity trying to tell you something.",
            "A misplaced decimal point will always end up where it will do the greatest damage.",
            "A perfectly calm day will turn gusty the instant you drop a $20 bill.",
            "What rock group has four men that don't sing? Mount Rushmore.",
            "When I was a kid, my mother told me I could be anyone I wanted to be. Turns out, identity theft is a crime.",
            "What do sprinters eat before a race? Nothing, they fast!",
            "What concert costs just 45 cents? 50 Cent featuring Nickelback!",
            "What do you call a mac 'n' cheese that gets all up in your face? Too close for comfort food!",
            "Why couldn't the bicycle stand up by itself? It was two tired!",
            "Did you hear about the restaurant on the moon? Great food, no atmosphere!",
            "How many apples grow on a tree? All of them!",
            "Did you hear the rumor about butter? Well, I'm not going to spread it!",
            "I like telling Dad jokes. Sometimes he laughs!",
            "To whoever stole my copy of Microsoft Office, I will find you. You have my Word!",            
            "A sense of decency is often a decent mans undoing.",            
            "A short cut is the longest distance between two points.",            
            "A stockbroker is someone who invests your money until it is all gone.",
            "A synonym is a word you use when you can't spell the other one.",           
            "A yacht is a hole in the water, lined with wood, steel, or fiberglass,through which one pours all his money.",            
            "After all is said and done, a hell of a lot more is said than done.",            
            "All great discoveries are made by mistake.",
            "All things are possible. Except skiing through a revolving door.",          
            "All turtle thoughts are of turtle.",  
            "All warranties expire upon payment of invoice.",            
            "All work and no play maked Jack a dull boy and Jill a wealthy widow.",  
            "Almost everything in life is easier to get into than out of."
]

function getJoke(){
    let randomNum = Math.floor(Math.random()* (jokes.length));
    document.getElementById('displayJoke').innerHTML = jokes[randomNum];
}

onClick.addEventListener("click", getJoke);
