function downloadFile() {
    const link = document.createElement('a');
    link.href = 'files/resume.pdf';  // Replace with the path to your CV
    link.download = 'liren_cv.pdf';   // The name the file will be downloaded as
    link.click();
}

function hamburg()
{
    const hamburg = document.querySelector('.hamburg')
    const cancel = document.querySelector('.cancel')
    const navbar = document.querySelector('.dropdown');
    
    hamburg.addEventListener('click', ()=>{
        navbar.style.transform = "translateY(0px)"
        hamburg.style.display = 'none'
    })
    cancel.addEventListener('click', ()=>{
        navbar.style.transform = "translateY(-300px)"
        hamburg.style.display = 'block'
    })
}

function cancel()
{

}


const texts = [
    "GAME DEVELOPER",
    "AI ENGINEER",
    "SOFTWARE ENGINEER"
]

let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charIndex = 0;

function typeWriter(){
    if (charIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charIndex)
        charIndex++;
        setTimeout(typeWriter, speed);
    }
    else
    {
        setTimeout(eraseText, 1000);
    }
}


function eraseText()
{
    if (textElements.innerHTML.length > 0)
    {
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText,50);
    }
    else
    {
        textIndex = (textIndex + 1) % texts.length
        charIndex = 0
        setTimeout(typeWriter,500);
    }
}
window.onload = typeWriter