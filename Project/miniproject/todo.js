// let todo = [];
// let req = prompt("Enter Your reqest:-");
// while(true){
//     if(req == "quit"){
//         console.log(`you quiting todo game`);
//         break;
//     }else if(req == 'list'){
//         console.log(`---------`);
//         for(let i = 0; i < todo.length; i++){
//             console.log(i,todo[i]);
//         }
//         console.log(`----------`);
//     }else if(req == 'add'){
//         let add = prompt(`add your todo task`);
//         todo.push(add);
//         console.log(`task add`);
//     }else if(req == 'delete'){
//         let del = prompt(`Enter your todo Index`);
//         todo.splice(del,1);
//         console.log("task deleted");
//     }else{
//        console.log(`wrong request`);
//     }
//     req = prompt("Enter Your reqest:-");
// }


// ***********todo app using DOM JavaScript............

let writetask = document.getElementById("writetask");
let addtaskbtn = document.getElementById("addtaskbtn");
let tasklist = document.getElementById("tasklist");
// let delbtn = document.querySelector(".deltask");
let list = document.getElementsByClassName("list");

addtaskbtn.addEventListener("click",(e)=>{
    let task = document.createElement("li");
    task.innerText = writetask.value;
    tasklist.appendChild(task);
   writetask.value = "";

   let delbtn = document.createElement("button");
   delbtn.innerHTML = "Delete";
   delbtn.classList.add = "deltask";
   task.appendChild(delbtn);

  
});

let delbtns = document.querySelectorAll(".deltask");

tasklist.addEventListener("click", (e)=>{
    if(e.target.nodeName = "BUTTON"){
        let listItem = e.target.parentElement;
        listItem.remove();
    }

});
















