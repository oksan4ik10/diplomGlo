const popupCall = () =>{
    const callBtn = document.querySelectorAll(".call-btn"),
    popupCall = document.querySelector(".popup-call");
    
    
    callBtn.forEach((elem) =>{
        elem.addEventListener("click", (event)=>{
            popupCall.style.display = "block";
        })
    });

    popupCall.addEventListener("click", (event) =>{
        const target = event.target;

        if(target.matches(".popup-close") || (!target.closest(".capture-form")))  popupCall.style.display = "none";
       
        
    })   

}

export default popupCall;