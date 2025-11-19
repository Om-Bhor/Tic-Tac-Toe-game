//ACESS ELEMENT FROM HTML
let butt = document.querySelectorAll("#box")
let resetbutt=document.querySelector("#reset")
let msg=document.querySelector("#winner")
let newbutt = document.querySelector(".newStart") 
// CREATE BUTTON
let but = document.createElement("button")
but.innerText= "Restart Game"
but.style.height = "6vh";
but.style.width = "15vh";
but.style.backgroundColor = "#F3FFBD";
but.style.fontSize = "medium";
but.style.color = "red";
but.style.borderRadius = "1.5rem";

msg.addEventListener(onmouseover,()=>{})
const winnigPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,8],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
// TEXT EVENT
let turnO = true
butt.forEach((box)=>{
    box.addEventListener("click",() => {
        if(turnO===true){
            
            box.innerText = "O"
            turnO= false
        }
        else{
             
            box.innerText = "X"
            turnO= true
        }
        box.disabled = true
        checkWinner()
    })
})
// WINNER FUNCTION
const checkWinner= ()=>{
    for (let pattern of winnigPattern){
        let pos1 = butt[pattern[0]].innerText
        let pos2 = butt[pattern[1]].innerText
        let pos3 = butt[pattern[2]].innerText

        if(pos1 !="" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                let print = "WINNER IS "+pos1+"! GAME ENDED"
                msg.innerText = print
                newbutt.prepend(but)
                disable() 
            }
        }
    }
}
// FUNCTION WHICH STOP THE GAME ONCE WE GET WINNER
const disable = ()=>{
    for (box of butt){
        box.disabled=true
    }
}

// RESTART GAME
newbutt.onclick=()=>{
    for(box of butt){
        turnO = true
        enable()
        xx()
        msg.innerText = ""
        newbutt.remove(but)
    }
}
// RESET GAME
resetbutt.onclick=()=>{
    for(box of butt){
        turnO = true
        enable()
        xx()
         
         
    }
}
const enable = ()=>{
    for (box of butt){
        box.disabled=false
    }
}
const xx = ()=>{
    for(box of butt){
        box.innerText=""
    }
}
