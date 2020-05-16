'use strict';
const popup = () =>{
    const popupDiscountForm = document.querySelector(".popup-discount"),
    popupCallForm = document.querySelector(".popup-call"),
    popupCheck = document.querySelector(".popup-check");

    document.addEventListener("click", (event) =>{
        event.preventDefault();
        const target = event.target;
        if (target.matches(".discount-btn")) {
            popupDiscountForm.style.display = "block";
            return; 
        };

        if (target.matches(".call-btn")) {
            popupCallForm.style.display = "block";
            return;
        };

        if(target.matches(".check-btn")){
            popupCheck.style.display = "block";
            return;
        }

        if(target.matches(".popup-close") || (!target.closest(".capture-form")))  {
            popupDiscountForm.style.display = "none";
            popupCallForm.style.display = "none";
            popupCheck.style.display = "none";

        };

        
    });
    
};

export default popup;