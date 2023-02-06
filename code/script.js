// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const nameInput = document.getElementById('name-input');
const sendBtn = document.getElementById('send')
// If you need any global variables that you can use across different functions, declare them here:
//This will be let variables, to be able to have different numbers on question to keep track


// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
//without the ${message} the actual message(parameter) in const greetUser will not be passed, only string message. Only the parameter 'bot' 
function showMessage(message, sender) {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log("Now the user is replying");
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `;
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html section inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log("Now the bot is asking a question");
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `;
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Welcome, What's your name?", 'bot');
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here
// Initial button click 
sendBtn.addEventListener('click', (event) => {
  event.preventDefault()

  // Store the value in a variable so we can access it after we 
	// clear it from the input
  const userName = nameInput.value
  showMessage(`${userName}`,'user');

  // Clears the input field
  nameInput.value = '' 
  //Here I will add the name of the next function. I just need to create it first.
  //setTimeout(() => showFoodOptions(userName), 1000)
})




// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greetUser, 1000);
