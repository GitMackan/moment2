const text = document.querySelector('.text');

// Separera bokstäver till enskilda <span>
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>")

const element = document.querySelectorAll('span');
// For-loop som lägger på delay på varje span-tags animation.
for(let i=0; i<element.length; i++) {
    element[i].style.animationDelay = i*0.1 + 's';
}