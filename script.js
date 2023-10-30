document.addEventListener('DOMContentLoaded', function () {
  const chatbox = document.getElementById('chat');
  const input = document.getElementById('input');
  const sendMessage = document.getElementById('send-button');

  sendMessage.addEventListener('click', () => {
    const message = input.value;
    input.value = '';

    displayMessage('You', message);

    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then((response) => response.json())
      .then((data) => {
        displayMessage('Chatbot', data.message);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });

  function displayMessage(sender, message) {
    const divElem = document.createElement('div');
    divElem.className = 'message-box';
    const senderElem = document.createElement('p');
    senderElem.className = 'sender';
    senderElem.textContent = sender + ': ';
    const messageElem = document.createElement('p');
    messageElem.className = 'message';
    messageElem.textContent = message;

    divElem.appendChild(senderElem);
    divElem.appendChild(messageElem);
    chatbox.appendChild(divElem);
  }
});
