
//step 1: get the element we want to listen to and affect and store it away for use
myitem = document.getElementById("firstTest");
pageInfo = document.getElementById("pageInfo");
policyImg = document.getElementById("policyImg");
textentry = document.getElementById("myinput");  
image=document.getElementById("procedureImg");



//Step 2: we want to tell ourText that when we move a mouse over it, it should change its color.we do this by telling ourText to use a specifiv event listener

myitem.addEventListener("click", onClick);
myitem.addEventListener("mouseout", onMouseOut);
//textfield listeners
textentry.addEventListener("change", onChange);



//button listeners
textBackground.addEventListener("click", onButtonClick);
changedImage.addEventListener("click", buttonClick)
enlargeText.addEventListener("click",enlargeClick);

//make big image


//Step:3 write the event listener
function onMouseOut() {
    myitem.style.color = "";
    myitem.style.background = "";

}

function onClick() {
    myitem.style.color = "green";
    myitem.style.background = "yellow";

}

function onButtonClick() {
    pageInfo.style.background = "white";

}

function buttonClick(){
    policyImg.src="firstPageImages/policy2.jpg"

}

function onChange(){
inputText=myinput.value;
newText.innerHTML=inputText;

}



function enlargeClick(){
 
pageInfo.style.fontSize="18px";




