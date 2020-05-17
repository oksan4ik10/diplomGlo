'use strict';
const accordion = () =>{
    const slideInDown = document.querySelector (".slideInDown "),
    accordionCalc = document.querySelector("#accordion");
   

    function changeSlide(slide){
        const panelBody = slide.querySelectorAll("[role=tabpanel]");
        slide.addEventListener("click", (event) =>{
            event.preventDefault();
            const target = event.target.closest(".panel-heading");
            if(!target) return;
            removeClass(panelBody);
            target.nextElementSibling.classList.add("in");
        });

    }
    
    function removeClass (panel){
        panel.forEach((el) =>{
            el.classList.remove("in");
        })

    }
    
    changeSlide(slideInDown);
    changeSlide(accordionCalc);
    
};

export default accordion;