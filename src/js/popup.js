'use strict';
const popup = () =>{
    const popupDiscountForm = document.querySelector(".popup-discount"),
    popupCallForm = document.querySelector(".popup-call");

    document.addEventListener("click", (event) =>{
        const target = event.target;
        if (target.matches(".discount-btn")) {
            popupDiscountForm.style.display = "block";
            return; 
        };

        if (target.matches(".call-btn")) {
            popupCallForm.style.display = "block";
            return;
        };

        if(target.matches(".popup-close") || (!target.closest(".capture-form")))  {
            popupDiscountForm.style.display = "none";
            popupCallForm.style.display = "none";

        };

        
    });
    
};

export default popup;