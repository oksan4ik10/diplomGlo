    //сброс всех данных

    const resetCalcForm = ()=>{
        const myonoffswitchTwo = document.getElementById("myonoffswitch-two"),
        formControl = collapseTwo.querySelectorAll(".form-control"),
        myonoffswitch = document.getElementById("myonoffswitch"),
        calcResult = document.getElementById("calc-result"),
        collapseFour = document.getElementById("collapseFour").querySelector("input");

        collapseFour.value = "";
        calcResult.value = "";
        myonoffswitch.setAttribute("checked","");
        myonoffswitchTwo.removeAttribute("checked");
        formControl.forEach((el) =>{            
         el.options.selectedIndex = 0;
        })
        
    }

    export default resetCalcForm;