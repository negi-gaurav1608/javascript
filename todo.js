const inputBox=document.querySelector("#input_box");
const listContainer=document.querySelector("#list_container");

function addTask(){
    if(inputBox.value===''){
        alert('You must write something');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.prepend(li);
        let span=document.createElement("span");  //for cross icon
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}


listContainer.addEventListener("click",function(evnt){
    if(evnt.target.tagName==="LI"){
        evnt.target.classList.toggle("checked");
    }
    else if(evnt.target.tagName === "SPAN"){
        evnt.target.parentElement.remove();
    }
    saveData();
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showList(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showList();