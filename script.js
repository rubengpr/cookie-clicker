// Login page

// Show/Hide password text
let eyeIcon = document.getElementById("eyeicon")
let password = document.getElementById("password-login")

eyeIcon.addEventListener('click', function() {
    if (password.type == "password") {
        password.type = "text"
        eyeIcon.src = "images/eye-open.svg"
    } else {
        password.type = "password"
        eyeIcon.src = "images/eye-closed.svg"
    }
})

//Main page

// Initial cookie cookieCount
let cookieCount = 0;

// Increase cookie count by 1 on click to "Increase" button
document.querySelector('.increase').addEventListener('click', function() {
    cookieCount++; // Increase cookieCount by 1
    updateCounter(); // Update the counter display
});

// Decrease cookie count by 1 on click to "Decrease" button
document.querySelector('.decrease').addEventListener('click', function() {
    if (cookieCount > 0) {
        cookieCount--; // Decrease cookieCount by 1, but ensure cookieCount doesn't go below 0
        updateCounter(); // Update the counter display
    }
});

// Function to update the counter display
function updateCounter() {
    document.getElementById('cookiecounter').textContent = `${cookieCount} cookies produced`;
    if (cookieCount >= 0 && cookieCount < 10) {
        document.getElementById('production').textContent = 'Not too much produced'
    } else if (cookieCount >= 10 && cookieCount < 20) {
        document.getElementById('production').textContent = 'Starting to produce'
    } else if (cookieCount >= 20 && cookieCount < 30) {
        document.getElementById('production').textContent = 'Producing good quantity'
    } else if (cookieCount >= 30) {
        document.getElementById('production').textContent = 'Producing a lot!'
    }
};

// Set to 0 the counter on click "Reset" button
document.querySelector('.resetproduction').addEventListener('click', function() {
    cookieCount = 0;
    updateCounter();
});

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

//Cookie production simulator
const workers = document.getElementById('workers');
const cookiesWorker = document.getElementById('cookies-worker');

function calculateCookies() {
    const numCookies = workers.value * cookiesWorker.value;
    document.getElementById('result').textContent = `You can produce ${numCookies} cookies`;
}

workers.addEventListener('input', calculateCookies);
cookiesWorker.addEventListener('input', calculateCookies);

const countrySelect = document.getElementById('country');
const citySelect = document.getElementById('city');

// Define city options for each country
const cityOptions = {
    Spain: ['Barcelona', 'Madrid', 'Valencia'],
    France: ['Paris', 'Marseille', 'Grenoble']
    // Add more options for other countries as needed
};

// Function to update city options based on the selected country
function updateCityOptions() {
    const selectedCountry = countrySelect.value;
    const cities = cityOptions[selectedCountry] || []; // Get cities for selected country or empty array
    citySelect.innerHTML = ''; // Clear existing options

    // Add new city options
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    });
}

// Event listener to update city options when the selected country changes
countrySelect.addEventListener('change', updateCityOptions);

// Initial update of city options based on the initially selected country
updateCityOptions();
