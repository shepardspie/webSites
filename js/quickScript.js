var timeOut;
function slideShow(startIndex) {
//var startIndex = 0;
    conveyor();
function conveyor() {
    
    var i;
    var x = document.getElementsByClassName("autoSlideShow");
    var y = document.getElementsByClassName("dot");
    for (i = 0; i < x.length; i++ ) {
        x[i].style.display = "none";  
        y[i].classList.remove("indSelected")
    }
    startIndex++;
    if (startIndex > x.length) {
        startIndex = 1;
    }    
    
    x[ startIndex -1].style.display = "block";  
    y[ startIndex -1].className += " indSelected";
    timeOut = setTimeout(conveyor, 3000); 
    
}
    
}

function selectSlide( slideNum ) {
    
    clearTimeout(timeOut);
    
    slideShow(slideNum);
    
}


// When the user clicks on the button, open the modal 
function launchModal() {
    modal = document.getElementById('modalMail');
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
    modal = document.getElementById('modalMail');
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    modal = document.getElementById('modalMail');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
