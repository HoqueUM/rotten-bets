const fetch = require('node-fetch');

async function pingUrl() {
    const url = `https://rotten-bets-backend.onrender.com/send`;
    console.log(`Pinging ${url} at ${new Date().toISOString()}`);
    await fetch(url, { method: 'POST' });
}

// Ping every 120 seconds
setInterval(pingUrl, 120000);