let pageNumber=1;
const urlP1=`https://api.github.com/orgs/facebook/repos?per_page=5&page=1`;
function ajax(url){
    return fetch(url)
            .then(res=>res.json())
            // .catch(new Error())
}
function render(data){
    const section=document.querySelector("section")
    const newData=data.map((item)=>{
        const container=document.createElement("div")
        container.setAttribute("class","container")
        const h3=document.createElement("h3")
        const span=document.createElement("span")
        const p=document.createElement("p")
        h3.innerHTML=item.name
        span.innerHTML=item.visibility
        p.innerHTML=item.description
        container.appendChild(h3)
        container.appendChild(span)
        container.appendChild(p)
        
        if(item.topics[0]){
            const ul=document.createElement("ul")
            for(let i=0; i<item.topics.length; i++){
                const li=document.createElement("li")
                li.innerHTML=item.topics[i]
                ul.appendChild(li)
            }
            container.appendChild(ul)
        }
        section.appendChild(container) 
    })
}
function getData(url){
    ajax(url)
        .then( data=>render(data) )
}
const addPage=(page)=>{
    page+=1
    return page
}

getData(urlP1);
const more=document.getElementById("more");
more.addEventListener('click',()=>{
    pageNumber+=1
    getData(`https://api.github.com/orgs/facebook/repos?per_page=5&page=${pageNumber}`)
})