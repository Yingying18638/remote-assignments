function ajax(url) {
    // your code here
    return fetch(url)
            .then(res => res.json())

}
function render(data) {
    //console.log(data)
    const list= document.querySelector('#list')
    const show_item= (product)=>{
        const ul= document.createElement('ul')
        list.appendChild(ul)
        const arrValue=Object.values(product)
        console.log(arrValue)
        for(let i=0; i<arrValue.length; i++){
            const li= document.createElement('li')
            li.innerHTML= arrValue[i]
            ul.appendChild(li)
        }
    }
    const products= data.map( (product)=>show_item(product) )
}
const url = "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";
ajax(url).then((data) => { 
    render(data);
});