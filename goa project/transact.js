let loanSection=document.getElementsByClassName("loan")[0]
let consumerLoan=document.getElementsByClassName("choice-consumer-loan")[0]
let onlineInstal=document.getElementsByClassName("choice-online-installments")[0]

let choice=document.getElementsByClassName("choice")[0]

function consumerFunc(){
    choice.style.display="none"
    consumerLoan.style.display="flex"

}
function installment(){
    choice.style.display="none"
    onlineInstal.style.display="block"
}




//  currency covertion

let valutesBox=document.getElementsByClassName("valutes-box")[0]
let valutesBox2=document.getElementsByClassName("valutes-box2")[0]
console.log(valutesBox.querySelectorAll("span"))
for(let char of valutesBox.querySelectorAll("span")){
    char.addEventListener("click", function(){
        for(let e of valutesBox.querySelectorAll("span")){
            e.style.background="none"
            e.style.color="white"
        }
        if(char.style.backgroundColor!="white"){
            char.style.backgroundColor="white"
            char.style.color="#18204B"
            return
        }if(char.style.backgroundColor=="white"){
            char.style.background="none"
            char.style.color="white"

        }
    })
}
for(let char of valutesBox2.querySelectorAll("span")){
    char.addEventListener("click", function(){
        for(let e of valutesBox2.querySelectorAll("span")){
            e.style.background="none"
            e.style.color="white"
        }
        if(char.style.backgroundColor!="white"){
            char.style.backgroundColor="white"
            char.style.color="#18204B"
            return
        }if(char.style.backgroundColor=="white"){
            char.style.background="none"
            char.style.color="white"

        }
    })
}


function currencyCalc(){
    const from=document.getElementById("convert").value
    const to=document.getElementById("converted")
    
    const currencyObj={
        "₾" :{
            "₾" : "1",
            "$" : "0.37",
            "€" : "0.36",
            "£" : "0.277"
        },
        "$" :{
            "₾" : "2.66",
            "$" : "1",
            "€" : "0.87",
            "£" : "0.73"
        },
        "€" :{
            "₾" : "2.91",
            "$" : "1.06",
            "€" : "1",
            "£" : "0.8"
        },
        "£" :{
            "₾" : "3.45",
            "$" : "1.26",
            "€" : "1.13",
            "£" : "1"
        }
    }

    for(let char of valutesBox.querySelectorAll("span")){
        if(char.style.backgroundColor=="white"){
            const firstValute=char.textContent
            console.log(firstValute)
            for(let e of valutesBox2.querySelectorAll("span")){
                if(e.style.backgroundColor=="white"){
                    const secondValute=e.textContent
                    console.log(secondValute)
                    const result = parseFloat(from) * parseFloat(currencyObj[firstValute][secondValute])
                    console.log(result)
                    to.value=result
                }

            }

        }
    }



    
    // const finalConvert = parseFloat(from) * currencyObj[firstValute][secondValute]
}

// const signIn = document.getElementById("sign-in");
// const signUp = document.getElementById("sign-up");

// const formDisplay = document.getElementById("form-catcher");

// let formIsClicked = false;
// let formIsClicked1 = false;

// signUp.addEventListener('click', function(){
//     formIsClicked = !formIsClicked;
//     if(formIsClicked){
//         formDisplay.style.display = "flex";
//         setTimeout(() => {
//             formDisplay.classList.add("display");
//         }, 10);
//     }else{
//         formDisplay.classList.remove("display");
//         setTimeout(() => {
//             formDisplay.style.display = "none";
//         }, 500);
//     }
// })



// const logInForm = document.getElementById("log-form");
// signIn.addEventListener("click", function(){
//     formIsClicked1 = !formIsClicked1;
//     if(formIsClicked1){
//         logInForm.style.display = "flex";
//         setTimeout(() => {
//             logInForm.classList.add("display1");
//         }, 10);
//     }else{
//         logInForm.classList.remove("display1");
//         setTimeout(() => {
//             logInForm.style.display = "none";
//         }, 500);
//     }
// });

// const likaMenu = document.getElementById("lika-menu");
// const hrefs = document.getElementById("hrefs-display");
// let likaMenuClick = false;

// likaMenu.addEventListener("click", function(){
//     likaMenuClick = !likaMenuClick;
//     if(likaMenuClick){
//         hrefs.style.display = "flex";
//     }else{
//         hrefs.style.display = "none"
//     }
// })