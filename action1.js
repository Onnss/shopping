
/*adding items to my Cart*/
var cl = sessionStorage.getItem("cl"); //receiving cl values
/* converting cl values to number */
let cl1=cl.slice(1,cl.length-1);
let cl2=cl1.split(',');
let cl3=[];
for (let v=0;v<cl2.length;v++){
    cl3[v]=parseInt(cl2[v]);
};

let q=[]; //quantity 
function qty(){
    for (i=0;i<9;i++){
        q[i]=cl3[i];
        document.getElementById(`qte${i+1}`).innerText=q[i];
        if (q[i]==0){
            document.getElementById(`tr${i+1}`).hidden=true;
        }
        else{
            document.getElementById(`tr${i+1}`).hidden=false;
        }
    }
    return q;
};
q=qty();

/* price [1-9]*/
let p=[];
function pricee(){
    for (i=1;i<10;i++){
        p[i-1]=document.getElementById(`pr${i}`).innerText;
    }
    return p;
};
p=pricee();

// /* calculate total*/

let t=[];
let totall;
totall=0;
function tot(){
    for (let s=0;s<9;s++){
        if (q!==0){
        t[s]=Math.round(q[s]*p[s]*1000)/1000 ;
        document.getElementById(`tt${s+1}`).innerText=t[s];
        totall+=t[s]
    }}
    document.getElementById("tt").innerText=totall;
}
tot();

/*clicking remove will hide the entire row & set its quantity values to 0 & minus its price from total*/
let remBTN=document.getElementsByClassName("rembtn");
for (let di of remBTN){
    di.addEventListener('click',function(){
        for (let b=0;b<9;b++){
            if (remBTN[b]===di){
                document.getElementById("tt").innerText -=t[b] ;
                document.getElementById(`tr${b+1}`).hidden=true;
                q[b]=0;
                document.getElementById(`qte${b+1}`).innerText=0;
                document.getElementById(`tt${b+1}`).innerText=0;
            }
        }
    })
};