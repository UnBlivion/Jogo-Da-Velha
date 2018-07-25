const casas = document.querySelectorAll(".casa");
let trocar = 0;
let info = document.querySelector("#sumario");
/*
for(let casa in casas){
    casas[casa].onclick = clicar;
}
*/

for(let casa of casas){
    casa.onclick = clicar;
}

function verify(){
    if(comparar(casas[0],casas[1],casas[2]) ||      comparar(casas[4],casas[3],casas[5]) || comparar(casas[6],casas[7],casas[8]) || comparar(casas[7],casas[1],casas[4]) || comparar(casas[0],casas[3],casas[6]) || comparar(casas[5],casas[8],casas[2]) || comparar(casas[0],casas[4],casas[8]) || comparar(casas[4],casas[6],casas[2])){
        if (trocar % 2){
        document.querySelector("#congrats").style.transform = "translateY(400px) scale(1)";
        document.querySelector('#congrats').innerHTML = ("Parabens Jogador N°1");
        }
        else{
        document.querySelector("#congrats").style.transform = "translateY(400px) scale(1)"; 
        document.querySelector('#congrats').innerHTML = ("Parabens Jogador N°2");
        }
    }
    else if(trocar === 9){
        document.querySelector("#congrats").style.transform = "translateY(400px) scale(1)"; 
        document.querySelector('#congrats').innerHTML = ("Velha...");
    }
}

function comparar(casa1, casa2, casa3){
    if(casa1.innerHTML === casa2.innerHTML && casa2.innerHTML === casa3.innerHTML && casa1.innerHTML !== ""){
        return true;
    }
    return false;
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
    this.onclick = null;

    if(trocar >= 5){
        verify();
    }
}