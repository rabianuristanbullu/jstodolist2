const addToDoButton = document.getElementById("addToDo")
const eklenecekDiv =document.getElementById("toDoContainer")
const yazilanalan = document.getElementById("inputText")
const silmeButonu =document.getElementById("clearToDo")

addToDoButton.addEventListener("click",()=>{
   const paragraf = document.createElement("p");
   paragraf.classList.add("paragraf-css")
   eklenecekDiv.appendChild(paragraf);
   paragraf.innerHTML= yazilanalan.value
   yazilanalan.value=""

   paragraf.addEventListener("click",()=>{
    paragraf.style.textDecoration = "line-through"
})

    paragraf.addEventListener("dblclick",()=>{
        eklenecekDiv.removeChild(paragraf)
    })

    silmeButonu.addEventListener("click",()=>{
        paragraf.remove();
    })
})


