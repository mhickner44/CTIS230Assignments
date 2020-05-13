theImgDiv=document.getElementById("imageDiv");
theImage = document.getElementById("procedureImg");
theBigImage = document.getElementById("largeview");
cardShown = false;

theImgDiv.addEventListener("click", makeBigImage);
theBigImage.addEventListener("click", hideBigImage);
theBigImage.innerHTML = "";



function hideBigImage() {
    theBigImage.classList.add("dontshow"); //tell theBigImage that it's part of the dontshow class
    theBigImage.innerHTML = "";
}

function makeBigImage() {
    // make a new img element to add to our section element
    if (theBigImage.innerHTML == "") {
        bigimage = document.createElement("img");
        bigimage.src = "firstPageImages/procedure.png";
        theBigImage.appendChild(bigimage); //add the img element to the section
        theBigImage.classList.remove("dontshow"); //tell the section that it's no longer part of the dontshow class
    }
}

function expandImage() {
    if (theImgDiv.style.position == "") {// if the div has its original value of position
        theImgDiv.style.position = "absolute";
        theImgDiv.style.top = "300";
        theImgDiv.style.left = "300";
        theImage.style.width = "auto";
        theImage.src = "firstPageImages/procedure.png";
    } // auto means what this width property would do if there was not a stylesheet
    else { // make it small again
        theImgDiv.style.position = "";
        theImage.style.width = "100";
    }
}



function onClick() {
    if (cardShown == false) {
        theImgDiv.style.display = "block";
        ourText.innerHTML = "I clicked the button";
        cardShown = true;
    } else {
        theImgDiv.style.display = "none";
        ourText.innerHTML = "<em>Stopped showing the card</em>"
        cardShown = false;
    }
    
}