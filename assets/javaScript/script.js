console.log('hello');

const button = document.querySelector('.lastbutton');
const name = document.querySelector('#yourName');
const email = document.querySelector('#yourEmail');
const passes = document.querySelector('#noPasses');
const comment = document.querySelector('#comment');


button.addEventListener('click',function (e){
    e.preventDefault();

    nameValue = name.value;
    emailValue = email.value;
    passesValue = passes.value;
    commentValue = comment.value;

    console.log(nameValue,emailValue,passesValue,commentValue);
    console.log('i am clicked');
});
