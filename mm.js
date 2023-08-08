const xhr = new XMLHttpRequest();
xhr.open('GET', 'localhost/web.php', true);
xhr.onload = function() {
  if (xhr.status === 200) {
    // الطلب كان ناجحًا.
    const data = xhr.responseText;
    // افعل شيئًا بالبيانات.
  } else {
    // الطلب فشل.
    console.log('Request failed: ' + xhr.status);
  }
};
xhr.send();




const startButton = document.getElementById('startButton');
const outputTextarea = document.getElementById('textarea');
const stopButton = document.getElementById('stopButton');
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';

startButton.addEventListener('click', () => {
  recognition.start();
});

recognition.onresult = (event) => {
const transcript = event.results[event.results.length - 1][0].transcript;
  outputTextarea.value += transcript;
};

recognition.onerror = (event) => {
console.error('Speech recognition error:', event.error);
};

stopButton.addEventListener('click', () => {
recognition.stop();

});
