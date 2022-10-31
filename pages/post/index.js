

renderContent()
backHome ()

function renderContent(){
console.log("chegou")
    
const notice = JSON.parse(localStorage.getItem("@postClickedLiving"))
  console.log(notice)
const main = document.querySelector("main")
const div = document.createElement("div")
const h1 = document.createElement("h1")
const pDescription = document.createElement("p")
const img = document.createElement("img")
const pContent = document.createElement("p")

img.src = notice.image

pContent.innerText = notice.content
pDescription.innerText = notice.description
h1.innerText = notice.title

div.classList.add("page-title")



div.append(h1,pDescription)
main.append(div,img,pContent)
backHome ()

}


 

function backHome (){
    const button = document.querySelector(".back-home")
    button.addEventListener("click", ()=>{
        window.location.replace("/pages/home/index.html")
    })
}



export { renderContent, backHome}
