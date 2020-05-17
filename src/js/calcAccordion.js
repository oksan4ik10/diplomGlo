"use strict";
const calcAccordion = (callback)=>{

    const accordionCalc = document.getElementById("accordion"),
    selectBox = document.querySelectorAll(".select-box"),
    titleText = document.querySelectorAll(".title-text")[1],
    calcResult = document.getElementById("calc-result"),
    collapseTwo = document.getElementById("collapseTwo"),
    myonoffswitchTwo = document.getElementById("myonoffswitch-two");
    
    myonoffswitchTwo.removeAttribute("checked");

    let calcRes = 10000,
    checkBottom = false,
    calcAdd = 10000,
    dataCalc = {
        bottom: "no",
        onoffswitch: 1

    };

    accordionCalc.addEventListener("click", (event)=>{
        const target = event.target;
  
        if(!target.closest("#collapseThree")) calcRes = second(calcAdd);
        //смена чекбокса        
        if (target.closest(".onoffswitch")) {
            const onoffswitch = target.closest(".onoffswitch"),
            inputCheck = onoffswitch.querySelector("input");
                    if (target.matches("span")) {
                        if (inputCheck.hasAttribute("checked")) {
                            inputCheck.removeAttribute("checked");
                            if (target.closest("#collapseOne")) {
                                showBlock();
                                calcAdd = 15000;
                                checkBottom = true;
                                reset();
                                calcRes = second(calcAdd);
                                dataCalc["onoffswitch"] = 2;
                            }
                            if ((target.closest("#collapseThree"))&& checkBottom) calcRes -=2000;

                            if ((target.closest("#collapseThree"))&& !checkBottom) calcRes -=1000;
                            if (target.closest("#collapseThree")) dataCalc["bottom"] = "no";
                           
                        }
                        else {
                            inputCheck.setAttribute("checked","")

                            if (target.closest("#collapseOne")) {
                                hideBlock();
                                calcAdd = 10000;
                                checkBottom = false;
                                reset();
                                calcRes = second(calcAdd);
                                dataCalc["onoffswitch"] = 1;
                            }
                            if ((target.closest("#collapseThree"))&& checkBottom) calcRes +=2000;
                            if ((target.closest("#collapseThree"))&& !checkBottom) calcRes +=1000;
                            if (target.closest("#collapseThree"))  dataCalc["bottom"] = "yes";

                        }
    
                    }
                 
        }
    
        //переход по кнопкам "следующий шаг"
        if (target.closest(".construct-btn")) {

            //отправка данных
            if (target.matches(".call-btn")) {
                event.preventDefault();
                addData(); //считывает данные со второго шага калькулятора
                const collapseFourInput = document.getElementById("collapseFour").querySelector("input");

                dataCalc["distance"] = collapseFourInput.value;
                
                callback(dataCalc);
                return;

            }
            event.preventDefault();
            
            const targetPanel = target.closest(".panel-collapse");
            targetPanel.classList.remove("in");

            const targetNextPanel = targetPanel.closest(".panel").nextElementSibling;
            targetNextPanel.querySelector(".panel-collapse").classList.add("in")
        };
        

        
        calcResult.value = calcRes;
        

    })

    const formControl = collapseTwo.querySelectorAll(".form-control");
    //подсчет данных на втором шаге
    const second = (res)=>{
        
        let countMeter = 0,
        countThingTwo = 0,
        countThingThree = 0;
        formControl.forEach((el) =>{
            if (el.value === "2 метра") countMeter++ ;
            if (el.value === "2 штуки") countThingTwo++;
            if (el.value === "3 штуки") countThingThree++;

        });

        res = res + res * countMeter * 0.2 + res * countThingTwo * 0.3 + res * countThingThree * 0.5;

        return res;
    }

    //сброс всех данных
    const reset = ()=>{
        myonoffswitchTwo.removeAttribute("checked");
        formControl.forEach((el) =>{
            el.value =el.options[0];
            // el.setAttribute("selected","first");
            // el.options[0].setAttribute("value","first");         
        })
        
        

    }
    // reset();

    //получение данных со второго шага в объект
    const addData = () =>{
        for (let index = 0; index < formControl.length; index++) {
            const element = formControl[index];
            if ((!checkBottom) && (index > 1)) break;         
            dataCalc[`options ${index+1}`] = element.value;
            
        }
    }
    addData();


      //показ и скрытие блока для второго пункта
  
    const hideBlock =   ()=> {
        titleText.style.display = "none";
        for (let index = 0; index < selectBox.length; index++) {
            const element = selectBox[index];
            if (index > 1) element.style.display = "none";
        }
    }
    const showBlock = () =>{
        titleText.style.display = "block";
        for (let index = 0; index < selectBox.length; index++) {
            const element = selectBox[index];
            if (index > 1) element.style.display = "inline-block";
        }
    }
    hideBlock ();

}

export default calcAccordion;