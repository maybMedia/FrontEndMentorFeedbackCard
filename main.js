const rateBtns = document.querySelector('.rate-btns');
const field = document.getElementById('result');
const submitBtn = document.querySelector('.submit');
const warning = document.getElementById('warning');
const form = document.querySelector('.feedback-container');
const ty = document.querySelector('.thank-you-container');
const formElement = document.querySelector('.feedback-form');

rateBtns.addEventListener('click', e => {
    // Detects which button was clicked
    const targetValue = e.target.closest('.rate-btn');
    if(!targetValue)return;

    // Removes the warning
    if(!warning.classList.contains('hide'))warning.classList.add('hide');

    // Removes the selected tag from any previously selected button
    const alreadySelected = rateBtns.querySelector('.selected');
    if(alreadySelected){alreadySelected.classList.remove('selected');}

    // Adds selected tag to the selected button
    targetValue.classList.add('selected');

    // Stores the value of the selected button and updates the value accordingly
    score = targetValue.id;
    field.innerHTML = '&nbsp;'+score+'&nbsp;';
});

submitBtn.addEventListener('click', e => {
    // Checks if a rate button was clicked
    if(!document.querySelector('.selected')){
        warning.classList.remove('hide')
        return;
    }

    // Hides the form and shows the thank you page with a nice animation.
    formElement.classList.remove('animate__backInRight');
    formElement.classList.add('animate__backOutLeft');
    formElement.addEventListener('animationend' || await(700), () => {
        form.classList.add('hide');
        ty.classList.remove('hide');
    })
});
