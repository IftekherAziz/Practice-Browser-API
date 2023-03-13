// Get the count element and the increment button
const countElement = document.getElementById('count');
const incrementButton = document.getElementById('increment');

// Check if there is a value in local storage
let count = localStorage.getItem('count');

// If there is no value in local storage, set the count to 0
if (!count) {
    count = 0;
}

// Set the count element to the count
countElement.innerText = count;

// Add an event listener to the increment button
incrementButton.addEventListener('click', () => {
    // Increment the count
    count++;

    // Set the count element to the count
    countElement.innerText = count;

    // Save the count to local storage
    localStorage.setItem('count', count);
});