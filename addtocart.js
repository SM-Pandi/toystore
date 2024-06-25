//add to cart

const shopicon=document.querySelector(".fa-bag-shopping")

const cart=document.querySelector(".addto-cart")

// console.log(shopicon,cart);



shopicon.addEventListener("click",function name(params) {
  
  cart.classList.toggle("opencart")

  cart.style.zIndeX=1
})


document.addEventListener("DOMContentLoaded",loadContent)




function loadContent(params) {


 const remove_pr= document.querySelectorAll(".pr-price")
 remove_pr.forEach(
    function(removepr) {
      removepr.addEventListener("click",removeProduct)

      
      
    }
 )

 const changecount=document.querySelectorAll(".count")

      changecount.forEach(
        function (prccount) {
     
          prccount.addEventListener("change",minus)
          
        }
      )

//  totalcalculation()
  

}
  function minus(params) {

    if(this.value<=0){
      this.value=1
      alert("please select the product")

    }
    else if(this.value>=6){
      this.value=6
      alert("out of stock ")
    }
       loadContent()
    
  }


  function removeProduct(params) {

    const getName= this.parentNode.querySelector(".pr-name").innerText

     const findIndex=productstoryArray.findIndex(function (array) {

      return getName==array.productname
      
    })

    if (findIndex>=0) {
      productstoryArray.splice(findIndex,1)
      
      this.parentNode.remove()
      //  console.log(productstoryArray);
    }
   loadContent()
  }



  
   const add_btn=document.querySelectorAll(".fa-cart-flatbed-suitcase")

  //  console.log(add_btn);

   add_btn.forEach(

    function (btn) {

       btn.addEventListener("click",getproductinfo)
      
    }
   )
   // craete array

    const productstoryArray=[]



   function getproductinfo() {

        // parent node select
      const select=this.parentNode.parentNode.parentNode

      const productimage=select.querySelector(".pr-image").src
      
      const productname=select.querySelector(".productcontent1 p").innerText
      
      const productprice=select.querySelector(".productprice p").innerText

   // array passing object   

       const productNameobject={productname}

//findindex
     const findIndex=productstoryArray.findIndex(function(prarray) {

      return productname==prarray.productname
      
     })
        if (findIndex >=0) {

         return  alert("already added")
          
        }
        else{
          
        productstoryArray.push(productNameobject)
            
        }

    // object data add array

        // console.log(productstoryArray);

      //  console.log(productNameobject);


      const createproduct=document.createElement(`div`)

      
      createproduct.innerHTML=putproductinfo(productimage,productname,productprice)

      // console.log(createproduct);

      const container=document.querySelector(".product-hold")

      container.appendChild(createproduct)

      loadContent()

      totalcalculation()
   }

    function putproductinfo(image,name,price) {

      return`<div class="product-hold">
      <div class="cart-product"> 
         <div class="cart-img">
             <img src="${image}" alt="">
         </div>
         <div class="product-details">
             <p class="pr-name">${name}<p>
             <p class="pr-amount">${price}</p>
             <div class="pr-count">
                 <input type="number" class="count" name="" id="" value="1">
                 <p class="total-pric"></p>
             </div>
         </div>
         <div class="pr-price">
             <i class="fa-solid fa-trash"></i>

         </div>
     </div> 
 </div>`
    
 
    }


//for calculation
   function totalcalculation(params) {
    var total= 0
// console.log(total);
      const cartproduct=document.querySelectorAll(".product-hold")
// console.log(total);
   
      //  console.log(cartproduct);

       cartproduct.forEach( 
          
          function (cproduct) {
// console.log(total);
              
             const price=cproduct.querySelector(".pr-amount").innerText.replace("Rs.","").replace(",","").replace(".00","")

            //  console.log(price);
             const productcount=cproduct.querySelector(".count").value
            //  console.log(productcount);
// console.log(total);

              console.log(price*productcount);
              // console.log(total);

              var totalproductprice=cproduct.querySelector(".total-pric")
// console.log(totalproductprice);
// console.log(total);

              totalproductprice.innerText  ="Rs." + price*productcount

              // console.log( price,totalproductprice);

              // console.log(total);
              total += price*productcount

              console.log(total);

              // console.log(total);

            
          }
        
          
       )
const cartTotal = document.querySelector(".total").innerText=total  
   }

 



// function totalcalculation() {
//   var total = 0;

//   const cartproduct = document.querySelectorAll(".product-hold");

//   cartproduct.forEach(function (cproduct) {
//       // Get the price and clean it
//       const priceStr = cproduct.querySelector(".pr-amount").innerText.replace("Rs.", "").replace(/,/g, "").replace(/\.00$/, "");
//       const price = parseFloat(priceStr); // Convert the cleaned price to a float

//       // Get the product count
//       const productCount = parseInt(cproduct.querySelector(".count").value, 10);

//       // Calculate the total price for this product
//       const totalProductPrice = price * productCount;

//       // Update the total price element for this product
//       var totalProductPriceElement = cproduct.querySelector(".total-pric");
//       totalProductPriceElement.innerText = "Rs. " + totalProductPrice.toFixed(2);

//       // Add to the overall total
//       total += totalProductPrice;
//   });

//   // Update the total price in the cart
//   const cartTotalElement = document.querySelector(".total");
//   cartTotalElement.innerText = "Rs. " + total.toFixed(2);
// }

// Example usage:
// Assuming you have elements in your HTML with the respective classes
// totalcalculation();





    // console.log(putproductinfo);




  





// function total_reomve(params) {
//     this.parendNode.parendNode.remove()
  
// }

















//  var bagicon=document.querySelector(".fa-bag-shopping")
//  var cart=document.querySelector(".addto-cart")

//  bagicon.addEventListener("click",function name(params) {
//   cart.classList.toggle("opencart")
//    cart.style.zIndex=1
      
//  })

//  document.addEventListener("DOMContentLoaded",loadevent)

//  function loadevent(params) {
//       loadcontent()
  
//  }

//   function loadcontent() {

//     var icon=document.querySelectorAll(".pr-price")

//     // console.log(icon);

//     icon.forEach(
//         function(totalremove) {
//             totalremove.addEventListener("click",removeProduct)
          
//         }
//     )
  
//   }
   

  

// // cont incraese and decrease
//   var count=document.querySelectorAll(".count")

//  count.forEach(
//    function (prcount) {

//       prcount.addEventListener("change",minus)

//   }
//  )


  




// function  minus() {
//   if (this.value<=0) {

//       this.value=1
//       alert("minum number of product")
      
//   }
//   else if(this.value>=6){
//       this.value=6
//     alert("stock unavilable")
     
//  }
 
// }

// var shopnowbtn=document.querySelectorAll(".fa-cart-flatbed-suitcase")
// // console.log(shopnowbtn);
// shopnowbtn.forEach(
  
//   function(btn) {
//       btn.addEventListener("click",getproductinfo)
      
//   }
// )
// var productstory=[]

// function removeProduct() {

//   var getName=this.parentNode.querySelector(".pr-price").innerText
//   //  console.log(getName);

//   var findIndex=productstory.findIndex(function (array) {
//                         return array.prname==getName
                      
//                        })
                                
  
//                          if (findIndex>=0) {
//                             juiceStoreArray.splice(findIndex,1)
//                            this.parentNode.remove()
                          
//                       }
  
//               loadcontent()
  
   

// }



// function getproductinfo(params) {
// // alert("work")
//     var select=this.parentNode.parentNode.parentNode

//   //   console.log(select);

//     var primage=select.querySelector(".pr-image").src

//     var prname=select.querySelector(".productcontent1 p").innerText

//     var prprice=select.querySelector(".productprice p").innerText.replace("RS.","")

//     // console.log(primage,prname,prprice);
//     var productdetails=document.createElement('div')

//     // putproductinfo function
//     productdetails.innerHTML=putproductinfo(primage,prname,prprice)
    
//     var producthold=document.querySelector(".product-hold")

//     producthold.appendChild(productdetails)
  
  
// loadevent()  
// }

  
//  function  putproductinfo(image,name,price) {

//      return` <div class="cart-product">
//      <div class="cart-img">
//          <img src="${image}">
//      </div>
//      <div class="product-details">
//          <p>"${name}"</p>
//          <p>"${price}"</p>
//          <div class="pr-count">
//              <input type="number" class="count" name="" id=""  >
//              <p class="total-pric">RS:100</p>
//          </div>
//      </div>
//      <div class="pr-price">
//          <i class="fa-solid fa-trash"></i>

//      </div>
// </div>`
  
//  }















// //select  icon+ addcart+ close icon div

// //var openicon=document.querySelector(".fa-cart-shopping")

// var cart=document.querySelector(".addcart")

// var closeicon=document.querySelector(".fa-wallet")

// // process in click open

//  openicon.addEventListener("click",function () {
// // one icon click two process key word in toggle
//     // cart.classList.toggle("opencart")
//     cart.classList.add("opencart")
  
//  })

// //  process in click close

//  closeicon.addEventListener("click",function(params) {

//     cart.classList.remove("opencart")

//  })

//  // page load function 

//  document.addEventListener("DOMContentLoaded",loadEvent) 

//  function loadEvent(params) {
//     loadContent()
//  }

//  function loadContent(params) {
// // cart div delete
//      var juiceremove=document.querySelectorAll(".fa-trash-can")
//    //all  cart design delete so used for each method
//      juiceremove.forEach(
//         function name(totalremove) {
//             totalremove.addEventListener("click",removeProduct)
          
//         }
//      )
      
   
 

//   // count increment
//     var  juiceno=document.querySelectorAll(".prinput") 

//  /// total input box increase   
//     juiceno.forEach(
 
//     function (juicenototal) {

//         juicenototal.addEventListener("change",minus)
      
//     }     

//     )

//     // shopnow button function....>>>>>>

//        var shopnowbtn=document.querySelectorAll(".addbtn")

//     //    console.log(shopnowbtn);
// // button multiple element so used for each mathod
//        shopnowbtn. forEach(
//         function(btn) {
//             btn.addEventListener("click",getjuiceinfo)
          
//         } 

//        )
      
//        totalcalculation()

//  }
//  function minus (params) {
      
//     // console.log(juiceno.value);
//     if (this.value<=0) {
//         this.value=1
//         alert("please select any one of juice")
//     } else if(this.value>=10) {
//         this.value=10
//         alert("minimum of juice only ")
//     }
// loadEvent()
// }
//  // create new array.>>>>>>>> chacking purpose 

//  var juiceStoreArray=[]


//  function removeProduct (params) {

//     //find indx function 
             
//                   var getName=this.parentNode.querySelector(".prname").innerText
  
//                   var findIndex=juiceStoreArray.findIndex(function (array) {
//                     return array.juicename==getName
                  
//                   })
//                   console.log(getName);
//                     console.log(findIndex);
//     //if condition+ splice method
//                     if (findIndex>=0) {
//                         juiceStoreArray.splice(findIndex,1)
//                         this.parentNode.remove()
                      
//                     }
  
  
//                     // alert("remove this product")
//              // this, parent node,remove key word    
           
//              loadContent()
//                  }

//  // getjuiceinfo function

//  function getjuiceinfo () {
// //click element parentnode select    
//     var select =this.parentNode

  
//     var juiceimage=select.querySelector(".fruits").src

//     var juicename=select.querySelector(".frname").innerText

//     var juiceprice=select.querySelector(".frprice").innerText.replace("RS.","")



//       var juiceNameObject={juicename}
// //using find indx

//  var findIndex=juiceStoreArray.findIndex(function (juarray) {

//         return juicename==juarray.juicename
      
//       })
//         console.log(findIndex);
// // condition to add(or) alert messgae

//       if (findIndex !== -1) {

//        return alert("alert added")
      
//       } 
//       else{

//       juiceStoreArray.push(juiceNameObject)
         
//       } 
     



// console.log(juiceStoreArray);

//     //   console.log(juiceNameObject);

// //juicearray using push method
   

//     //   console.log(juiceStoreArray);

// //new div is store the design
//     var juicedetails=document.createElement('div')
// //passing design
//     juicedetails.innerHTML=putjuiceinfo(juiceimage,juicename,juiceprice)

//     // console.log(juicedetails);

//     var juicecontainer=document.querySelector(".juicecontainer")
//     juicecontainer.appendChild(juicedetails)
// //the work is repeated so used load content
//   loadContent()
//  }
// // cart juice design function

//  function putjuiceinfo(image,name,price) {
// // return `` javscript using tags

//     return` <div class="remove">
//     <div class="content">
//         <img class="prfruits" src="${image}">
//     </div>
//     <div class="content1">
//         <h3 class="prname">${name}</h3>
//         <p class="prprice">${price}</p>
// <!-- inpu box selection                     -->
//         <input class="prinput" type="number"  value="1">
//     </div>
//     <!-- <div class="icon"> -->
// <!-- toatl juicecontainer remove icon -->
//      <p class="juice-total"> </p>
//     <i class="fa-solid fa-trash-can" style="color:blue;"></i>
//     <!-- </div> -->

// </div>`

// // loadContent()
  
//  }

//   function totalcalculation(params) {
//     var cartjuice=document.querySelectorAll(".remove")
//     console.log(cartjuice);

//     var totalcart=0
 
//     cartjuice.forEach(function(cjuice) {

//          var juiceprice=cjuice.querySelector(".prprice").innerText

//          var  juicecount=cjuice.querySelector(".prinput").value

//          var juicetotal=cjuice.querySelector(".juice-total")

//          juicetotal.innerText="RS."+ juiceprice*juicecount

//         //  alert("calculate")

//          console.log(juiceprice,juicecount);


//          totalcart +=juiceprice*juicecount
        
       



      
//     })

//     var cartTotal=document.querySelector(".print")

//         cartTotal.innerHTML="RS. "+totalcart
  
//        console.log(cartTotal);

// // cart notify 

// document.querySelector('.notify').innerText=juiceStoreArray.length
//   }




