

// ------------------------------------------NOT MY SHIT--------------------------------------------------------------------
// document.querySelector('.select-selected').addEventListener('click', function() {
//     this.nextElementSibling.classList.toggle('select-hide');
// });

// document.querySelectorAll('.select-items div').forEach(function(item) {
//     item.addEventListener('click', function() {
//         var selected = this.parentNode.previousElementSibling;
//         selected.textContent = this.textContent;
//         selected.setAttribute('data-value', this.getAttribute('data-value'));
//         this.parentNode.classList.add('select-hide');
//     });
// });

// document.addEventListener('click', function(e) {
//     if (!e.target.matches('.select-selected')) {
//         var dropdowns = document.querySelectorAll('.select-items');
//         dropdowns.forEach(function(dropdown) {
//             if (!dropdown.classList.contains('select-hide')) {
//                 dropdown.classList.add('select-hide');
//             }
//         });
//     }
// });
// // --------------------------------------------------------------------------------------------------------------
// // phone.style.display = "None"
// // const botButton = document.getElementById("ON/OFF")
// // const phone = document.getElementById("silverPhone")
// // botButton.addEventListener('click', () => {
// //     phone.style.display = "None"
// // })
// // const open = () => {

// // }


// const botButton = document.getElementById("ON/OFF");
// const phone = document.getElementById("silverPhone") ;  

// let botIsClicked = false;

// botButton.addEventListener('click', function() {
//     botIsClicked = !botIsClicked;
//     if (botIsClicked) {
//         phone.style.display = 'block';
//         botButton.style.display = 'none';
//     } else {
//         phone.style.display = 'none';
//         botButton.style.display === 'none';
//     }
// });


// // ------------------------------------BOT LOGIC--------------------------------------------------------------------------
// const  but  = document.getElementById('send-btn')

// document.getElementById('send-btn').addEventListener('click', function() {
//     const userInput = document.getElementById('user-input').value;
    
//     if (userInput.trim() !== "") {
//         addMessage(userInput, 'user-message');
//         botResponse(userInput);
//         document.getElementById('user-input').value = ''; 
//     }
// });

// // enter
// // document.querySelector('#txtSearch').addEventListener('keypress', function (e) {
// //     if (e.key === 'Enter') {
// //         but.click()
// //     }
// // });


// function addMessage(text, className) {
//     const chatBox = document.getElementById('chat-box');
//     const messageDiv = document.createElement('div');
//     messageDiv.className = `chat-message ${className}`;
//     messageDiv.textContent = text;
//     chatBox.appendChild(messageDiv);
//     chatBox.scrollTop = chatBox.scrollHeight; 

// }

// function botResponse(userInput) {
//     let botMessage = '';

//     if(userInput.toLowerCase() === "profile"){
//         botMessage = "Okay";
//         setInterval(() => {
//             profile.click();
//         }, 1500);
//         return ""
//     }
    
//     if (userInput.toLowerCase().includes('hello')) {

//         botMessage = 'Hello! How can I help you today?';

//     } else if (userInput.toLowerCase().includes('price')) {
//         botMessage = 'Prices vary depending on the hotel. Can you specify which hotel?';
//     } else if (userInput === 'გამოსვლა'){
//         setTimeout(() => {
//             botButton.style.display = 'block'
//             phone.style.display = 'none';            
//         }, 500);
//         return "";

//     }

//      else {
//         botMessage = "I'm not sure how to respond to that.";
//     }

//     setTimeout(() => addMessage(botMessage, 'bot-message'), 500); 

// }
// function updateClock() {
//     const t = new Date();
//     let hours = t.getHours();
//     let minutes = t.getMinutes();
//     if (minutes < 10) {
//         minutes = '0' + minutes;
//     }
//     if (hours < 10) {
//         hours = '0' + hours;
//     }
//     document.getElementById("clock").value = `${hours}:${minutes}`;
//     document.getElementById("clock").style.color = "white";
// }



// updateClock();
// setInterval(updateClock, 1000);

// // --------------------------------------------------------------------------------------------------------------


// const animBtns = document.getElementById("anim")

// let slideIndex = 0;
// let intervalId = null;

// let slides = document.getElementsByClassName("firstSectionMainDivChild");
// document.addEventListener("DOMContentLoaded", initializeSlider);

// function initializeSlider(){
//     if(slides.length > 0){
//         slides[slideIndex].classList.add("displaySlide");
//         intervalId = setInterval(nextSlide, 5000);
//     }
// }

// function showSlide(index){
//     if(index >= slides.length){
//         slideIndex = 0;
//     }
//     else if(index < 0){
//         slideIndex = slides.length - 1;
//     }

//     for(let slide of slides){
//         slide.classList.remove("displaySlide")
//     }

//     slides[slideIndex].classList.add("displaySlide");
// }

// function prevSlide(){
//     clearInterval(intervalId);
//     slideIndex--;
//     showSlide(slideIndex);
// }

// function nextSlide(){
//     slideIndex++;
//     showSlide(slideIndex);
// }




// const euroExchange = document.getElementById("euro-exchange");
// const gelExchange = document.getElementById("gel-exchange");
// const dollarExchange = document.getElementById("dollar-exchange");

// const loamAmountNumber = document.getElementById("loan-amount-number");
// const repaymentNumber = document.getElementById("monthly-repayment-number");
// const annualInterest = document.getElementById("annual-interest");
// const effectiveInterest = document.getElementById("effective-interest");

// const loanAmountInput = document.getElementById("loan-amount-input");
// const loanPeriod = document.getElementsByClassName("loan-period");

// const mortage = document.getElementById("mortage");
// const consumer = document.getElementById("consumer");

// consumer.addEventListener("click", function(){
//     euroExchange.style.display = "none";
//     dollarExchange.style.display = "none";
//     repaymentNumber.innerHTML = "507.48 ₾";
//     loamAmountNumber.innerHTML = "1500 ₾";
// });
// mortage.addEventListener("click", function(){
//     euroExchange.style.display = "inline-block";
//     dollarExchange.style.display = "inline-block"
//     gelExchange.style.display = "inline-block";
//     repaymentNumber.innerHTML = "133.92 €";
//     loamAmountNumber.innerHTML = "1500 €";
// });

// let currencyNumber = 1;

// gelExchange.addEventListener('click', function(){
//     loamAmountNumber.innerHTML = "1500 ₾";
//     repaymentNumber.innerHTML = "130.88 ₾";
//     annualInterest.innerHTML = "FROM 8.57%";
//     effectiveInterest.innerHTML = "FROM 10.61%";
//     currencyNumber = 2;
// });
// euroExchange.addEventListener('click', function(){
//     loamAmountNumber.innerHTML = "1500 €";
//     repaymentNumber.innerHTML = "133.92 €";
//     annualInterest.innerHTML = "FROM 12.92%";
//     effectiveInterest.innerHTML = "FROM 14.85%";
//     currencyNumber = 1;
// });
// dollarExchange.addEventListener('click', function(){
//     loamAmountNumber.innerHTML = "1500 $";
//     repaymentNumber.innerHTML = "132.21 $";
//     annualInterest.innerHTML = "FROM 10.48%";
//     effectiveInterest.innerHTML = "FROM 12.48%";
//     currencyNumber = 3;
// });

// let loanPeriodNumber = 0;

// for(let i=0; i<loanPeriod.length; i++){
//     loanPeriod[i].addEventListener("click", function(){
//         loanPeriodNumber = i + 1;
//     })
// }

// const calculateLoan = document.getElementById("calculate-loan");
// calculateLoan.addEventListener("click", function(){
//     if(currencyNumber === 1){
//         let number = Number(loanAmountInput.value) / (loanPeriodNumber * 12);
//         repaymentNumber.innerHTML = parseFloat(number + number * (13 / 100)).toFixed(2) + " €";
//     }
//     if(currencyNumber === 2){
//         let number = Number(loanAmountInput.value) / (loanPeriodNumber * 12);
//         repaymentNumber.innerHTML = parseFloat(number + number * (9 / 100)).toFixed(2) + " ₾";
//     }
//     if(currencyNumber === 3){
//         let number = Number(loanAmountInput.value) / (loanPeriodNumber * 12);
//         repaymentNumber.innerHTML = parseFloat(number + number * (12 / 100)).toFixed(2) + " ₾";
//     }
// })


// const suggest = document.getElementById("suggest-page-href");
// const transact = document.getElementById("transaction-page-href");
// const home = document.getElementById("home-page-href");
// const profile = document.getElementById("profile-page-href");


// const homePage = document.getElementById("home-page");
// const suggestPage = document.getElementById("suggest-page");
// const profilePage = document.getElementById("profile-page");
// const currencyPage = document.getElementById("currency-page");
// const transactionPage = document.getElementById("transaction-page");

// const link = document.getElementById('stylesheet');
// const script = document.getElementById("script");


// suggest.addEventListener("click", function(){
//     suggestPage.style.display = "block";
//     homePage.style.display = "none";
//     profilePage.style.display = "none";
//     transactionPage.style.display = "none";
//     link.href = "suggest.css";
//     console.log(link.href);
// });
// transact.addEventListener("click", function(){
//     transactionPage.style.display = "flex";
//     homePage.style.display = "none";
//     profilePage.style.display = "none";
//     suggestPage.style.display = "none";
//     link.href = "transaction.css";
//     script.src = "transact.js";
//     console.log(link.href);
// });
// home.addEventListener("click", function(){
//     homePage.style.display = "block";
//     transactionPage.style.display = "none";
//     profilePage.style.display = "none";
//     suggestPage.style.display = "none";
//     link.href = "style.css";
//     script.src = "script.js";
//     console.log(link.href);
// });
// profile.addEventListener("click", function(){
//     profilePage.style.display = "block";
//     transactionPage.style.display = "none";
//     homePage.style.display = "none";
//     suggestPage.style.display = "none";
//     link.href = "profile.css";
//     console.log(link.href);
// });

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
// });









//REGISTRATION -----------------------------------------

// const signInButton = document.getElementById("log-finish")
//             const personUsername = document.getElementById("person-username")

//             signInButton.addEventListener("submit", function(e){
//                 e.preventDefault();
//                 personUsername.innerHTML = `${userNameAfterLogIn.value}`;
//             })