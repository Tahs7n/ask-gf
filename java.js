function showResponse(answer) {
    const responseElement = document.getElementById('response');
    if (answer === 'yes') {
        responseElement.textContent = 'Yay! I\'m so happy!';
        responseElement.style.color = '#4CAF50';
    } else {
        responseElement.textContent = 'Oh, that\'s okay. Maybe another time.';
        responseElement.style.color = '#f44336';
    }
}
