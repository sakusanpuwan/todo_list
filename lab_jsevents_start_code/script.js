const enterBtn = document.getElementById("enter");




enterBtn.addEventListener("click",()=>{
        const list = document.querySelector(".list");
        const inputText = document.querySelector("#new-todo").value;

        const listItem = document.createElement("li");
        listItem.innerText = inputText;

        list.appendChild(listItem)

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        
        listItem.appendChild(deleteBtn);

        deleteBtn.addEventListener("click",()=>{
            list.removeChild(listItem);
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