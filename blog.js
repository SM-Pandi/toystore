
//scrool btn  function
const scrollBtn = document.querySelector(".arrow");


window.addEventListener("scroll",function (params) {
   var top = this.window.scrollY

   console.log(top);

if (top > 100) {
    scrollBtn.classList.add("show") 

}
else if(top == 0){
    scrollBtn.classList.remove("show") 
}


scrollBtn.addEventListener("click",function (params) {
    window.scroll(0,0)
})
})
