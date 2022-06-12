  /* heart turning red if clicked and turning white unclicked */
 let x=document.getElementsByClassName("testing") ;
 for (let i of x){
     i.addEventListener('click',function() {
         if (i.firstElementChild.style.fill==="rgb(255, 255, 255)"){
             i.firstElementChild.style.fill="#F32424";
             i.lastElementChild.style.fill="#F32424";
         }
         else {
             i.firstElementChild.style.fill="#fff";
             i.lastElementChild.style.fill="#000";
         }
     })
 };

/* + and - buttons => add and minus data */
let adding=document.getElementsByClassName("add");
let minusing=document.getElementsByClassName("del");
let qte=document.getElementsByClassName("dell_add");

let number=[1,1,1,1,1,1,1,1,1];
let min = 1; 
let max = 20;
for (let a of adding){
    a.addEventListener('click',function() {
        for (let j in adding){
            if (adding[j]===a){
                if (number[j]<max){
                    number[j] += 1;
                    qte[j].innerText=number[j];
}}}})};
for (let m of minusing){
    m.addEventListener('click',function() {
        for (let r in minusing){
            if (minusing[r]===m){
                if (number[r]>min){
                    number[r] -=1;
                    qte[r].innerText=number[r];
    }}}})};

 /*Add button */
let AdBtn=document.getElementsByClassName('submit');
var cl=[0,0,0,0,0,0,0,0,0];
for (let g of AdBtn){
    g.addEventListener('click',function(){
        for (let f in AdBtn){
            if (AdBtn[f]===g){
                cl[f]=number[f];
                alert('Item successfully added to My Cart !');
                /* sending cl values */
                sessionStorage.setItem("cl", JSON.stringify(cl));
            }
        }
        console.log(cl);
    })
};