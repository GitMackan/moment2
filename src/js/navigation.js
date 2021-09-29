// Eventlyssnare som kollar efter skroll.
// När skroll är större än 0 i Y-axeln, alltså lägre än sidans topp, toggla header

window.addEventListener("scroll", function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Eventlyssnare som kollar efter klick på navigering i mobilläge.

const navigation = document.querySelector('nav');
document.querySelector('.toggle').onclick = function(){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
};

let properties = ['Marcus', 'Nygård', 'Februari'];

function myFunc (firstName, lastName, birthMonth) {
    first = firstName;
    last = lastName;
    month = birthMonth;
    console.log(first, last, 'är född i månaden:', month);
}
myFunc(...properties);