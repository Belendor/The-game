let field = document.querySelector(".field")
let time = document.querySelector(".time")
let counter = document.querySelector(".streak")
time.innerHTML = gameStart

counterKill = 0

function game(){
// Countdown*****************
setInterval(countdwon, 1000)
function countdwon(){
    if (time.innerHTML == 1){
        time.remove()
        
    }
    time.innerHTML--   
}
//****************************

setInterval(createCircle, dificultyLevel);
function createCircle(){
    let nepanaudotosX = []
    let nepanaudotosY = []

// Lose condition ***************
    if (field.querySelectorAll(".circle").length >10){
        return document.getElementById("lost-screen").classList.add("visible")
    } 
//*********************************
    let circleTheme = ""
    if(counterKill <=50){
        circleTheme = "circle"
    }
    if(counterKill >50){
        circleTheme = "circle lvl2"
    }


    for(let i = 0; i<circleCount; i++){
        
    field.innerHTML += `<div class="${circleTheme}"
                             style="left: calc(${createNewCoordY()}%);
                                    top: calc(${createNewCoordX()}vh)"></div>`
        
                       
    }

function createNewCoordY(){
   
    let y = Math.floor(Math.random()*90)

    for(let i = 0;i<nepanaudotosY.length;i++){
        if(y === nepanaudotosY[i]){
            return createNewCoordY()
        }
    }
    nepanaudotosY.push(y)
    nepanaudotosY.push(y+1)
    nepanaudotosY.push(y+2)
    nepanaudotosY.push(y+3)
    nepanaudotosY.push(y+4)
    nepanaudotosY.push(y+5)
    nepanaudotosY.push(y+6)
    nepanaudotosY.push(y-1)
    nepanaudotosY.push(y-2)
    nepanaudotosY.push(y-3)
    nepanaudotosY.push(y-4)
    nepanaudotosY.push(y-5)
   
    
    return y
}

function createNewCoordX(){
   
    let x = Math.floor(Math.random()*90)

    for(let i = 0;i<nepanaudotosY.length;i++){
        if(x === nepanaudotosY[i]){
            return createNewCoordX()
        }
    }
    nepanaudotosX.push(x)
    nepanaudotosX.push(x+7)
    nepanaudotosX.push(x+6)
    nepanaudotosX.push(x+5)
    nepanaudotosX.push(x+4)
    nepanaudotosX.push(x+3)
    nepanaudotosX.push(x+2)
    nepanaudotosX.push(x+1)
    nepanaudotosX.push(x-7)
    nepanaudotosX.push(x-6)
    nepanaudotosX.push(x-5)
    nepanaudotosX.push(x-4)
    nepanaudotosX.push(x-3)
    nepanaudotosX.push(x-2)
    nepanaudotosX.push(x-1)
    
    return x
}
}

    nepanaudotosX = []
    nepanaudotosY = []

}


function kill(){


    setInterval(killCircle, dificultyLevel)

    function killCircle(){

        let circles = field.querySelectorAll(".circle")

for (let i =0;i<circles.length;i++){
    circles[i].addEventListener("click", removeCircle, {once:true})
}

function removeCircle(a){

    let clickedCircle = a.target

    if(counterKill <=56){
        clickedCircle.classList.add("killed")
    }
    if(counterKill >56){
        clickedCircle.classList.add("killedlvl2")
    }

  
    clickedCircle.classList.remove("circle")
    setInterval(killdelay, 200)

        function killdelay(){  
        clickedCircle.remove()
        }
   
    counterKill += 1
    counter.innerHTML = counterKill
}
        
let testKilled = document.querySelector(".killed")
    if(testKilled !== null){
        testKilled.remove()
    }
    }

}


game()
kill()