const enterBtn = document.getElementById("enter");
let textInput = document.querySelector("#new-todo");




enterBtn.addEventListener("click",()=>{
        listItem = document.createElement("li");
        listItem.innerText = textInput.value;
        let list = document.querySelector(".list");
        list.appendChild(listItem)
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        list.appendChild(deleteBtn);

        deleteBtn.addEventListener("click",()=>{
            list.removeChild(listItem);
            list.removeChild(deleteBtn);
        })
});



const TimeBtn= document.getElementById("date");
    onclick="document.getElementById('h2').innerText=Date()"



TimeBtn.addEventListener("click",()=>{
    // Title=document.createElement("h2")
    const title = document.querySelector(".title")
    title.innerText= new Date();
}





)