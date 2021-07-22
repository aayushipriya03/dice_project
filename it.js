var player1="player1";
var player2="player2";
function editNames(){
    player1=prompt("change player1 name");
    player2=prompt("change player2 name");
    document.querySelector("p.player1").innerHTML=player1;
    document.querySelector("p.player2").innerHTML=player2;
}
function caldice(){
    var r=Math.random();
    r=r*6;
    r=Math.floor(r)+1
  return r;
}

function roll_the_dice(){
    var n1=caldice();
     var n2=caldice();
    document.querySelector(".img1").setAttribute("src","dice"+n1+".png");
    document.querySelector(".img2").setAttribute("src","dice"+n2+".png");
    if(n1>n2){
        document.querySelector("h1").innerHTML= (player1+" WINs")

    }
    else{
        if(n2>n1){
        document.querySelector("h1").innerHTML=player2+" WINs";}
        else{
            document.querySelector("h1").innerHTML="DRAW!!";
        }
    }

}

