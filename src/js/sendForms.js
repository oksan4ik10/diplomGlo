'use strict';
const sendForms = () =>{
    const captureForm = document.querySelector(".capture-form"),
    mainForm = document.querySelector(".main-form");


    const messageTextLoad = "Отправка...",
    messageTextError = "Ошибка",
    messageTextsSend = "Отправлено";
 
    function createElemMessage (){
        const elem = document.createElement ("p");
        elem.classList.add("message-text");
        elem.style.cssText = "font-size: 1.5em; color: grey;"
        elem.textContent = messageTextLoad;
       return elem;
    }
    const message = createElemMessage();    

    
    function sendForm (form){
            
        if (!form.querySelector(".message-text"))form.append(message);     

         //проверка на телефон
         const phoneForm = form.querySelector(".phone-user");

         if (!/\+|\d{8,18}/g.test(phoneForm.value)){
            message.textContent = "Телефон введен неверно"
            return;git 

        }

       message.textContent = messageTextLoad;
        //забираем данные с формы
        let body = {};
        const formData = new FormData(form);
        formData.forEach((val, key) => {
            body[key] = val;            
        });

        //соединение с сервером
        postData (body)
            .then(res =>{
                if (res.status === 200)  {
                  
                        //очищене полей формы после отправки
                        formData.forEach((val, key) => {
                        const input = form.querySelector(`[name=${key}]`);
                        input.value = "";
                        });
                       
                    message.textContent = messageTextsSend;

                }
                else throw new Error ("Ошибка");
            })

            .catch (()=>{
                message.textContent = messageTextError;
            });



    }

    //отправка данных с формы на сервер
    const postData = body => fetch("server.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    });



    captureForm.addEventListener("click", (event)=>{
        event.preventDefault();
        const target = event.target;
        if (!target.matches(".capture-form-btn")) return;
        sendForm(captureForm);
        
    });
    
    
    mainForm.addEventListener("click", (event)=>{
        event.preventDefault();
        const target = event.target;
        if (!target.matches(".main-form-btn")) return;
        sendForm(mainForm);
        
    })



    //запрет ввода данных
    const phoneUser = document.querySelectorAll(".phone-user"), 
    userName = document.querySelectorAll("[name=user_name]");
    phoneUser.forEach((el) =>{
        el.addEventListener("input", ()=>{
            el.value = el.value.replace(/[^0-9\+]/g,"");
        })
    })
    userName.forEach((el) =>{
        el.addEventListener("input", ()=>{
            el.value = el.value.replace(/[^А-Я\s]/i,"");
        })
        
       
    })
    

}

export default sendForms;