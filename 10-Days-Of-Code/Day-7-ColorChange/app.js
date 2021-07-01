

//COLORS ARRAY..
let col = ['blue', 'red', 'orange', 'yellow', 'green'];

//changing color of background
let button = document.getElementById('button');

button.addEventListener('click', function()
    {
    let indx = parseInt((Math.random()*colors.length)+1);

    let back = document.getElementById('back');

    back.style.background = `${col[indx]}`
    }
)