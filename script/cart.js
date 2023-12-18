let cartCount=document.querySelector(".cartCount");
let productBody=document.getElementById("productBody");
let product=document.querySelectorAll(".button");
let mbtn=document.querySelectorAll('.mbtn');
let cartValue=cartCount.innerHTML;
let pCount=document.querySelectorAll(".pCount")



let pCountScore=[]

for (let i = 0; i <pCount.length; i++) {
    pCountScore[i]=pCount[i].innerHTML;
}

function cartCountUpdate(e) {

    for(let i=0;i<mbtn.length;i++){
        if (mbtn[i].parentNode.parentNode==e.target.parentNode.parentNode&& e.target.classList.contains("addbtn")) {
            mbtn[i].style.display="inline-block"
            pCountScore[i]++
            cartValue++
            cartCount.innerHTML=cartValue
            pCount[i].innerHTML=pCountScore[i];
        }
        if (mbtn[i].parentNode.parentNode==e.target.parentNode.parentNode&& e.target.classList.contains("mbtn")){
            pCountScore[i]--;
            cartValue--;
            cartCount.innerHTML=cartValue;
            pCount[i].innerHTML=pCountScore[i];
        if(pCountScore[i]==0){
            mbtn[i].style.display="none";
        }
     }
}
console.log(pCountScore);
}



document.querySelector("#productBody").addEventListener("click",cartCountUpdate)
