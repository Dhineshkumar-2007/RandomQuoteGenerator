document.getElementById('btn').addEventListener('click', async () => {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        document.getElementById('quote').innerText= `${data.content}`;
    } catch (error) {
        console.error('Error fetching the quote:', error);
    }
});