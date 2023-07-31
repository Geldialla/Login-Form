'use strict';
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconCloseButtons = document.querySelectorAll('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});


for (let btn of iconCloseButtons) {
    btn.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
    });
}


// const email = document.querySelectorAll('.email');

// function validEmail (email) {
//     let pattern = /[a-z0-9\-\_\.]+@[a-z0-9\-\_\.]+\.[a-z]+/
//     return pattern.test(email);
// }


var validEmail = function (email) {

    let pattern = /[a-z0-9\-\_\.]+@[a-z0-9\-\_\.]+\.[a-z]+/
    
    if (document.getElementsByClassName('.email').value ==
    document.getElementById('checkEmail')) {
        document.getElementById('alertEmail').style.color = '#3aa832';
        document.getElementById('alertEmail').innerHTML =
        '<span><i class="fas fa-check-circle"></i>Match !</span>';
    } else {
        document.getElementById('alertEmail').style.color = '#ee2b39 ';
        document.getElementById('alertEmail').innerHTML =
        '<span><i class="fas fa-exclamation-triangle"></i>not matching</span>';
    }
    return pattern.test(email);
}

let email = document.getElementsByClassName('.email')
email = "geldiallaal@gmail.com";


// console.log(validEmail(`geldiallaal@gmail.com`));