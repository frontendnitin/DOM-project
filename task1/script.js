var isstatus =document.querySelector("h5")

var btn = document.querySelector("#add")

var flag = 1

add.addEventListener("click",function(){
   if(flag==1){
    isstatus.innerHTML="Friend"
    isstatus.style.color="green"
    btn.innerHTML="remove Friend"
    flag = 0
   } 
   else{
    isstatus.innerHTML="Stranger"
    isstatus.style.color="red"
    btn.innerHTML="Add Friend"

    flag = 1
   }
})










