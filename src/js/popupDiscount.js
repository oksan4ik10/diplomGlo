'use strict';
const popupDiscount = () =>{
    
    const discountBtn = document.querySelectorAll(".discount-btn"),
    popupDiscountForm = document.querySelector(".popup-discount");

    discountBtn.forEach((el) =>{
        el.addEventListener("click", () =>{
            popupDiscountForm.style.display = "block";
        })
    });

    popupDiscountForm.addEventListener("click", (event) =>{
        const target = event.target;

        if(target.matches(".popup-close") || (!target.closest(".capture-form")))  popupDiscountForm.style.display = "none";
       
        
    });   
    
}
export default popupDiscount;