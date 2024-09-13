const profilePicture = document.getElementById("default-profile-picture");
const inputPicture = document.getElementById("profile-icon");
inputPicture.addEventListener("change", () => {
  profilePicture.src = URL.createObjectURL(inputPicture.files[0]);
});

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