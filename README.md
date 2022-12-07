# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

I successfully completed this FrontEnd Mentor challenge on the 7/12/22. I am satisfied with my solution, any and all feedback is greatly appreciated!

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Feedback Form Solution](./solution/FeedbackFormSolution.png)
![Thank You State Solution](./solution/ThankYouStateSolution.png)

### Links

- Solution URL: [Front End Mentor Feedback Card - GitHub](https://github.com/maybMedia/FrontEndMentorFeedbackCard)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

I began working on this solution by placing the given information into the fitting elements. I then began working on styling the feedback form and then the thank you screen. Then I created the JavaScript which runs the component, storing the selected value and changing the shown state. Finally I added animations to the page.

### Built with

- [Animate.css](https://animate.style/) - CSS animations
- HTML
- CSS
- Flexbox
- Mobile-first workflow

### What I learned

Completing this solution allowed me to deepen my understanding of JavaScript being used in conjunction with HTML and CSS and I am happy that my solution is relatively simple and lightweight. I also discovered the '&nbsp;' character which I'm sure will be useful in future endeavors.

My solution to storing and updating the value:

```js
rateBtns.addEventListener('click', e => {
    // Detects which button was clicked
    const targetValue = e.target.closest('.rate-btn');
    if(!targetValue)return;

    // Removes the warning
    if(!warning.classList.contains('hide'))warning.classList.add('hide');

    // Removes the selected tag from any previously selected button
    const alreadySelected = rateBtns.querySelector('.selected');
    if(alreadySelected){alreadySelected.classList.remove('selected');};

    // Adds selected tag to the selected button
    targetValue.classList.add('selected');

    // Stores the value of the selected button and updates the value accordingly
    score = targetValue.id;
    field.innerHTML = '&nbsp;'+score+'&nbsp;';
});
```

### Continued development

I will definitely be exploring more functions of JavaScript in future projects. I would also like to explore the importing of more packages like the animations used in this project.

### Useful resources

- [Change Text in p tag JavaScript](https://tutorial.eyehunts.com/js/change-text-in-p-tag-javascript-easy-html-example-code/) - This article gave me the necessary information to successfully and effectively change the text displayed in the corresponding element.
- [:hover does not seem to be working on custom buttons](https://stackoverflow.com/questions/14879336/hover-does-not-seem-to-be-working-on-custom-buttons) - This allowed me to fix the issues I had with hover styles not functioning completely.

## Author

- Frontend Mentor - [@TigerPC](https://www.frontendmentor.io/profile/TigerPC)
- GitHub - [@maybMedia](https://github.com/maybMedia)

## Acknowledgments

The animations used in this project are inspired by [@vcarames](https://www.frontendmentor.io/profile/vcarames) solution to a product preview card challenge.
