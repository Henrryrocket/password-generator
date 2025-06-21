const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15;
let password = "";
let placeholderText = "Click the button to generate a password.";
// Get the password display element and button
let passwordElement = document.getElementById("password-display-text");
let passwordButton = document.getElementById("generate-password-button");
let copyButton = document.getElementById("copy-password-button");
// Set the initial placeholder text
passwordElement.textContent = placeholderText;

//Hide copy button initially
copyButton.style.display = "none";

// Add an event listener to the button to generate a password when clicked and change the placeholder text
passwordButton.addEventListener("click", function() {
    // Clear the previous password
    password = "";
    // Generate a random password
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    // Update the password display element with the generated password
    passwordElement.textContent = password;
    copyButton.style.display = "block";     
});

// add copy button functionality whe user click password

copyButton.addEventListener("click", function() {
    // Create a temporary textarea element to copy the password
    let tempTextArea = document.createElement("textarea");
    tempTextArea.value = password; 
    document.body.appendChild(tempTextArea); 
    tempTextArea.select(); 
    document.execCommand("copy"); 
    document.body.removeChild(tempTextArea); // Remove the temporary textarea

    // Optionally, you can change the button text or show a message
    copyButton.textContent = "Copied!";
    setTimeout(() => {
        copyButton.textContent = "Copy Password"; // Reset after 2 seconds
    }, 2000);
});
