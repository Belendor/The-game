setTimeout(game, 10000)

function game(){

let field = document.querySelector(".field")



function createCircle(count){
    for(let i = 0; i<count;i++){
        field.innerHTML += `<div class="circle"
                                 style="top: ${Math.floor(Math.random()*80)}%;
                                        right: ${Math.floor(Math.random()*80)}%"></div>`
    }
}

createCircle(circleCount)

setTimeout(game, 3000)

function timeCircle(){
    field.innerHTML += `<div class="circle"
                                 style="top: ${Math.floor(Math.random()*100)}%;
                                        right: ${Math.floor(Math.random()*100)}%"></div>`

}


let circles = field.querySelectorAll(".circle")
console.log(field);
console.log(circles[0]);

for(let i = 0;i<circleCount;i++){
    circles[i].addEventListener("click", onClick, {once:true})
}

function onClick(a){
    const circle = a.target
   circle.remove()
    
}

if(circles.length > 10){
    document.getElementById("lost-screen").classList.add("visible")
    
}


}


game ()