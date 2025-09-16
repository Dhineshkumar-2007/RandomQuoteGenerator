function fetchapi() {
    const url = 'https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random';
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('quote').textContent = `${data[0].q} - ${data[0].a}`;
        })
        .catch(error => {
            console.error('Error fetching the quote:', error);
            document.getElementById('quote').textContent = 'Failed to fetch quote. Please try again.';
        });
}