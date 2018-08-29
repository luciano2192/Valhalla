// Homepage slider
function startSlider(){
    var slideIndex = 0;
    
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("my-slides");
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        slideIndex++;
        
        if(slideIndex > slides.length) {
            slideIndex = 1;
        }
        
        if( slides[slideIndex-1] != undefined ){ 
            slides[slideIndex-1].style.display = "block";
        }
        
        setTimeout(showSlides,3000);
    }
}

startSlider();