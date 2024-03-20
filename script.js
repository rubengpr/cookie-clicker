let count = 0; // Initial count

document.querySelector('.increase').addEventListener('click', function() {
    count++; // Increase count by 1
    updateCounter(); // Update the counter display
});

// Add event listener to the "Decrease" button
document.querySelector('.decrease').addEventListener('click', function() {
    if (count > 0) {
        count--; // Decrease count by 1, but ensure count doesn't go below 0
        updateCounter(); // Update the counter display
    }
});

// Function to update the counter display
function updateCounter() {
    document.getElementById('cookiecounter').textContent = `${count} cookies eaten`;
    if (count >= 0 && count < 10) {
        document.getElementById('hungriness').textContent = 'Not very hungry'
    } else if (count >= 10 && count < 20) {
        document.getElementById('hungriness').textContent = 'A bit hungry'
    } else if (count >= 20 && count < 30) {
        document.getElementById('hungriness').textContent = 'Hungry'
    } else if (count >= 30) {
        document.getElementById('hungriness').textContent = 'Very hungry'
    }
}

// Set to 0 the counter
document.querySelector('.reset').addEventListener('click', function() {
    count = 0;
    updateCounter();
})


//Image changer

const imageCookie = document.getElementById('cookie'); //We declare a variable that will point to the changing image

document.getElementById("imagechanger1").addEventListener('click', function() {
    imageCookie.src = 'images/cookie.png';
});

document.getElementById("imagechanger2").addEventListener('click', function() {
    imageCookie.src = 'images/cookie2.png';
});

document.getElementById("imagechanger3").addEventListener('click', function() {
    imageCookie.src = 'images/cookie3.png';
});

//Visibility of FAQ answers
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', event => {
        const answer = event.target.nextElementSibling;
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
    });
});