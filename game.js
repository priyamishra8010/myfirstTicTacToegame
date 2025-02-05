let boxes= document.querySelectorAll(".box");
let resetbtn= document.querySelector("#resetbtn");
let newgamebtn= document.querySelector("#newgamebtn");
let msgcontainer =document.querySelector(".msg-container");
let msg =document.querySelector("#msg");

let playerO = true; // player X player O
const winningptrn =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetgame= ()=>{
    playerO =true;
    enableboxes();
    msgcontainer.classList.add("hide");
}




boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if (playerO){                  //player O
            box.innerText="O";
            playerO= false;        /// next turn player X
        }else{
            box.innerText="X";          //player X
            playerO=true;              // next turn player O
        }
        box.disabled=true;             //to disable the multiclicking on box which changes the value , so disbale will allow to this to take only one value 
        checkwinner();
    });
});

 const disbleboxes= ()=>{                      // to disbale the box when a player win the game 
    for (let box of boxes){
        box.disabled= true;
    } }

    const enableboxes= ()=>{                      // to disbale the box when a player win the game 
        for (let box of boxes){
            box.disabled= false;
            box.innerText="";
        } }




 const showwinner =(winner)=>{
     msg.innerText =`Congratulations Winner is, ${winner}`;
     msgcontainer.classList.remove("hide");
     disbleboxes();
 };
 const checkwinner=()=>{
    for (let pattern of winningptrn){
        let postition1val=boxes[pattern[0]].innerText;
        let postition2val=boxes[pattern[1]].innerText;
        let postition3val=boxes[pattern[2]].innerText;
        if (postition1val !="" && postition2val != ""&& postition3val !=""){           /// position of the value should not be empty 
            if (postition1val === postition2val && postition2val === postition3val){
                showwinner(postition1val);
            }

        }

    }
 }


 newgamebtn.addEventListener("click",resetgame);
 resetbtn.addEventListener("click",resetgame);


