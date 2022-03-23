let grid = document.getElementById('grid');
let dark = false;

for(let i = 1; i<=100; i++){
    if(i%10==1){
        dark = !dark;
    }
    grid.innerHTML += '<div class="box ' +(dark? "dark":"white")+'" data-case="'+i+'"></div>';
    dark = !dark;
}