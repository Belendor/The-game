let field = document.querySelector(".field")
let time = document.querySelector(".time")
let counter = document.querySelector(".streak")
time.innerHTML = gameStart

counterKill = 0

function game(){

setInterval(countdwon, 1000)

function countdwon(){
    if (time.innerHTML == 1){
        time.remove()
        
    }
    
    time.innerHTML--
    
}

setInterval(createCircle, 5000);
function createCircle(){
    
    for(let i = 0; i<circleCount; i++){

        if (field.querySelectorAll(".circle").length >10){
            return document.getElementById("lost-screen").classList.add("visible")
        } 

    field.innerHTML += `<div class="circle"
                             style="left: calc(${Math.floor(Math.random()*90)}%);
                                    top: calc(${Math.floor(Math.random()*90)}vh)"></div>`
        
                       
    }
}

}


function kill(){
    
    
    setInterval(killCircle, 5000)

    function killCircle(){

        let circles = field.querySelectorAll(".circle")

for (let i =0;i<circles.length;i++){
    circles[i].addEventListener("click", removeCircle, {once:true})
}

function removeCircle(a){
    let clickedCircle = a.target
    clickedCircle.remove()
    counterKill += 1
    counter.innerHTML = counterKill
}
        

    }

}


game()
kill()