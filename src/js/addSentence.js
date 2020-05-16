'use strict';
const addSentence = () =>{
    const popupDiscountForm = document.querySelectorAll(".shadow-block"),
    addSentenceBtn = document.querySelector(".add-sentence-btn");
    addSentenceBtn.addEventListener("click", (event) =>{
        popupDiscountForm.forEach((el) =>{
            el.parentElement.classList.remove("hidden");
            el.parentElement.classList.remove("visible-sm-block");
            addSentenceBtn.classList.add("hidden");
        })
    })
    
}

export default addSentence;