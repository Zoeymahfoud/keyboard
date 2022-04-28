var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var secretKey = alphabet[Math.floor(Math.random() * alphabet.length)];

document.body.addEventListener('keypress', function(event) {
var keyPressed = event.key;

if (keyPressed === secretKey) {
document.body.innerHTML += '<p>SECRET KEY PRESSED</p>';
secretKey = alphabet[Math.floor(Math.random() * alphabet.length)];
}
});