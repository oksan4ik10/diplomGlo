'use strict';
const accordion = () =>{
    const slideInDown = document.querySelector (".slideInDown "),
    panelBody = slideInDown.querySelectorAll("[role=tabpanel]");
    
    function removeClass (panel){
        panel.forEach((el) =>{
            el.classList.remove("in");
        })

    }
    
    slideInDown.addEventListener("click", (event) =>{
        event.preventDefault();
        const target = event.target.closest(".panel-heading");
        if(!target) return;
        removeClass(panelBody);
        target.nextElementSibling.classList.add("in");
    });
    
};

export default accordion;