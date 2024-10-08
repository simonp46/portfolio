function hamburg(){
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(0px)';
}

function cancel(){
    const navbar = document.querySelector('.cancel');
    navbar.style.transform = 'translateY(-500px)';
}

const texts = [
    "FULL STACK DEVELOPER",
    "WEB DESIGNER",
    "CHATBOT DESIGNER",
    "DATABASE DEVELOPER"
]

let speed =100;
const textElement = document.querySelector('.typewriter-text');

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if(charcterIndex < texts[textIndex].length){
        textElement.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000);
    }
}

function eraseText(){
    if(textElement.innerHTML.length > 0){
        textElement.innerHTML = textElement.innerHTML.slice(0,- 1);
        setTimeout(eraseText, 50);
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500);
    }
    }
window.onload = typeWriter;

document.getElementById('hireButton').addEventListener('click', function() {
    const phoneNumber = '573045374560';
    const message = "Hello Simon. I have seen your portfolio and would like to talk to you about a job offer.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
});

function sendEmail() {
    const email = "padrongavi@hotmail.com";
    const subject = "job vacancy";
    const body = "Hello Simon. I would like to make you a job offer";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(mailtoLink, '_blank');
}
