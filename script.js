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
}