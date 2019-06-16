window.onload = () => {
    const sliderContainer = document.querySelector(".slider__items"); //parent div
    const sliderSlides = document.querySelectorAll(".slider__items--item"); //child div; slides
    const prevBtn = document.querySelector(".slider__nav--prev"); 
    const nextBtn = document.querySelector(".slider__nav--next");

    let counter = 0; //current slide counter
    let width = sliderSlides[0].clientWidth; // overall width of *each* slide (based off first slide div)

    // console.log(counter);

    //event listener for click on previous button
    prevBtn.addEventListener("click", () => {
        counter--;
        sliderContainer.style.transition = "all .5s ease-in-out";
        sliderContainer.style.transform =
            "translateX(" + -width * counter + "px)";
        console.log(counter);

        if (counter < 0) {
            counter = sliderSlides.length - 1;
            sliderContainer.style.transition = "all .5s ease-in-out";
            sliderContainer.style.transform =
                "translateX(" + -width * counter + "px)";
        }
    });

    //event listener for click on next button
    nextBtn.addEventListener("click", () => {
        counter++;
        sliderContainer.style.transition = "all .5s ease-in-out";
        sliderContainer.style.transform =
            "translateX(" + -width * counter + "px)";
        console.log(counter);

        if (counter > sliderSlides.length - 1) {
            counter = 0;
            sliderContainer.style.transition = "all .5s ease-in-out";
            sliderContainer.style.transform =
                "translateX(" + -width * counter + "px)";
        }
    });
};
