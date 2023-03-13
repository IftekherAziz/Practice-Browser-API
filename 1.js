const getNumber = () => {
    // Get a number from the user
    let numberStr = prompt("Please enter a number:");

    // Convert the number string to a number and add 200
    let number = parseFloat(numberStr) + 200;

    // Display the result using an alert
    alert("The result is: " + number);


};

const confirmHere = () => {
    // Display a confirm dialog
    confirm("Are you sure to know the location of your website?");

    // Assign the website address
    let website = "http://127.0.0.1:5500/1.html";

    // Display the result using an alert
    alert("Your website location is: " + website);
};