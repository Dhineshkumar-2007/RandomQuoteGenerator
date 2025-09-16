function fetchapi(){
    const url = 'https://corsproxy.io/' + encodeURIComponent('https://zenquotes.io/api/random');
    fetch("https://zenquotes.io/api/random")
    .then(response => {
        if (!response.ok) { // Check for HTTP errors
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById("quote").innerHTML = data.content;
    })
    .catch(error => {
        console.error('Error fetching the quote:', error);
        document.getElementById("quote").innerHTML = "Failed to fetch quote. Please check your network connection."; // User-friendly message
    });
}
