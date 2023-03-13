// Get input from the input element:
const nameInput = document.getElementById('name');

// set event listeners for send name button and set the value to the local storage:
const sendNameButton = document.getElementById('send-name');
sendNameButton.addEventListener('click', () => {
    localStorage.setItem('name', nameInput.value);
});

// set event listeners for the delete name button and remove the value from the local storage:
const deleteNameButton = document.getElementById('delete-name');
deleteNameButton.addEventListener('click', () => {
    localStorage.removeItem('name');
});

/* ----------------------Email------------------------ */

// get the email input element:
const emailInput = document.getElementById('email');

// set event listeners for send email button and set the value to the local storage:
const sendEmailButton = document.getElementById('send-email');
sendEmailButton.addEventListener('click', () => {
    localStorage.setItem('email', emailInput.value);
});

// set event listeners for the delete email button and remove the value from the local storage:
const deleteEmailButton = document.getElementById('delete-email');
deleteEmailButton.addEventListener('click', () => {
    localStorage.removeItem('email');
});

/* ---------------------Message-------------------------- */

// get the message input element:
const messageInput = document.getElementById('message');

// set event listeners for send message button and set the value to the local storage:
const sendMessageButton = document.getElementById('send-message');
sendMessageButton.addEventListener('click', () => {
    localStorage.setItem('message', messageInput.value);
});

// set event listeners for the delete message button and remove the value from the local storage:
const deleteMessageButton = document.getElementById('delete-message');
deleteMessageButton.addEventListener('click', () => {
    localStorage.removeItem('message');
});
/* ----------------------Send All------------------------------ */
// set event listeners for the send all button and set all the values to the local storage:
const sendAllButton = document.getElementById('send-all');
sendAllButton.addEventListener('click', () => {
    localStorage.setItem('name', nameInput.value);
    localStorage.setItem('email', emailInput.value);
    localStorage.setItem('message', messageInput.value);
});

/* ---------------------Reset Data-------------------------- */

// set event listeners for the reset data button and remove all the values from the local storage:
const resetDataButton = document.getElementById('reset');
resetDataButton.addEventListener('click', () => {
    localStorage.clear();
});