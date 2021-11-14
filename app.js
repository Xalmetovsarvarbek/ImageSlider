var div=document.getElementById("div");
var body=document.getElementById("body");
var img=document.getElementById("img");
var button=document.getElementById("button1");
img.classList.add("rasm");
var tanla=1;
button2.addEventListener("click",()=>{
if (tanla<9){++tanla;};
img.src="img/"+String(tanla)+".jpg";
});
button1.addEventListener("click",()=>{
    if (tanla>1){--tanla;};
    img.src="img/"+String(tanla)+".jpg";
});
function bil(a){
    img.src="img/"+String(a)+".jpg"; 
    tanlov=a+1; 
}

function hi()
{
if (tanla<9){++tanla;} else {tanla=1;}
img.src="img/"+String(tanla)+".jpg";
}
setInterval(hi,10000);