const upvote1 = document.getElementById("upvote1");
const downvote1 = document.getElementById("downvote1");
const count1text = document.getElementById("count1");

let count1 = 32;
let click1 = false;

// Add a click event listener to the image
upvote1.addEventListener("click", function () {
    if(!click1){
	    count1++;
	    count1text.textContent = count1;
	    click1 = true;
    }
});

downvote1.addEventListener("click", function () {
    if(!click1){
	    count1 = count1-1;
	    count1text.textContent = count1;
	    click1 = true;
    }
});

const upvote2 = document.getElementById("upvote2");
const downvote2 = document.getElementById("downvote2");
const count2text = document.getElementById("count2");

let count2 = 42;
let click2 = false;

// Add a click event listener to the image
upvote2.addEventListener("click", function () {
    if(!click2){
	    count2++;
	    count2text.textContent = count2;
	    click2 = true;
    }
});

downvote2.addEventListener("click", function () {
    if(!click2){
	    count2 = count2-1;
	    count2text.textContent = count2;
	    click2 = true;
    }
});

// Get references to the open button, close button, and popup
const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("closePopup");
const questionPopup = document.getElementById("questionPopup");

// Add click event listener to open the popup
openPopupButton.addEventListener("click", function () {
    questionPopup.style.display = "block";
});

// Add click event listener to close the popup
closePopupButton.addEventListener("click", function () {
    questionPopup.style.display = "none";
});

// Handle form submission
const questionForm = document.getElementById("questionForm");

questionForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting and page reloading

    // Close the popup
    questionPopup.style.display = "none";
});

// Get references to all buttons that open the answer popup
const openAnswerPopupButtons = document.querySelectorAll(".answer");
const closeAnswerPopupButton = document.getElementById("closeAnswerPopup");
const answerPopup = document.getElementById("answerPopup");

// Add click event listeners to open the answer popup for all buttons
openAnswerPopupButtons.forEach((openButton) => {
    openButton.addEventListener("click", function () {
        answerPopup.style.display = "block";
    });
});

// Add click event listener to close the answer popup
closeAnswerPopupButton.addEventListener("click", function () {
    answerPopup.style.display = "none";
});

// Handle form submission for posting an answer
const answerForm = document.getElementById("answerForm");

answerForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting and page reloading

    // Close the answer popup
    answerPopup.style.display = "none";
    // You can add code here to handle posting the answer
});

const upvote3 = document.getElementById("upvote3");
const downvote3 = document.getElementById("downvote3");
const count3text = document.getElementById("count3");

let count3 = 50;
let click3 = false;

// Add a click event listener to the image
upvote3.addEventListener("click", function () {
    if(!click3){
	    count3++;
	    count3text.textContent = count3;
	    click3 = true;
    }
});

downvote3.addEventListener("click", function () {
    if(!click3){
	    count3 = count3-1;
	    count3text.textContent = count3;
	    click3 = true;
    }
});



