function append() {
let data=JSON.parse(localStorage.getItem("products"))||[];
let product=document.getElementById("all_products")

let trash=JSON.parse(localStorage.getItem("trash"))||[];

data.forEach(function (el,index){
let div = document.createElement("div")
let img=document.createElement("img")
img.src=el.image;
let type=document.createElement("p")
type.innerText=el.type;

let desc=document.createElement("h3")
desc.innerText=el.desc;

let price=document.createElement("p")
price.innerText=el.price;
let btn=document.createElement("button")

btn.innerText="REMOVE"
btn.addEventListener("click",function(){
   data.splice(index,1)
   trash.push(el);
   localStorage.setItem("trash",JSON.stringify(trash))
   localStorage.setItem("products",JSON.stringify(data))
   window.location.reload();
})

div.append(img,type,desc,price,btn)
product.append(div)
});

}
append();