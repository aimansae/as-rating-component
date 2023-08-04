const clickedNnum = document.getElementsByClassName("rating-btn");
console.log(clickedNnum);
const form = document.getElementById("feedbackForm");



const ratingArray = [...clickedNnum];
let clickedButtonValue = "";

ratingArray.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonValue = button.value;
        console.log(buttonValue);

        clickedButtonValue = buttonValue;

        //Remove
        ratingArray.forEach((btn) => {
            btn.classList.remove("clicked");
        });

        // add
        button.classList.add("clicked");

    });
})

form.addEventListener("submit", (event) => {
    const errorMessage= document.getElementById('error-container')
    localStorage.setItem('clickedButtonValue', clickedButtonValue);
    console.log('checking', clickedButtonValue)
    event.preventDefault();

    if (clickedButtonValue) {
                // Submit the form to the message.html page

        window.location = "message.html"
    } else {
        errorMessage.textContent = "Please select an option before submitting the form.";

        setTimeout(() => {
            errorMessage.textContent = ""
        }, 3000)
    }
});
