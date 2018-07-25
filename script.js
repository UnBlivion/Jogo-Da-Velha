const casas = document.querySelectorAll(".casa");
let trocar = 0;
/*
for(let casa in casas){
    casas[casa].onclick = clicar;
}
*/

for(let casa of casas){
    casa.onclick = clicar;
}

function clicar(){
    if (trocar % 2){
        this.innerHTML = "X";
        this.style.color = "blue";
        trocar++;
    }
    else{
        this.innerHTML = "O";
        this.style.color = "red";
        trocar++;
    }
}