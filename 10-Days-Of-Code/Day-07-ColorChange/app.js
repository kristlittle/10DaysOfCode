

//COLORS ARRAY..
let color = ['blue', 'red', 'orange', 'yellow', 'green'];

//changing color of background
let button = document.getElementById('button');

button.addEventListener('click', function()
    {
    let indx = parseInt((Math.random()*color.length)+1);

    let back = document.getElementById('back');

    back.style.background = `${color[indx]}`
    }
)