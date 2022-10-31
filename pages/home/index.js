

const baseUrl = "https://m2-api-living.herokuapp.com/news"

async function getNews(){
    
    try{
        const request = await fetch("https://m2-api-living.herokuapp.com/news?page=5",{
            method: "GET",
            headers: {
                "Content-Type":"application/json"
            }
        })

        const response = request.json()
        return response

    }
    catch (err){
        console.log(err)
    }
}







async function renderPosts(id){
    console.log(id)
    let ul = document.querySelector(".posts-list")
    ul.innerHTML = ""
    let newsToRender = await getNews ()
    if (id  !== "Todos"){
         newsToRender.news = newsToRender.news.filter(element => element.category === id)
    } 
    
    newsToRender.news.forEach(element  => {
        
        const li = document.createElement("li")
        const img = document.createElement("img")
        const h3 = document.createElement("h3")
        const p = document.createElement("p")
        const button = document.createElement("button")

        img.src = element.image
        button.id = element.id
        li.id = element.category
        
        button.innerText = "Acessar conteúdo"
        h3.innerText = element.title
        p.innerText = element.description

        li.classList.add("posts-list-item")
        button.classList.add("access-content")


        li.append(img,h3,p,button)
        ul.appendChild(li)
    })
    
    accessPost(newsToRender.news)
}

renderPosts("Todos")


 function accessPost(news){
    const buttonPost = document.querySelectorAll(".access-content")

    buttonPost.forEach(element => {

        element.addEventListener("click",  async () => {   

            let newToOpen =  news.find(article=>article.id==element.id)
            localStorage.setItem('@postClickedLiving', JSON.stringify(newToOpen))  
            setTimeout (()=>{window.location.replace("/pages/post/index.html")}, 500)
            await renderContent ()
            
        })
    })
}

function filterCategorys(){
    const categorysButtons = document.querySelectorAll(".category-list-item")
    categorysButtons.forEach(element => {
    element.addEventListener("click", ()=>{
       renderPosts(element.id)
    })
})
}
filterCategorys ()

export {renderPosts}